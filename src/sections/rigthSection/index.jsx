import ContentContainer from "../../components/ContentContainer"
import { data as experienceData} from "../../contents/experience.js"
import { data as projectData} from "../../contents/experience.js"
import { data as articleData} from "../../contents/experience.js"
import Footer from "../Footer"
import About from "../about"


const RigthSection = () => {
    return (
    <div className="grid gap-y-40 px-4">
        <About />
        <ContentContainer title="Experience" data={experienceData}></ContentContainer>
        <ContentContainer title="Project" data={projectData}></ContentContainer>
        <ContentContainer title="Article" data={articleData}></ContentContainer>
        <Footer></Footer>
    </div>  

    )
}

export default RigthSection
