import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


const Home=()=>{

    const data = useSelector(state=>state)
    const dis = useDispatch()
    
    return(
        <>
            <h1>{data.value}</h1>
            <button onClick={()=>dis({type:'add',payload:10})}>Add</button>
            <button onClick={()=>dis({type:'sub',payload:5})}>Subtraction</button>
            <button onClick={()=>dis({type:""})}>Subtraction</button>

        </>
    )
} 

export default Home