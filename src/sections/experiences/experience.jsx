import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ais from '../../assets/ais-cloud.jpeg'
import amaris from '../../assets/amaris.jpeg'
import { useState } from "react"

import FormatDate from "../../components/FormatDate"
import Picture from "../../components/Picture"
import TitleLink from "../../components/TitleLink"
import Meterials from "../../components/Meterials"
import Description from "../../components/Descriptions"
import Skill from "../../components/Skills"
export const Experience = () => {

    const [isMouseEnter, setIsMouseEnter] = useState({})

    return (
        <div >
        <div className="text-primarySubContent font-medium">Experience</div>
        <div 
            className={`pl-3 grid grid-cols-[25%_75%] py-10 rounded-xl duration-0.5 ${isMouseEnter['exp1'] ? "bg-primarySubBg" : ""}`}
            onMouseEnter={()=> setIsMouseEnter({'exp1': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp1': false})}

        >
            <div>
                <FormatDate isHighLight={isMouseEnter['exp1']}>2022-2023</FormatDate>
                <Picture isHighLigth={isMouseEnter['exp1']} pic={ais}/>
            </div>
            <div className="flex flex-col gap-y-4">
                <TitleLink isHighLight={isMouseEnter['exp1']} title='Backend Develop' link='https://github.com/titic443?tab=repositories'></TitleLink>
                <Meterials icon={faGithub} link="https://github.com/titic443?tab=repositories"></Meterials>
                <div>Hello</div>
                <div className="flex gap-x-4 text-sm ">
                    <div className="transition-all hover:scale-110 hover:text-slate50 hover:tra px-2 bg-primarySubContent text-primaryBase rounded-md">Javascript</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Typescript</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Kubernetes</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Nestjs</div>
                </div>
            </div>
        </div>
        <div 
            className={`pl-3 grid grid-cols-[25%_75%] py-10 rounded-xl duration-0.5 ${isMouseEnter['exp2'] ? "bg-primarySubBg" : ""}`}
            onMouseEnter={()=> setIsMouseEnter({'exp2': true})}
            onMouseLeave={()=> setIsMouseEnter({'exp2': false})}

        >
            <div>
                <div>
                    <span className={`${isMouseEnter['exp2'] ? "text-primaryTile" : " "}`}>2022 - 2023</span>
                </div>
                <div>
                    <span><img  className={`w-5/6 h-[100%] rounded-md border-2 border-slate50 ${isMouseEnter['exp2'] ? "border-4 duration-0.05" : " "}`} src={amaris} alt="AIS" /></span>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className={`${isMouseEnter['exp2'] ? "text-primaryTile" : " "}`}>
                    Operation Support
                    
                </div>
                <div>
                <a  href="https://github.com/titic443?tab=repositories" className='text-xl hover:text-primaryTile hover:scale-110 transition-all'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                </div>
                <div className="text-sm font-medium">
                    <p>Develop back-end APIs in Node.js using JavaScript (ES6) and Nest.js.</p>
                    <p>Knowledgeable about Docker and containers technology.</p>
                    <p>Ability to work with NoSQL Databases (MongoDB, Redis).</p>
                </div>
                <div className="flex gap-x-4 text-sm ">
                    <div className="transition-all hover:scale-110 hover:text-slate50 hover:tra px-2 bg-primarySubContent text-primaryBase rounded-md">Javascript</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Typescript</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Kubernetes</div>
                    <div className="transition-all hover:scale-110 hover:text-slate50 px-2 bg-primarySubContent text-primaryBase rounded-md">Nestjs</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Experience