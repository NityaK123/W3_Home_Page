import React,{useReducer, useState} from 'react'

const initialState = {value:0,arr:[]}

const reducer=(state,action)=>{

    switch(action.type){
        case 'add':
            const sum = state.arr.reduce((acc,val)=>acc+val)
            return {value:sum,arr:[sum]}
            break;
        case 'sub':
            const sub=state.arr.reduce((acc,value)=>acc-value)
            return {value:sub,arr:[sub]}
            break
        case 'mul':
            const mul=state.arr.reduce((acc,value)=>acc*value,1)
            return {value:mul,arr:[mul]}
            break 
        case 'divide':
            const div=state.arr.reduce((acc,value)=>acc/value)
            return {value:div,arr:[div]}
        default:
            return {value:action.payload,arr:[...state.arr,action.payload]}
            break;
    }
}

const Calculator=()=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <>
            <h1>{state.value}</h1>
            <input type="number" value={state.value}/>
            <div>
                <div>
                    <button onClick={()=>dispatch({payload:1})}>1</button>
                    <button onClick={()=>dispatch({payload:2})}>2</button>
                    <button onClick={()=>dispatch({payload:3})}>3</button>
                    <button onClick={()=>dispatch({type:"add"})}>+</button>
                </div>
                <div>
                    <button onClick={()=>dispatch({payload:4})}>4</button>
                    <button onClick={()=>dispatch({payload:5})}>5</button>
                    <button onClick={()=>dispatch({payload:6})}>6</button>
                    <button onClick={()=>dispatch({type:"sub"})}>-</button>
                </div>
                <div>
                    <button onClick={()=>dispatch({payload:7})}>7</button>
                    <button onClick={()=>dispatch({payload:8})}>8</button>
                    <button onClick={()=>dispatch({payload:9})}>9</button>
                    <button onClick={()=>dispatch({type:"mul"})}>*</button>
                </div>
                    <button onClick={()=>dispatch({payload:0})}>0</button>
                    <button onClick={()=>dispatch({type:"equal"})}>=</button>
                    <button onClick={()=>dispatch({type:"divide"})}>/</button>
                    <button onClick={()=>dispatch({type:"del"})}>del</button>
            </div>
        </>
    )
}
export default Calculator

