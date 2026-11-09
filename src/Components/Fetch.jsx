import { useNavigate } from "react-router-dom"
function Fetch()
{
  const navigate=useNavigate()
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>GitHub User Explorer</h1>

        <p>
          Discover GitHub developers and explore their profiles
          with just one click.
        </p>

        <button className="btn1" onClick={() => navigate('/content')}>
          Explore GitHub Users →
        </button>

        <span>Powered by GitHub API</span>
      </div>
    </div>
  )
}

export default Fetch