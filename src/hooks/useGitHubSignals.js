import { startTransition, useEffect, useState } from 'react'

const defaultSignals = {
  publicRepos: 32,
  followers: 6,
  following: 5,
  started: '2022',
  activeProjects: 14,
  languages: {
    TypeScript: 5,
    Python: 5,
    HTML: 2,
    JavaScript: 1,
  },
}

export function useGitHubSignals() {
  const [signals, setSignals] = useState(defaultSignals)

  useEffect(() => {
    let isCancelled = false

    const loadSignals = async () => {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch('https://api.github.com/users/Lakshya-2440'),
          fetch('https://api.github.com/users/Lakshya-2440/repos?per_page=100&sort=updated'),
        ])

        if (!userResponse.ok || !repoResponse.ok) {
          return
        }

        const user = await userResponse.json()
        const repos = await repoResponse.json()

        const personalRepos = repos.filter((repo) => !repo.fork)
        const languageMap = personalRepos.reduce((summary, repo) => {
          if (!repo.language) {
            return summary
          }

          return {
            ...summary,
            [repo.language]: (summary[repo.language] ?? 0) + 1,
          }
        }, {})

        if (isCancelled) {
          return
        }

        startTransition(() => {
          setSignals({
            publicRepos: user.public_repos ?? defaultSignals.publicRepos,
            followers: user.followers ?? defaultSignals.followers,
            following: user.following ?? defaultSignals.following,
            started: user.created_at?.slice(0, 4) ?? defaultSignals.started,
            activeProjects: personalRepos.length || defaultSignals.activeProjects,
            languages:
              Object.keys(languageMap).length > 0 ? languageMap : defaultSignals.languages,
          })
        })
      } catch {
        // Leave fallback data in place when GitHub is unavailable.
      }
    }

    loadSignals()

    return () => {
      isCancelled = true
    }
  }, [])

  return signals
}
