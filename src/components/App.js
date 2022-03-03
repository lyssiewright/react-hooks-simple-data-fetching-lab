// create your App component here
import React, { useState, useEffect} from "react";



function App() {

    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(response => response.json())
          .then((dogs) => {
              setDogs(dogs)
              setIsLoaded(true)
          })},[])

          if (!isLoaded) return <p>Loading...</p>
          console.log(dogs)
    return (

      <img src={dogs.message} alt="A Random Dog"/>)
    }
    
    export default App;