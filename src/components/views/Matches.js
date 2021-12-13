// import React, {useState, useEffect} from 'react'
import * as React from 'react'
//import axios from 'axios'
//import '../style/matches.css'
import {Link} from 'react-router-dom'
import getData from '../helpers/fetchData'

function Matches() { //Opening a component

    const [error, setError] = React.useState('')
    const [matches, setMatch] = React.useState([])

    // React.useEffect(() => { //Is invoked at component rendering
    //     getmatches()
    // }, [])

    React.useEffect(() => { //Is invoked at component rendering
        handleMatches()
    }, [])

    const handleMatches = async () => {
        setMatch([])
        setError('')

        const matches = await getData()
        //console.log(matches)
        if (matches?.error !== undefined) return setError(matches.error)

        setMatch(matches)
    }
    return (
        <>
         <div className="container mx-auto">
            <Link to="/">Home</Link>

            <h1>Matches</h1>
            {error}
           

            {matches?.length <= 0 && <div>Loading...</div>}
            {matches?.length > 0 &&
                // <ul>
                //     {matches.map(post => <li key={post.id}><h1>{post.title}</h1> <p>{post.body}</p></li>)}
                // </ul>
                <ul>
                     {matches.map( match =>
                     <li key={match.title}><p>{match.title}</p>
                    </li>
                        )}
                </ul>
            }
          </div>
        </>
    )
}

export default Matches
