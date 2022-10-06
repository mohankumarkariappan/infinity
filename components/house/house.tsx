import { useRouter } from "next/router";
import {houeDetails} from "../../interfaces/userInterfaces" 

export const HouseDetails = ({ house }: {house: houeDetails[]} )=> {
    console.log(house[0].houseName, "Houses")
    console.log(house, "Houses Detials")
     
    const router = useRouter();
    const   tableClick = (houseId : number ) => {
   router.push(`./House/${houseId}`)
    }

    return (
        <>
        <div className="w-full p-5 dark:text-gray-400  text-gray-500  bg-slate-10 ">
            <div className="h-1 font-bold" >
           <h1> House Details </h1>
            </div>
    
        <table className=" p-10 mt-10 w-full text-sm text-left text-gray-500 dark:text-gray-400   ">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="p-4">
                House  #
                </th >
                <th className="py-3 px-6">
                House Name 
                </th>
                <th className="py-3 px-6">
                    Rent Amt
                </th>
                <th className="py-3 px-6">
                    Alloted
                </th>
                <th className="py-3 px-6">
                    Occupied
                </th>
                </tr>
            </thead>
                <tbody className="border-collapse border border-slate-400 ">
                    

    
          {house.map((h) => {
       
                     debugger;
            return(
                <tr 
                     className="table-row bg-white border-b
                                 dark:bg-gray-800 dark:border-gray-700
                                  hover:bg-gray-50 dark:hover:bg-gray-600 
                                  cursor-pointer "
                                  onClick={() => tableClick(h.houseID)}
                                  >
                <td className="p-4 items-center ">
                {h.houseID} 
                </td>
                <td>
                {h.houseName} 
                </td>
                <td>
                {h.rentAmt} 
                </td>
                <td >
                {h.alloted === true? 'Yes': 'No' } 
                </td>
                <td>
                {h.occupied === ''? '-': h.occupied} 
                </td>
                 </tr>
            )
         
          }
         
          )}
        
                   
                </tbody>
        </table>
        
        {/* {houseDetails.length} */}
        </div>
        </>
    )
}
export default HouseDetails