export const FormatDate = ({isHighLight, children}) => {
    return (
    <div>
        <span className={`${isHighLight ? "text-primaryTile" : " "}`}>
            {children}
        </span>
    </div>
    )
}

export default FormatDate