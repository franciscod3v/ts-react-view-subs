import { useReducer } from "react"
import { Sub } from "../types"


interface FormState {
    inputValues: Sub
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

type FormReducerAction  = {
    type: "change-value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type) {
        case "change-value":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        
        case "clear":
            return INITIAL_STATE
    }
}

export const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE)
}
