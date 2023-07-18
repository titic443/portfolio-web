const Skill = ({data}) => {

    return (
    <div className="flex gap-x-4 text-sm">
        {
            data.map((value, index) => {
                return (<div key={`${index} ${value}`} className="transition-all hover:scale-110 hover:text-slate50 hover:tra px-2 bg-primarySubContent text-primaryBase rounded-md">{value}</div>)
            })
        }
    </div>
    )

}

export default Skill