import { useState, useCallback, useEffect,useRef} from "react";

function model(params) {

    const [length, setlength]= useState(8)
    const [number, setnumber]=useState(false)
    const [charter, setcharter]=useState(false)
    const [password, setpassword]=useState(" ")

    //ref hook

    const passwordref = useRef(null)
    const Copypassword = useCallback(()=>{
        passwordref.current?.select();
        passwordref.current?.setSelectionRange(0, 4);
        window.navigator.clipboard.writeText
        (password)
    },[password])
    

    const passwordgenerator=useCallback((fn=>{

        let pass = ""
        let str = "abcdefghijklmnopqrestuvwxyz"

        if (number) str += "0123456789"
        if (charter) str += "@#$%^&*()!:{}`"

        for (let i = 0; i <= length; i++) {
        

            let char = Math.floor(Math.random() * str.length +1)

            pass += str.charAt(char)
            
        }

        setpassword(pass)
        


    }), [length,number,charter,setpassword]) 
    
    useEffect(()=>{
        passwordgenerator()
    },[length,charter,number,passwordgenerator])

    return (
    <>
        <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center text-orange-500 bg-gray-700">
                passwordganreter
            <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">

                <input type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="password"
                readOnly 
                
                ref={passwordref}/>

            <button 
            onClick ={ Copypassword }className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                copy
            </button>

            </div>
            <div className="felx text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                <input type="range"
                min={6}
                max={100}
                value={length}
                 className="cursor-pointer"
                onChange={(e)=>{setlength(e.target.value)}}
                />
              <label>length: {length}</label>


               <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked={number}
                id="numberInput"onChange={()=>{setnumber((prev) => !prev);}}
                />
                 <label>number: {number}</label>
                </div>

                 <div className="flex items-center gap-x-1">


                <input type="checkbox"
                defaultChecked={charter}
                id="numberInput"
                onChange={()=>{setnumber((prev) => !prev);}}
                />
                
                
                 <label>charcter: {charter}</label>
                </div>



                </div>
              
               
            </div>

     </div>
    </>
    
    
    )
}
export default model;