import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="main">
        <div>
          <h1>MY JOURNEY OF CCBP 4.0</h1>
        </div>
        <div>
          <div style={{width: '1000px', height: '1000px'}}>
            <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
              {timelineItemsList.map(each => {
                if (each.categoryId === 'COURSE') {
                  return <CourseTimelineCard detail={each} key={each.title} />
                }
                return <ProjectTimelineCard detail={each} key={each.title} />
              })}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
