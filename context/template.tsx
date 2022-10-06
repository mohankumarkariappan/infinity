// src/context/state.js
import { createContext, useContext } from 'react';
import { user } from '../interfaces/userInterfaces';

const AppContext = createContext<user| null>(null)

export function AppWrapper({ children }) {
    const user : user =  { 
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          

    } 
  let sharedState =  user

  console.log(user.email, "template")

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}