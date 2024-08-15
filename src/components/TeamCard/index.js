import {Link} from 'react-router-dom'

import './index.css'
const Teamcard = props => {
  const {each} = props
  const {id, name, imageUrl} = each
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="TeamCardbg1">
        <img className="teamcardimg" alt={name} src={imageUrl} />
        <p className="teamcardheading">{name}</p>
      </li>
    </Link>
  )
}
export default Teamcard
