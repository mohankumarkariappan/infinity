
import { useAppContext } from "../../context/template";
import { Menu } from "../../components/menu";
import { HouseDetails } from "../../components/house/house"
import { houeDetails } from "../../interfaces/userInterfaces"
import { useEffect, useState } from "react";

export interface houseDtls {
    houseDtls : houeDetails[]
 }


function House() {
    const appContext = useAppContext();

    const [houseDtl, setHouseDetails] = useState<houeDetails[]>([])
 
    console.log(appContext.email)
    console.log(appContext.name)
    // const houses = {
    //     data: {
    //         houseDetails: [{
    //             houseName: "AA",
    //             houseID: 12,
    //             rentAmt: 9000,
    //             alloted: true,
    //             occupied: "AAAAAA",
    //         },
    //         {
    //             houseName: "BB",
    //             houseID: 14,
    //             rentAmt: 9000,
    //             alloted: false,
    //             occupied: "",
    //         },

    //         ]
    //     }
    // }
      const houses: houeDetails[] =   [{
                houseName: "AA",
                houseID: 12,
                rentAmt: 9000,
                alloted: true,
                occupied: "AAAAAA",
            },
            {
                houseName: "BB",
                houseID: 14,
                rentAmt: 9000,
                alloted: false,
                occupied: "",
            },

            ]
        
    

    // setHouseDetails(houses)


    return (
        <div>
            <Menu/>
            <HouseDetails  house = {houses} />
            {appContext.email}
            {appContext.name}
            
​
         
        </div>
        //   <div>
        //    Name : 
        // {appContext.email}
        // </div>
    )
}
export default House

