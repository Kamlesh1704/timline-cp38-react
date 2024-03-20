import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {detail} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = detail
  return (
    <div>
      <img src={imageUrl} alt="project" className="image" />
      <div className="courseduration">
        <h1>{projectTitle}</h1>
        <p>
          <AiFillCalendar /> {duration}
        </p>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
