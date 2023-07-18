import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const navs = [
  {title: "About", sectionId: "About-section"},
  {title: "Experience", sectionId: "Experience-section"},
  {title: "Project", sectionId: "Project-section"},
  {title: "Article", sectionId: "Article-section"},
]
const Navbar = () => {

    const [isMouseEnter, setIsMouseEnter] = useState({})
    const handleClick = (sectionId) => {
      document.getElementById(`${sectionId}`).scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div alt='Nav bar' className='grid grid-rows-[10%_10%_10%_10%] gap-3 font-semibold'>
          {
            navs.map((value, index) => { 

              return(
                <div 
                  id={`${value}-section-${index}`} 
                  onMouseEnter={()=> setIsMouseEnter({[`${value}-section-${index}`]: true})}
                  onMouseLeave={()=> setIsMouseEnter({[`${value}-section-${index}`]: false})}
                  onClick={()=>handleClick(value.sectionId)}
                  className={`cursor-pointer ${isMouseEnter[`${value}-section-${index}`] ? "bg-primarySubBg" : ""}`}
                >
                  <span className=' inline-block mr-2 text-sm'>
                    <FontAwesomeIcon icon={faArrowRight} className={`new-arrow ${isMouseEnter[`${value}-section-${index}`] ? "" : "hidden"}`}/>
                  </span>
                  <div className={`inline-block ${isMouseEnter[`${value}-section-${index}`] ? "translate-x-4 transition-all" : ""}`}>
                    {value.title}
                  </div>
                </div>
              )             
            })
          }
        </div>
    )
}

export default Navbar