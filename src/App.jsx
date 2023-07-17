
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import fileResume from './images/personal.cv.svg'

function App() {


  return (
    <div className='mt-14 mx-auto  max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[85vh]'>
          <div className='flex flex-col gap-4'>
              <div className='text-primaryTile text-2xl md:text-3xl font-semibold pb-3'>Titi Changpoo</div>
              <div className='text-primarySubContent pb-3 font-semibold'>Backend Developer</div>
              <div className='text-sm w-5/6'>Develop and Maintain Software Application </div>
              <div className='mt-2'>
              <a href={fileResume} target='_blank'>
                <span className='rounded-md bg-primarySubContent text-gray300 py-2 px-4 '>
                  View Resume
                  <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
                </span>
              </a>
              </div>
          </div>
          <div>Nav</div>
          <div className='flex items-end pb-14'>Link</div>
        </div>
      </div>      
      <div>
        <div>About</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>        
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>   
      </div>          
    </div>
  )
}
export default App
