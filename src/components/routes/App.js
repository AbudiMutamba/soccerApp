import * as React from 'react'
import Matches from '../views/Matches'
import Contact from '../views/Contact'
import {Link} from 'react-router-dom'

import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

function App() {
    const date = new Date()
    return (
        
         <Router >
             <header className="headerSection">
                <h1>
                    <Link to="/">SoccerApp</Link>
                </h1>
                <nav>
                    <ul>
                            <>
                                <li>
                                    <Link to="/">Matches</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </>
                       
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Matches/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <footer>
                <p>&copy; Copyright {date.getFullYear() } </p>
            </footer>
         </Router>


    )
}
export default App
