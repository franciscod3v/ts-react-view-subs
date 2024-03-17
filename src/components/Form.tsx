import { useState } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub:Sub) => void
}

export const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, setInputValues] = useState<FormState['inputValues']>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        onNewSub(inputValues)
        event.preventDefault()  
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='nick' placeholder='nick' value={inputValues.nick} />
                <input onChange={handleChange} type="text" name='subMonths' placeholder='subMonths' value={inputValues.subMonths} />
                <input onChange={handleChange} type="text" name='avatar' placeholder='avatar' value={inputValues.avatar} />
                <textarea onChange={handleChange} name='description' placeholder='description' value={inputValues.description} />
                <button>Save a new sub</button>
            </form>
        </div>
    )
}
