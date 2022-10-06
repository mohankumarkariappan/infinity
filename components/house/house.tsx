
import {houeDetails} from "../../interfaces/userInterfaces" 

export const HouseDetails = ({ house }: {house: houeDetails[]} )=> {
    console.log(house[0].houseName, "Houses")
    console.log(house, "Houses Detials")
  

    return (
        <div>
    
        <table className="border-collapse border border-slate-400 mt-10 min-w-full   ">
            <thead className=" border-collapse border border-slate-400">
                <tr>
                <th>
                House  #
                </th>
                <th>
                House Name 
                </th>
                <th>
                    Rent Amt
                </th>
                <th>
                    Alloted
                </th>
                <th>
                    Occupied
                </th>
                </tr>
            </thead>
                <tbody className="border-collapse border border-slate-400 ">
                    

    
          {house.map((h) => {
       
                     debugger;
            return(
                <tr className="table-row ">
                <td className="">
                {h.houseID} 
                </td>
                <td>
                {h.houseName} 
                </td>
                <td>
                {h.rentAmt} 
                </td>
                <td>
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
    )
}
export default HouseDetails