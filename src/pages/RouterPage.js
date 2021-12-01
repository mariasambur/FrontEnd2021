import React from 'react'
import Home from './Home'
import About from './About'
import Blog from './Blog'

export default function RouterPage(){
    return(
       <div>
           <Router>
               <switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
               </switch>
           </Router>
       </div>
    )
}