import React, { useState } from 'react'

const Home = () => {
    const[isSideMenu, setIsSideMenu] = useState(false)
  return <>
  
  <div className={`w-2 ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary`}>

    {/* anchor*/}
    <div className="w-8 h-8 bg-white rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"></div>

  </div>
  <div></div>
  </>
}

export default Home