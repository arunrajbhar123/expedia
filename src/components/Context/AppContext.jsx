import React
// , { useReducer }
 from 'react'


export const AppContext=React.createContext();
// const initstate={
//     isAuth:false,
//     token:null
// }
// function reducer (state,action){
//     switch(action.type){
//         case "LOGIN_SUCCESS":{
//          return{ ...state,
//             isAuth:true,
//             token:action.token
//         }
//     }
//         case "LOGIN_FAILURE":{
//             return{...state,
//             isAuth:false,
//             token:null
//         }
//     }
//         default:{
//             return state;
//         }
//     }
// }


export default function AppContextProvider({children}) {
    // const [state,dispatch]=useReducer();

    return(
        <AppContext.Provider value={children}>{children}</AppContext.Provider>
    )
}