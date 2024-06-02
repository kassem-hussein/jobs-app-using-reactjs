import './future.css'
import Jobcard from '../Jobcard/Jobcard'
import data from '../../../assets/data.json'
import { useEffect, useState } from 'react'
const Futures = () => {
  const [futures,setFutures] =useState();
  useEffect(()=>{
            setFutures(data.filter(v=>v.futures))
  },[])

  return (
    <div className='H-Futures-container'>
            <h2>Futures Jobs</h2>
            <div className='H-Futures-jobs'>
                        {
                              futures?.map((job,index)=>{
                                    return(
                                          <Jobcard key={index} job={job}/>
                                    )
                              })
                        }    
            </div>
    </div>
  )
}

export default Futures
