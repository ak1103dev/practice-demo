import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layouts'
import HomePage from '../pages/HomePage'
import ReactPlayerPage from '../pages/ReactPlayerPage'
import RichMenuPage from '../pages/RichMenuPage'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rich-menu" element={<RichMenuPage />} />
          <Route path="player" element={<ReactPlayerPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
