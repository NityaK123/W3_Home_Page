import React,{useState,useEffect,useRef} from 'react'
import { useContext } from 'react'
import {context} from '../App'


const Effect=()=>{

    const {name,sap} = useContext(context)

    const [value,setValue] = useState(0)
    const [data,setData] = useState()
    const ref = useRef(null)

    useEffect(()=>{
    const d = fetch("https://dummyjson.com/users")
    console.log(d.then((data)=>data.json()).then((val)=>setData(val)))
    console.log("data",data)
    console.log(ref.current)
    },[])

    return(
        <>
            <h1>{value}</h1>
            <h1>{name}</h1>
            <button onClick={()=>setValue((value)=>value+1)}>Click</button>
            {
                data?.users.map((val)=>{
                    return(
                        <>
                        <li>{val.firstName}</li>
                        </>
                    )
                })
            }
        </>
    )
}
export default Effect

