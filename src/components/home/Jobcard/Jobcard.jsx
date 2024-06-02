import './jobcard.css'
import { Link } from 'react-router-dom';
const Jobcard = ({job}) => {
  
  return (
   <Link to={`/jobs/${job.id}`} className='Job-card-hover'>
    <div className='H-Job-card'>
          <img src={job.logo} alt=""/>
              <div className='H-job-card-info'>
                    <h4>{job.job_title}</h4>
                    <h5>{job.company}</h5>
              </div>
    </div>
  </Link>
  )
}

export default Jobcard
