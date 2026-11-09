import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Content()
{
const navigate=useNavigate()
const [count,setCount]=useState([])
useEffect(()=>{
  async function githubprofile()
  {
  const response=await fetch("https://api.github.com/users");
  const data=await response.json();
  setCount(data); 
  }
  githubprofile();

},[])
return (
  <div className='cards'>
    {Array.isArray(count) && count.map((val) => (
      <div 
        key={val.id} 
        className="card" 
        onClick={() => navigate('/show', { state: val })}
      >
        <img className='image' src={val.avatar_url} alt={val.login} />
      </div>
    ))}
  </div>
)
}
export default Content