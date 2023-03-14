import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div>
      <h1>Page Not found</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  </div>
)

export default NotFound
