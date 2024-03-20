import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {detail} = props
  const {courseTitle, description, duration, tagsList} = detail
  return (
    <div>
      <div className="courseduration">
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle /> {duration}
        </p>
      </div>
      <p>{description}</p>
      <div className="ul">
        {tagsList.map(each => (
          <p key={each.name}>{each.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
