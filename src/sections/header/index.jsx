import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fileResume from '../../images/personal.cv.svg'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { data } from '../../contents/header'

const Header = () => {

    return (
    <div className='flex flex-col gap-4'>
        <div className='text-primaryTile text-2xl md:text-3xl font-semibold pb-3'>{data.name}</div>
        <div className='text-primarySubContent pb-3 font-semibold'>{data.title}</div>
        <div className='text-sm w-5/6'>{data.caption} </div>
        <div className='mt-2'>
        <a href={data.link} target='_blank'>
          <span className='rounded-md bg-primarySubContent text-gray300 py-2 px-4 '>
            {data.btnText}
            <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
          </span>
        </a>
      </div>
    </div>
    )
}

export default Header