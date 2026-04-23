import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import Story from './pages/Story'
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="stories/:slug" element={<Story />} />
      </Route>
    </Routes>
  )
}
