import { Link ,useLocation} from "react-router-dom";
import {useEffect, useState} from 'react'
import './header.css'
import dark from '../../../assets/icons/dark.png'
import light from '../../../assets/icons/light.png'
import menu from '../../../assets/icons/menu.svg'
import close from '../../../assets/icons/close.svg'
import wclose from '../../../assets/icons/wclose.svg'
import wmenu from '../../../assets/icons/wmenu.svg'
const darkMode =(fn)=>{
      fn((v)=>!v);
      const toend = document.getElementById('trackMode');
      toend.classList.remove('start')
      toend.classList.add('end');
      var root = document.querySelector(':root');
      root.style.setProperty('--color','var(--dark-color)');
      root.style.setProperty('--bg-color','var(--dark-bg-color)');
      root.style.setProperty('--input-color','var(--dark-input-bg-color)')
    }
    const lightMode =(fn)=>{
      fn(v=>!v);
      const tostart = document.getElementById('trackMode');
      tostart.classList.remove('end')
      tostart.classList.add('start');
      var root = document.querySelector(':root');
      root.style.setProperty('--color','var(--light-color)');
      root.style.setProperty('--bg-color','var(--light-bg-color)');
      root.style.setProperty('--input-color','var(--light-input-bg-color)')
    }
const Header = () => {
  const history = useLocation()
  
  const [isLight,setIsLight]=useState(true);
  const [isShow,setShow] =useState(false);
  useEffect(()=>{
      window.scrollTo(0,0);
      setShow(false)
  },[history])
  return (
    <>
            <header className="H-header-container">
                  <h2>Job<span className="search">Search</span></h2>
                  <nav>
                        <ul>
                             <Link to={'/'}><li className="coolLink">Home</li></Link> 
                             <Link to={'/jobs'}><li className="coolLink">Jobs</li></Link> 
                             <Link to={'/companies'}><li className="coolLink">Companies</li></Link> 
                        </ul>
                  </nav>
                  <div className="track-mode" id="trackMode">
                        {
                              isLight?<img onClick={()=>darkMode(setIsLight)} src={light} alt=""/>:
                              <img onClick={()=>lightMode(setIsLight)} src={dark} alt="" />
                        }
                        
                  </div>
                  <div className="mobile-menu">
                        {

                              isShow?
                              isLight?
                              <img src={close} onClick={()=>setShow(v=>!v)} alt="close icon"/>
                              :<img src={wclose} onClick={()=>setShow(v=>!v)} alt="close icon"/>
                              :isLight?
                              <img src={menu} onClick={()=>setShow(v=>!v)} alt="menu icon"/>
                              :
                              <img src={wmenu} onClick={()=>setShow(v=>!v)} alt="close icon"/>
                              
                        }
                              <ul className={isShow?'showMenu':''}>
                              <Link to={'/'}><li className="coolLink2">Home</li></Link> 
                              <Link to={'/jobs'}><li className="coolLink2">Jobs</li></Link> 
                              <Link to={'/companies'}><li className="coolLink2">Companies</li></Link> 
                              </ul>                        
                  </div>
            </header>
    </>
  )
}

export default Header
