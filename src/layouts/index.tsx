import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ padding: '20px 15px' }}>
      <div>Practice Demo</div>
      <div style={{ display: 'flex', gap: 5 }}>
        <Link to="/">Home</Link>
        <Link to="/rich-menu">Rich Menu</Link>
        <Link to="/player">Player</Link>
      </div>
      <div style={{ paddingTop: 20 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
