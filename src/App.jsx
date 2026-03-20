import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteShell from './components/SiteShell'
import { useGitHubSignals } from './hooks/useGitHubSignals'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ConnectPage from './pages/ConnectPage'
import DomainDetailPage from './pages/DomainDetailPage'
import DomainsPage from './pages/DomainsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  const signals = useGitHubSignals()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage signals={signals} />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectSlug" element={<ProjectDetailPage />} />
          <Route path="domains" element={<DomainsPage />} />
          <Route path="domains/:domainSlug" element={<DomainDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutPage signals={signals} />} />
          <Route path="connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
