March 2026
8 min read

# The Feedback Loop That Lies: Why Click Data Is Corrupting Your Search Rankings

`Information Retrieval` `Machine Learning` `Ranking Systems` `Search Engineering`

---

## Abstract

Search and recommendation systems are routinely trained on user click data as a proxy for relevance. The assumption is intuitive: if a user clicked a result, it must have been good. But click behavior encodes far more than relevance — it encodes position, presentation, and prior expectation. A document ranked first receives clicks partly because it is first, not only because it is relevant. Training a learning-to-rank model on unmodified click data therefore encodes position as a latent relevance signal, creating a self-reinforcing feedback loop where top-ranked results accumulate clicks, which reinforces their top rank, regardless of true document quality. This is position bias, and it is one of the most consequential, least discussed problems in applied ML. This article examines its mechanics, the inverse propensity weighting correction, and why the organizations most affected by it are often the last to recognize it.

---

## 1. What You're Actually Measuring When You Measure Clicks

The standard story about relevance feedback in search goes like this: deploy a ranking function, collect user clicks, treat clicks as positive labels, retrain. Repeat. The model should, over time, converge toward what users actually want.

The story has one fatal flaw: clicks are not drawn from the distribution of relevance. They are drawn from the distribution of relevance conditioned on what the user saw, in which order they saw it, and what they expected to find. These are not the same distribution, and conflating them causes problems that compound silently across millions of queries.

Joachims et al. (2005) formalized this through controlled eye-tracking studies showing that users exhibit a strong tendency to examine results from top to bottom and rarely engage with results past the first few positions. A result ranked fifth is inspected far less often than one ranked first, independently of its quality. This is the examination hypothesis: a click requires both examination and relevance, but examination is position-dependent.

The practical consequence is immediate. A highly relevant document placed at rank 5 will receive fewer clicks than a moderately relevant document at rank 1 — not because users prefer the latter, but because they are less likely to ever look at the former. Train on this data without correction, and you teach your model that position-1 documents are relevant, because they look relevant in the click logs, even when the click is partly an artifact of position. The model learns the shape of your interface, not the shape of user intent.

---

## 2. The Feedback Loop: How Position Bias Compounds Over Time

The static version of position bias is bad. The dynamic version is worse.

In a live system with continuous retraining, the bias does not stay constant — it accelerates. Round 1: model ranks documents A and B, with A at rank 1 and B at rank 4. A receives more clicks. Model updates: A > B. Round 2: model reinforces A at rank 1. A receives even more clicks relative to B. The gap widens. By Round N, A is entrenched, and B — which may be more relevant by any independent human judgment — has never surfaced long enough to accumulate the click evidence that would allow the model to reconsider it.

This is a feedback loop in the formal sense: a system where outputs become inputs and initial conditions determine long-run equilibria. Agarwal et al. (2019) demonstrated this empirically in large-scale recommendation systems, showing that position-biased training creates filter bubbles not through editorial intent but through model dynamics alone. The algorithm is not biased toward A because anyone decided A was better. It is biased toward A because A was slightly higher one Tuesday, and the system reinforced that advantage until it became structurally permanent.

I ran into a version of this in my own search ranking work. When I initially trained on proxy relevance labels derived from interaction data without position correction, the model over-ranked items with high early exposure on held-out queries that had no positional contamination. The model had absorbed position as a feature — not because I gave it position as an input, but because position bled into the labels, and the model found it there. It was learning the right answer to the wrong question.

---

## 3. Inverse Propensity Weighting: Correcting the Signal Without Throwing Away the Data

The cleanest solution to position bias is inverse propensity weighting (IPW), borrowed from causal inference. The core idea: if a document's click probability is inflated by its position, correct for that inflation by down-weighting clicks from high-visibility positions and up-weighting clicks from low-visibility positions.

Formally, let P(exam | pos) be the probability that a user examines a result at position pos. This is the propensity score. An unbiased relevance estimate weights each observed click by 1 / P(exam | pos), so that a click from position 5 — where examination probability is low — counts for more than a click from position 1. The intuition is exactly what you would want: rare, low-position clicks are more informative about genuine relevance than common, top-position clicks.

