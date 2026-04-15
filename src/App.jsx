import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Story from './pages/Story'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="stories/:slug" element={<Story />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}
