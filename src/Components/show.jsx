import { useLocation } from "react-router-dom";
function Show()
{
  const location = useLocation();
  const val = location.state;
return(
  <>
  <div className="card1">
    <h1>Github Users</h1>
    <img src={val.avatar_url} className="image"/>
    <p>Login Id:{val.login}</p>
    <p> Id:{val.id}</p>
    <p> followers_url:{val.followers_url}</p>
    <p> organizations_url:{val.organizations_url}</p>
    <p>View Type:{val.user_view_type}</p>
  </div>
  </>
)
}
export default Show