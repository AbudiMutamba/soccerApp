import * as React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    // let form = React.useRef('')
/*     const handleSubmit = (e) => {
        e.preventDefault()
        console.log( form.current[0])
    } */
    
    return (
        <>     
        <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">JSONP React</span>
        </div>
        
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/posts" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Posts
            </Link>
            <Link to="/todos" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Todos
            </Link>
          </div>
          
        </div>
       </nav>
        
            <div className="container mx-auto" style={{'display':'flex',  'background-color':"#090"}}>
            <Link to="/posts">detail</Link>
            <Link to="/todos">Todos</Link>
            <h1 style={{'color':'red'}}>Use the name above</h1>
            
    {/*         <form ref={form} action="#" onSubmit={handleSubmit}>
                <input type="text" id="username" />
                <input type="password" id="password" />
                <button>Check it</button>
            </form> */}
            </div>
      </>
    )
}

export default Home
