import e from "express"

const Skill = ({data}) => {

    return (
    <div className="flex gap-x-4 text-sm ">
        {
            data.for((value, index) => {
                <div>{value}</div>
            })
        }
    </div>
    )

}

export default Skill