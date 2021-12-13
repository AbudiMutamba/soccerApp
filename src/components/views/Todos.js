// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import getData from '../helpers/fetchData'

function Todos() { //Opening a component

    const [error, setError] = React.useState('')
    const [todos, setTodos] = React.useState([])

    React.useEffect(() => { //Is invoked at component rendering
        handleTodos()
    }, [])

    
    const handleTodos = async () => {
        setTodos([])
        setError('')

        const todos = await getData()

        if (todos?.error !== undefined) return setError(todos.error)

        // if (todos.hasOwnPropperty(error) && todos.error !== undefined){

        //     return setError(todos.error)
        // }
        setTodos(todos)

    }    

    const handleClick = () => {
        handleTodos()
    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>

    return (myOutPut) */

    return (
        <> 

            <div className="container mx-auto">
            <Link to="/posts">Posts</Link>
            <Link to="/">Home</Link>
            <h1>Todos</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Todos</button>
            </div>

            {todos?.length <= 0 && <div>Loading...</div>}
            {todos?.length > 0 &&
                <ul>
                    {/* {todos.map(todo => <li key={todo.id}>{todo.title}{todo.completed === true ? "Completed":"Incompleted" }</li>)} */}
                    {todos.map(todo => 
                    <li 
                    key={todo.id}>{todo.completed === true ?  <strike>{todo.title}</strike>:todo.title}
                    </li>)}
                </ul>
            }
            </div>
        </>
    )
}

export default Todos