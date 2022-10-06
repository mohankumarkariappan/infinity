
import { useAppContext } from "../../context/template";
function   Details    () {
  const appContext = useAppContext();
  console.log(appContext.email)
  console.log(appContext.name)
  return   ( 
     <div> 
    <h1>Details</h1>
{appContext.email}
{appContext.name}
     </div>
//   <div>
//    Name : 
// {appContext.email}
// </div>
  )
}
export default Details
