import Header from "../header"
import Link from "../link"
import Navbar from "../navbar"


const LeftSection = () => {
    return (
        <div className="px-4">
        <div className='sticky top-14 grid gap-y-4 lg:grid-rows-[35%_45%_20%] lg:h-[85vh]'>
          <Header/>
          <Navbar/>
          <Link/>
        </div>
      </div>  
    )
}

export default LeftSection