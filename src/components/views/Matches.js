// import React, {useState, useEffect} from 'react'
import * as React from 'react'
//import axios from 'axios'
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

        const data = await getData()
        const matchesBank = []
        if (data?.error !== undefined) return setError(data.error)
        const { response: emipiira } = data
        
        emipiira.map(omupiira => {
            const { title, thumbnail,videos:[{title: highlights, embed:video}] } = omupiira
            return matchesBank.push({title, highlights, video,thumbnail})
        })
        
        //console.log(matchesBank)
        
        setMatch(matchesBank)
        // console.log(match)
    }

    // matches.map( match => {
    //     const { title, videos:[{title: highlights, embed:video}] } = match
    //     // const { videos } = match
    //     console.log(title)
    //     console.log(highlights)
    //     console.log(video)
    //     // console.log(videos)      
    //     setMatch({title, highlights, video})  

    // }) 

    

    return (
        <>
         <h1 className="title">Match Highlights</h1>
            {error}
        <div className="item-list">
        
  
            {matches?.length <= 0 && <div>Loading...</div>}
            {matches?.length > 0 &&
               
                <>
              
                    {matches.map( match => 
                    
                        <div >

                            {/* <img src={match.thumbnail} alt='pic' /> <br/> */}
                           
                            {/* {match.highlights} <br/>  */}
                            {<div dangerouslySetInnerHTML={{ __html: match.video }} />}
                            {match.title} <br/>
                            {match.competition}<br/>
                           
                        </div>
                        
               
                   
                    )}

                </>
            }
        

         </div>
        </>
    )
}

export default Matches
