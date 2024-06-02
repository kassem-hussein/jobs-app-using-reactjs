import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Footer-container-info'>
        <div className='Footer-companyName'>
          <h2>Job<span>Search</span></h2>
          <p>Best way to find job</p>
        </div>
        <div>
          <h3>Quick Links</h3>
            <ul>
                <Link to={'/'}><li className="coolLink3">Home</li></Link> 
                  <Link to={'/jobs'}><li className="coolLink3">Jobs</li></Link> 
                  <Link to={'/companies'}><li className="coolLink3">Companies</li></Link> 
            </ul>
        </div>
        <div>
          <h3>User Links</h3>
            <ul>
                <Link><li className="coolLink3">Privacy</li></Link> 
                <Link><li className="coolLink3">Terms of Service</li></Link>    
            </ul>
        </div>
      </div>
      <h5>All right are reserved&copy; by JobSearch 2023-2024</h5>
    </div>
  )
}

export default Footer
