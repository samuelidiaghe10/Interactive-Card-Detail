import { Aside } from "./bookmark-landing-page-master/components/Aside"
import { Footer } from "./bookmark-landing-page-master/components/Footer"
import { Header } from "./bookmark-landing-page-master/components/Header"
import { Main } from "./bookmark-landing-page-master/components/Main"
import { Navbar } from "./bookmark-landing-page-master/components/Navbar"
import { Section } from "./bookmark-landing-page-master/components/Section"
import { useState } from "react"

function App() {
  const [toggle, setToggle] = useState(true)

    const handleMenu = () => {
      if(toggle){
        document.body.style.overflowY = "hidden"
      }

      else{
        document.body.style.overflowY = ""
      }

      setToggle(!toggle)
    }

  return (
    <div className=" flex gap-20 lg:gap-56 flex-col">
      <div className="flex  lg:gap-32 flex-col">
        <Navbar toggle={toggle} handleMenu={handleMenu}/>
        <Header toggle={toggle}/>
      </div>
      <div className=" flex gap-20 lg:gap-56 flex-col">
        <Main/>
        <Aside/>
      </div>

      <div className="flex flex-col">
        <Section/>
        <Footer/>
      </div>
    </div>
  )
}

export default App