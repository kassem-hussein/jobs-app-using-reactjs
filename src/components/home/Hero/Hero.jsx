import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './hero.css'

const Hero = () => {
  const [search,setSearch] =useState()
  const navigate =useNavigate()
  const handleClick=(e)=>{
    e.preventDefault();
    navigate(`/jobs?q=${search}`);
  }
  return (
    <div className='H-hero'>
        <div className='H-hero-search'>
          <h3>Find your dream job here</h3>
          <form action='/jobs'>
            <input type="text" name='q' placeholder='Search job tilte' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button  onClick={(e)=>handleClick(e)}>Search</button>
          </form>
        </div>
    </div>
  )
}

export default Hero
