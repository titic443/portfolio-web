import { useState } from "react"
import FormatDate from "../FormatDate"
import Picture from "../Picture"
import TitleLink from "../TitleLink"
import Meterials from "../Meterials"
import Description from "../Descriptions"
import Skill from "../Skills"


const ContentContainer = ({
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({})
    const SECTION_ID = `${sectionTitle}-section`
    return (
        <div id={SECTION_ID} className="scroll-m-14">
        <div className="text-primarySubContent font-medium">{sectionTitle}</div>
        {
            data.map(({
                date = "", 
                title = "", 
                link = "", 
                meterial = [], 
                descrition = [], 
                skill = [], 
                picture= ""}, 
                index) => {
                    // console.log(isMouseEnter)
                    return (
                        <div 
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
                        className={`pl-3 grid grid-cols-[25%_75%] py-10 rounded-xl duration-0.5 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primarySubBg" : ""}`}
                        onMouseEnter={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: true})}
                        onMouseLeave={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: false})}
            
                    >
                        <div>
                            <FormatDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} children={date}></FormatDate>
                            <Picture isHighLigth={isMouseEnter[`${SECTION_ID}-${index}`]} pic={picture}/>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}></TitleLink>
                            {

                                meterial.length > 0 ? 
                                <div className="flex gap-4 text-xl items-center">
                                    {
                                    meterial.map((value, index) => {
                                        return (
                                        <Meterials key={`${index} - meterial - ${value.icon}`} icon={value.icon}></Meterials>
                                    )})
                                    }
                                </div>
                                : null
                            }
                            {/* <Description describe={[descrition]}></Description> */}
                            {
                                descrition.map((value, index) => {
                                    return (
                                        <Description key={`${index} - description - ${value}`} describe={value}></Description>
                                    )
                                })
                            }
                            {
                                skill.map((value, index) => {
                                    return (
                                        <Skill key={`${index} - skill - ${value}`} data={value}></Skill>
                                    )
                                })
                            }
                            {/* <Skill data={["JavaScript","Typescript"]}></Skill> */}
                        </div>
                    </div>
                    )
            })
        }
        </div>
    )
}

export default ContentContainer