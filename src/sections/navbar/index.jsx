import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {

    return (
        <div alt='Nav bar' className='grid grid-rows-[10%_10%_10%_10%] gap-3 font-semibold'>
        <div><span className=' inline-block mr-2 text-sm'><FontAwesomeIcon icon={faArrowRight} /></span>About</div>
          <div>Experience</div>
          <div>Project</div>
          <div>Article</div>
        </div>
    )
}

export default Navbar