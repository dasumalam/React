import React, { use, useEffect, useRef, useState } from 'react'



function model() {

    const  [length,setlength]=useState(8)
    const  [number,setnumber]=useState(false)
    const  [charcter,setcharcter]=useState(false)
    const  [password,setpassword]=useState("")

    //useref
    const passwordref = useRef(null)

    const copy=()=>{
        window.navigator.clipboard.writeText(passwordref.current.value)
        passwordref.current?.select()
    }

    

    const passganrete=()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (number) str += "1234567890"
        if(charcter) str += "!@#$%^&*()_+{:"


        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random()*str.length)
            pass += str.charAt(char)
            
        }
        setpassword(pass)

    }

   useEffect(()=>{
    
    passganrete()

   },[length,number,charcter])

   






    return (
        <>
        <div className='w-full max-w-md mx-auto px-4 py-3 my-8 border text-center'>
            Password Ganereter
            <div className='flex w-full justify-between border my-8'>
                <input type="text"
                value={password}
                readOnly 
                placeholder='password'
                className='outline-none'
                
                ref={passwordref}/>
                <button onClick={copy} className='border bg-gray-300 py-1 px-1 outline-none'>Copy</button>
            </div>


            <div className='flex justify-between'>
                <div>
                <input type="range"
                onChange={(e)=>setlength(e.target.value)}
                value={length}
                min={6}
                max={99}/>
                <label htmlFor="length">Length : {length}</label>
               </div>

                <div>
                <input type="checkbox"
                defaultChecked = {number}
                onClick={(e)=>setnumber(((prev) => !prev))}
                 />
                <label htmlFor="number">Number</label>
               </div>

                <div>
                <input type="checkbox"
                defaultChecked={charcter}
                onClick={(e)=>setcharcter(((prev)=>!prev))}/>
                <label htmlFor="charcter">Charcter</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default model
