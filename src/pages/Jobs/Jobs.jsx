import {useSearchParams} from 'react-router-dom'
import { useEffect, useState } from 'react';


// local import 
import './job.css'
import data from '../../assets/data.json'
import Jobcard from './../../components/home/Jobcard/Jobcard';
const Jobs = () => {
  const [searchData,setSearch] =useState(data);
  const [query] =useSearchParams();
  const valueSearch =query.get('q');
  const [searchKey,setSearchKey] =useState(valueSearch)
  useEffect(()=>{
      console.log(valueSearch)
      if(!valueSearch&&!searchKey){
            setSearch(data)
      }else{
            setSearch(data.filter(job=>job.job_title.toLowerCase().includes(searchKey)||job.company.toLowerCase().includes(searchKey)))
      }
  },[searchKey,valueSearch])
  return (
    <div>
            <div className='job-search-title'>
                  <label htmlFor='jobSearch'>Search:&nbsp;</label>
                  <input  placeholder='Enter job title' id='jobSearch' value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>     
            </div>
            <div className='jobs-container'>
                  {
                  
                  searchData?.map((job,index)=>{
                        return (
                              <Jobcard key={index} job={job}/>
                        )
                  })}
                  {
                        searchData.length==0?<div className='alert-div' style={{marginTop:'50px'}}>
                                    <div className='alert-deng'>
                                          <label>No Found</label>
                                          <div className='after-div-alert'>
                                          </div>
                                    </div>
                              </div>:''
                  }
                  
            </div>
    </div>
  )
}

export default Jobs
