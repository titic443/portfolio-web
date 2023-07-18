import {data} from '../../contents/about.js'
 
const About = () => {

    return (
        <div id='About-section' className='space-y-4  scroll-m-14'>
            <div className='text-primarySubContent font-medium'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About