import React, {useState} from 'react'

export default function ToDoList (props) {

    const [todoDict, setDict] = useState({})
    const [userInput, setInput] = useState('')

    const handleUserInput = event => {
        setInput(event.target.value)
        
    }

    const handleSubmit = (event) => {
        console.log(userInput)
        console.log(`Previous Dictionary: ${todoDict}`)
        setDict(prevState => {
            return {...prevState, [userInput]: "false"}
        })
        event.preventDefault()
    }

    const filter = (item) => {
        console.log(item)
        let new_dict = delete todoDict[item]
        
        console.log(todoDict)
        setDict( prevDict => {
            return {...prevDict}
        })
    }

    

    const SampleTopics = Object.entries(todoDict).map( ([item, itemStatus]) =>
        <div>
            <h1>{item}</h1>
            <button onClick={() => filter(item)}>Complete</button>
        </div>
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input value={userInput} type="text" onChange={handleUserInput}></input>
                </label>
                <button type="submit">Add Item</button>
            </form>
            
            {SampleTopics}
            

        </div>
    )


}