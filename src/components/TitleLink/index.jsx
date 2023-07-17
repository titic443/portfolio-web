import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TitleLink = ({isHighLight,title,link}) => {

    if(!link) {
        return <div className={`${isHighLight ? "text-primaryTile" : " "}`}>{title}</div>
    } else{
        return (
            <div className={`${isHighLight ? "text-primaryTile" : " "}`}>
                <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`ml-1 text-xs -rotate-45 transition-all ease-in-out ${isHighLight ? "translate-x-1 -translate-y-1" : "" }`} icon={faArrowRight}/>
                </a>
            </div>
            )        
    }
}

export default TitleLink