import { useState ,useReducer} from "react";

const initialState={
  value:'',
  touched:false
}
const InputReducer=(state,action)=>{
  if (action.type==="INPUT"){
    return {value:action.value,touched:state.touched}
  }
  if (action.type==="BLUR"){
    return {value:state.value,touched:true}
  }
  if (action.type==="RESET"){
    return {value:'',touched:false}
  }
}
const useInput=(validateInput)=>{
    // const [enteredName, setEnteredName] = useState("");
    // const [touched, setTouched] = useState(false);
    const [InputState,dispatch]=useReducer(InputReducer,initialState);
    const inputValid=validateInput(InputState.value);
    const InputInvalid = !inputValid && InputState.touched;
    const onBlurHandler=()=>{
        // setTouched(true)
        dispatch({type:"BLUR"})
      }
    const InputHandler = (e) => {
        // setEnteredName(e.target.value);
        dispatch({type:"INPUT",value:e.target.value})
      };
      const reset=()=>{
        // setEnteredName("");
        // setTouched(false);
        dispatch({type:'RESET'})
      }
      return{
        InputHandler,
        onBlurHandler,
        inputValid,
        InputInvalid,
        enteredName:InputState.value,
        reset

      }
}
export default useInput;