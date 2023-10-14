import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import { useEffect } from 'react'

export default function About() {
    const [todos, setTodos] = useState([])
    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos?max=5')
            .then(response => response.json())

        console.log(data);
        setTodos(data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (<Layout>

        <div>About</div>
        {
            todos.length ? (
                <ul>
                    {todos.map((t) => <li key={`todo-${t.id}`}>
                        {t.title}

                    </li>)
                    }
                </ul>

            ) : <p>Loading...</p>
        }
    </Layout>

    )
}
