import ContentContainer from "../../components/ContentContainer"
import { data as experienceData} from "../../contents/experience"
import { data as projectData} from "../../contents/project"
import { data as articleData} from "../../contents/article"
import Footer from "../Footer"
import About from "../about"
import Certificate from "../../components/Certificate"


const RigthSection = () => {
    return (
    <div className="grid gap-y-40 px-4">
        <About />
        <ContentContainer title="Experience" data={experienceData}></ContentContainer>
        <ContentContainer title="Project" data={projectData}></ContentContainer>
        <Certificate title="Certificate" data={articleData}></Certificate>
        <Footer></Footer>
    </div>  

    )
}

export default RigthSection
