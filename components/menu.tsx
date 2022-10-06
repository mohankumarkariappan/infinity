// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { user, navication, userInterface } from '../interfaces/userInterfaces'


// const user : user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

// }
// const navigation: navication[] = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation : userInterface[] = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

import React from "react"
import Image from "next/image";
import Infinity_logo from "../public/Infinity_logo.png"


export const Menu = () => {
 

// optional options with default values and callback functions

  return (
<>
    <div>
      <nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <Image src={Infinity_logo} className="mr-3 h-6 sm:h-10" width={40} height={40} alt=" Logo" ></Image>
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" 
            alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Infinity
            </span>
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-white
           bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0
            md:dark:text-white
             dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/House" className="block py-2 pr-4 pl-3 text-gray-700 rounded
           hover:bg-gray-100 md:hover:bg-transparent md:border-0
            md:hover:text-blue-700 md:p-0 dark:text-gray-400
             md:dark:hover:text-white dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent">Houes</a>
        </li>
        <li>
          <a href="/House/[1]/bills" className="block py-2 pr-4 pl-3 text-gray-700 rounded
           hover:bg-gray-100 md:hover:bg-transparent md:border-0
            md:hover:text-blue-700 md:p-0 dark:text-gray-400
            md:dark:hover:text-white dark:hover:bg-gray-700
             ark:hover:text-white md:dark:hover:bg-transparent">Bills</a>
        </li>
        <li>
          <a href="/contacts" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>

        </div>

      </nav>
      <div>
      <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 md:text-center dark:text-gray-400">© 2022 
    <a href="" className="hover:underline">Infinity</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li> */}
    </ul>
</footer>
      </div>

      </div>
      </>
  )
}
export default Menu