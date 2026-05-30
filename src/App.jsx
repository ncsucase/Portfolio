import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import SiteLayout from './layouts/SiteLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Work from './pages/Work'
import Story from './pages/Story'
import Perspectives from './pages/Perspectives'
import PerspectiveStory from './pages/PerspectiveStory'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="perspectives" element={<Perspectives />} />
          <Route path="perspectives/:slug" element={<PerspectiveStory />} />
          <Route element={<ProtectedRoute />}>
            <Route path="work" element={<Work />} />
            <Route path="stories/:slug" element={<Story />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}
