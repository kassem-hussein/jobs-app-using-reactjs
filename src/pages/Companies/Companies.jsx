import './companies.css'
import { useNavigate } from 'react-router-dom';

const Companies = () => {
  const navigate =useNavigate()
  const data =[
      {
            "id":1,
            "name":"google",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            
      },{
            "id":2,
            "name":"facebook",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
      },{
            "id":3,
            "name":"amazon",
            "logo":"https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
      }
  ]
  const handleClick =(name)=>{
      navigate(`/jobs?q=${name}`);
  }
  return (
    <div style={{minHeight:'300px'}}>
      <h2 className='companies-heading'>Companies</h2>
      <div className='companies-container'>
            {
                  data.map((c,index)=>{
                        return (
                              <div key={index} className='company-card' onClick={()=>handleClick(c.name)}>
                                    <img src={c.logo} width={50} height={50} alt=""/>
                                    <h3>{c.name}</h3>
                              </div>
                        )
                  })
            }
            
      </div>
    </div>
  )
}

export default Companies
