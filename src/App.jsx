
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fileResume from './images/personal.cv.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from './sections/header/index'
import Navbar from './sections/navbar'
import Link from './sections/link'
import LeftSection from './sections/leftSection'
import RigthSection from './sections/rigthSection'
function App() {


  return (
    <div className='mt-14 mx-auto  max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%] '>
      <LeftSection/>
      <RigthSection/>        
    </div>
  )
}
export default App
