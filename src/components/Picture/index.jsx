export const Picture = ({isHighLigth, pic}) => {
    if(!pic) {
        return null
    } else {
        return (
            <div>
                <span><img  className={`w-5/6 h-[100%] rounded-md border-2 border-slate50 ${isHighLigth ? "border-4 duration-0.05" : " "}`} src={pic} alt="AIS" /></span>
            </div>
            )
    }
}

export default Picture