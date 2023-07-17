import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Meterials = ({ icon, link}) => {
    return (
    <div>
        <a href={link} target="_blank">
            <span className='text-xl hover:scale-125 hover:text-primaryTile transition-all'><FontAwesomeIcon icon={icon}/></span>
        </a>
    </div>
    )
}

export default Meterials