
import { useAppContext } from "../../context/template";
import  { Menu } from "../../components/menu"; 

  function   Contactsdet    () {
    const appContext = useAppContext();
    console.log(appContext.email)
    console.log(appContext.name)

    return   ( 
       <div>
              <Menu></Menu>
{appContext.email}
{appContext.name}
       </div>
//   <div>
//    Name : 
// {appContext.email}
// </div>
    )
 }
 export default Contactsdet
 
