import React from 'react'

function Testing() {

    const register = () => { 
        alert('test')
        // Axios
        console.log("Test");
        console.warn("Warning euy");
        console.error("Error cuy");
     }

  return (
    <button onClick={register} >Register</button>
  )
}

export default Testing