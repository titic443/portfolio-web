import { faCss3, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div id="footer" className="mb-20 pt-4">
            <div className="flex justify-end">
                <span>
                    Powered by React.js and Tailwind
                    <FontAwesomeIcon  className="px-2" icon={faReact}/>
                    <FontAwesomeIcon className="px-2" icon={faCss3} />
                </span>
            </div>
        </div>
    )
}

export default Footer