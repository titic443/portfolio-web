import { useState } from "react"
import linux from "../../assets/linux.jpg"

const Certificate = (
    {
        title: sectionTitle = "",
        data = []
    }
) => {
    
    const [isMouseEnter, setIsMouseEnter] = useState({})
    const SECTION_ID = `${sectionTitle}-section`

    return(
        <div id={`${SECTION_ID}-section`}>
            <div className="text-primarySubContent font-medium">{sectionTitle}</div>
            {
                data.map((value,index)=> {
                    return (

                    <div 
                        className="flex flex-col"
                        onMouseEnter={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: true})}
                        onMouseLeave={()=> setIsMouseEnter({[`${SECTION_ID}-${index}`]: false})}
                    >
                        <div className={`flex flex-col items-center gap-7 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primarySubBg" : ""}`}>
                            <div className={`pt-3 -mb-6 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "text-primaryTile" : " "}`}>{value.title}</div>
                            <div className="p-6">
                                <img className={`${isMouseEnter[`${SECTION_ID}-${index}`] ? "border-2 border-slate100" : " "}`} src={value.image} alt="" />
                            </div>
                        </div>
                    </div>
                    )
                })                
            }

        </div>
    )
}

export default Certificate