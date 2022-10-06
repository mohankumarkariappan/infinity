import React from "react"
import { useForm, useFormContext } from "react-hook-form"
import { useRouter } from 'next/router'
import Image from "next/image"
import Infinity_logo from "../../public/Infinity_logo.png"




const login = () => {
   const useFormProps = useForm();
   const { register, handleSubmit, formState: { errors } } = useFormProps
    const router = useRouter()
    const onSubmit = (e) => {
         debugger;
         fetch("https://jsonplaceholder.typicode.com/todos", {
            method : 'post', 
            body: JSON.stringify({
                e
            }), 
            headers: 
            { 'Content-Type': 'application/json'
            },


        }).then((res) => res.json())
        .then((res) => {
             return res.data
        }).catch((error) => {
            console.log(error, "error")
        });
        alert(JSON.stringify(e))
        
        // https://jsonplaceholder.typicode.com/todos
         router.push('/contacts')
    }
       
       
    

return (

 <div className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                    <div
                        className="
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12 border-spacing-1
               md:px-[60px]
               "
                    >

                        <div className="mb-10 md:mb-16 text-center">
                            <a
                                href="javascript:void(0)"
                                className="inline-block max-w-[160px] mx-auto"
                            >
                                {/* <img src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg" alt="logo" /> */}
                                <Image src={Infinity_logo} width ={100} height ={100} ></Image>
                               
                            </a>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    {...register ("username", {required: "This is required." } )}
                                    
                                    className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    {...register ("password" , {required: "This is required." }) }
                                    className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                />
                               
                            </div>
                            <div className="mb-10">
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="w-full bg-blue-700
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
        </div>





    )
}
export default login

