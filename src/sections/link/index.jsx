import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getDefaultLibFileName } from "typeScript"

const Link = () => {
    return (
        <div alt="Link" className='flex items-end gap-4 text-2xl'>
        <span className='hover:scale-125 hover:text-primaryTile transition-all'><FontAwesomeIcon icon={faGithub} /></span>
        <span className='hover:scale-125 hover:text-primaryTile transition-all'><FontAwesomeIcon icon={faLinkedin} /></span>
      </div>
    )
}

export default Link