import { Sub } from "../types"
import { useNewSubForm } from "../hooks/useNewSubForm"



interface FormProps {
    onNewSub: (newSub:Sub) => void
}

export const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        dispatch({
            type: "change-value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='nick' placeholder='nick' value={inputValues.nick} />
                <input onChange={handleChange} type="text" name='subMonths' placeholder='subMonths' value={inputValues.subMonths} />
                <input onChange={handleChange} type="text" name='avatar' placeholder='avatar' value={inputValues.avatar} />
                <textarea onChange={handleChange} name='description' placeholder='description' value={inputValues.description} />
                <button onClick={handleClear}>Clear the form</button>
                <button type="submit">Save a new sub</button>
            </form>
        </div>
    )
}
