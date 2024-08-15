import './index.css'
const Matchcard = props => {
  const {each, anotherurl, anotheralter} = props
  const {
    competing_team,
    competing_team_logo,
    date,
    id,
    first_innings,
    man_of_the_match,
    match_status,
    result,
    second_innings,
    umpires,
    venue,
  } = each
  return (
    <li className="teamcardbg1">
      <img alt={`competing team ${competing_team}`} src={anotherurl} />
      <p>{competing_team}</p>
      <p>{result}</p>
      <p>{match_status}</p>
    </li>
  )
}
export default Matchcard
