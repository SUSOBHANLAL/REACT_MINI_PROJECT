import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import "./styles.css";

// export default function App() {
//   // Code here
// }
 import React from 'react'
 
 const App = () => {
   return (
     <div className="App">
     
      <Hero/>
      <Skills/>
      <About/>

     </div>
   )
 }
 
 export default App