Joachims et al. (2017) showed that IPW-corrected learning-to-rank provably converges to the same model you would learn from fully unbiased relevance labels, under the assumption that propensity scores are estimated correctly. The catch is that propensity scores are not directly observable. You have to measure them.

The standard approach is intervention harvesting: periodically swap the positions of documents in live traffic — deliberately surface lower-ranked items — and observe the click-rate delta. This gives you a direct measurement of examination probability that is independent of relevance, because you are controlling for relevance by randomizing. It requires some experimental discipline and product team buy-in, but the signal quality is far superior to assumed propensity models.

In my ranking project, I applied IPW with propensity scores estimated from position-randomized query subsets and trained a LambdaMART model on the corrected labels across 2M+ query-document pairs. The result was a 57% improvement in NDCG@10 over the uncorrected BM25 baseline. Some of that gain is the model architecture. But position debiasing was where the floor rose — the model stopped rewarding documents for being early and started rewarding them for being good.

---

## 4. LambdaMART and the Learning-to-Rank Landscape

It is worth pausing on why learning-to-rank matters before narrowing back to the bias problem, because the two are deeply connected.

Classical IR metrics — BM25, TF-IDF — score documents independently of each other. They work as baselines but cannot model inter-document relationships that matter for ranking: if you are already showing a highly relevant document at rank 1, how much marginal value does a similar document add at rank 2? Pointwise scoring does not ask this question. List-aware ranking does.

LambdaMART (Burges 2010) is the dominant industrial solution. It is a gradient-boosted tree ensemble trained on pairwise ranking objectives, with gradient terms derived from how swapping two documents' positions would change NDCG. It operates on feature vectors per query-document pair, meaning it can incorporate semantic signals — embedding similarities, entity matches, query-document overlap — alongside structural signals like document freshness or domain authority. The model learns a context-sensitive weighting over these features through its tree structure.

The irony is that this expressiveness makes LambdaMART more sensitive to biased training labels, not less. A neural model with strong regularization may partially average out positional artifacts. A gradient boosted tree will exploit every signal in the labels — including position contamination — and do so efficiently. Power comes with responsibility to clean your data.

This is a general principle that I keep relearning: the more expressive your model, the more important your measurement hygiene. A weak model learns little. A strong model learns everything, including the things you did not mean to teach it.

---

## 5. The Organizational Problem Is Harder Than the Technical One

IPW exists. Intervention harvesting exists. LambdaMART supports unbiased loss formulations. The mathematics and the engineering are mature, well-documented, and available in open-source libraries. And yet the majority of production search systems are trained on naively collected click data.

The barrier is not technical. It is organizational. Running position-randomization experiments means deliberately degrading user experience for a subset of queries to collect calibration data. It requires buy-in from product teams who are measured on weekly engagement, infrastructure for controlled experimentation, and the institutional willingness to accept a short-term metric dip for a long-term improvement that is harder to attribute. In most organizations, that is a hard sell.

The result is that position bias persists not because no one knows how to fix it, but because the people who know are not the people making the prioritization call. This is a recurring pattern in applied ML: the hard problems are not the gradient updates. They are the measurement hygiene, the organizational alignment, and the willingness to admit that the metric you have been optimizing is not the metric you actually care about.

Anywhere you collect behavioral feedback on a ranked or recommended output — search, recommendations, ad auctions, autocomplete — you are collecting position-contaminated data. The feedback loop is structural, not incidental. It does not go away by accident. Recognizing it is the first step, and for most teams building these systems today, it has not happened yet.

---

## References

Joachims, T., Granka, L., Pan, B., Hembrooke, H., & Gay, G. (2005). Accurately interpreting clickthrough data as implicit feedback. *SIGIR*.

Joachims, T., Swaminathan, A., & Schnabel, T. (2017). Unbiased learning-to-rank with biased feedback. *WSDM*.

Burges, C. (2010). From RankNet to LambdaRank to LambdaMART: An overview. *Microsoft Research Technical Report*.

Agarwal, A., Zaitsev, I., Wang, X., Li, C., Najork, M., & Joachims, T. (2019). Estimating position bias without intrusive interventions. *WSDM*.

Järvelin, K., & Kekäläinen, J. (2002). Cumulated gain-based evaluation of IR techniques. *ACM Transactions on Information Systems*.
