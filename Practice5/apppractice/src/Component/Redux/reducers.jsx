const initialState = {value:0,arr:[]}

const reducers=(state=initialState,action)=>{
        switch(action.type){
            case 'add':
                return {value:state.value + action.payload,arr:[state.value]}
                break 
            case 'sub':
                return {value:state.value - action.payload,arr:[state.value]}
                break 
            default:
                return {value:state.value, arr:[state.value]}
                break
        }
}

export default reducers
