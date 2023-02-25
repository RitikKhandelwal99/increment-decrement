import React from 'react'



const INIT_STATE= 0

const changeTheNumber= (state=INIT_STATE, action) => {
    switch(action.type) {
        case "INCREMENT": return state +1;
        
            case "DECREMENT":return state -1;
            
            default: return state;


    }

    
}
export default changeTheNumber

    

