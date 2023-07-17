import {data} from '../../contents/about.js'
 
const About = () => {
    return (
        <div className='space-y-4 '>
            <div className='text-primarySubContent font-medium'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About