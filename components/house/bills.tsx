import { useRouter } from "next/router"
export const Bills = () => {

    return(
<>

<div className="w-full p-5 dark:text-gray-400  text-gray-500  bg-slate-10 ">
<div className="p-10">
<div className="">

<div className=" mb-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="p-5">
    <a href="">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Billing Summay</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Last Payment Details </p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mar - 22 -  - </p>
    </div>
</div>

</div>

<div className="  font-bold">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
               Billing</h5>
            </div>
   <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        House Name</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House Name" required></input>
  </div>

  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900
         dark:text-gray-300">Rent Month </label>
    <input type="text" id="rent_amt"
     className="bg-gray-50 border border-gray-300
      text-gray-900 text-sm rounded-lg focus:ring-blue-500
       focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Month" required>

         </input>
  </div>

  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900
         dark:text-gray-300">Rent Amount</label>
    <input type="text" id="rent_amt"
     className="bg-gray-50 border border-gray-300
      text-gray-900 text-sm rounded-lg focus:ring-blue-500
       focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rent Amount" required>

         </input>
  </div>


  <button type="submit" className="text-white bg-blue-700
   hover:bg-blue-800 focus:ring-4 focus:outline-none
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> 
     </div>
     </div>
  </>
  )
}
export default Bills