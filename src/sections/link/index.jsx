import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Link = () => {
    return (
        <div alt="Link" className='flex items-end gap-4 text-2xl'>
        <a href="https://github.com/titic443?tab=repositories" target="_blank"><span className='hover:scale-125 hover:text-primaryTile transition-all'><FontAwesomeIcon icon={faGithub} /></span></a>
        <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"><span className='hover:scale-125 hover:text-primaryTile transition-all'><FontAwesomeIcon icon={faLinkedin} /></span></a>
      </div>
    )
}

export default Link