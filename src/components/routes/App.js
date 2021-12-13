import * as React from 'react'
import Matches from '../views/Matches'

import {
    BrowserRouter as Router,
    Routes, Route, Link, 
} from 'react-router-dom'

function App() {
    //const [page, setPage] = React.useState(null)

    return (
        <Router path="/matches">
            <Matches/>
        </Router>
    )
}

export default App
