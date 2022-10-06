
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
                houseName: "A",
                houseID: 1,
                rentAmt: 9000,
                alloted: true,
                occupied: "Ganesan",
            },
            {
                houseName: "B",
                houseID: 2,
                rentAmt: 9000,
                alloted: false,
                occupied: "",
            },
            {
                houseName: "C",
                houseID: 3,
                rentAmt: 10000,
                alloted: false,
                occupied: "",
            },
            {
                houseName: "D",
                houseID: 4,
                rentAmt: 10000,
                alloted: true,
                occupied: "Sakthy",
            },
            {
                houseName: "E",
                houseID: 5,
                rentAmt: 8500,
                alloted: true,
                occupied: "BABU",
            },

            ]
        
    

    // setHouseDetails(houses)


    return (
        <div>
            <Menu/>
            <HouseDetails  house = {houses} />
                    
​
         
        </div>
        //   <div>
        //    Name : 
        // {appContext.email}
        // </div>
    )
}
export default House

