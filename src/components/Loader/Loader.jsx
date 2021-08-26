import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React from 'react'

export default function Loader() {
  return (  
    <>  
    <Loader
        type="MutatingDots"
        color="#00BFFF"
        secondaryColor="#8a008a"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <div>Loading...</div>
      </>
  )
}
