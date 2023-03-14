import {Link} from 'react-router-dom'
import './index.css'

const CourseCard = props => {
  const {courseData} = props
  const {id, name, logoUrl} = courseData

  return (
    <li className="list-item-details">
      <Link to={`/courses/${id}`} className="link-item">
        <img src={logoUrl} alt={name} className="course-image" />
        <p className="course-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseCard
