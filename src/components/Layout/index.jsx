import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import './index.scss'
const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <span className="tags top-tag-html">
        &lt;html&gt;
        <br />
      </span>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        </span>
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
