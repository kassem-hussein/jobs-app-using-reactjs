
import './itemcard.css'
const Itemcard = ({title,Array}) => {
  return (
    <div className='itemcard'>
            <h3>{title}:</h3>
            <ul>
                  {
                        Array.map((req,index)=>{
                              return (
                                    <li key={index}>{req}</li>    
                              )
                        })
                  }
                  
            </ul>
    </div>
  )
}

export default Itemcard
