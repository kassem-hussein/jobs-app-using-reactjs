import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../assets/data.json'
import { Itemcard } from '../../components';
import './job.css'
const Job = () => {
  const id =useParams().id 
  const [job,setJob] =useState(null);
  useEffect(()=>{
      setJob(data.filter(job=>job.id ==id)[0])

  },[id])
  
  return (
      <div style={{minHeight:'250px'}}>
      {  
           job?<div className='Job-description-container'>
                  <div className='job-description-card-container'>
      
                        <div className='company-info'>
                              <h3>Company Inforamtion :</h3>
                              <div>
                                    <img src={job.logo} alt=""/>
                                    <h4>{job.company}</h4>     
                              </div>
                        </div>
                        <div className='job-requirements'>
                              <Itemcard title="Job Requirements" Array={job.job_requirement}/>
                        </div>
                        <div className='job-responslity'>
                              <Itemcard title="Job Responsibilities" Array={job.job_responslity}/>            
                        </div>
                        <div className='job-skills'>
                             <Itemcard title="Job Skills" Array={job.job_skills}/>  
                        </div>
                        <div className='job-email'>
                              <h3>Send your CV :</h3>
                              <h5>{job.email}</h5>
                        </div>
                  </div>
            </div>:<div className='alert-div'>
                  <div className='alert-deng'>
                        <label>No Found</label>
                        <div className='after-div-alert'>
                              
                        </div>
                  </div>
            </div>
      }
      </div>
  )
}

export default Job
