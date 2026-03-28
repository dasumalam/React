import React, { useState } from "react";

function Color () {
    const [color,setcolor] = useState('gray')

    return(

        <div>
            <div className="h-50 w-100 border mt-2 m-auto " style={{backgroundColor:color}}>
                <button className="border px-4 py-1 rounded-lg mt-3 ml-1" onClick={()=> setcolor('pink')}>pink</button>
                <button className="border px-4 py-1 rounded-lg mt-3 ml-1" onClick={()=> setcolor('olive')}>olive</button>
                <button className="border px-4 py-1 rounded-lg mt-3 ml-1" onClick={()=> setcolor('orange')}>orange</button>
                
            </div>
            
        </div>
    )
}
export default Color;