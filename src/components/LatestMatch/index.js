import './index.css'
const LatestMatch = props => {
  const {teamdetails, url, alter} = props
  const {
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    man_of_the_match,
    result,
    second_innings,
    umpires,
    venue,
  } = teamdetails
  // console.log(competing_team_logo, competing_team)
  return (
    <div className="latestbg1">
      <div>
        <p>{umpires}</p>
        <p>{competing_team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img alt={`latest match ${competing_team}`} src={url} />
      <div>
        <p>{first_innings}</p>
        <p>{second_innings}</p>
        <p>{man_of_the_match}</p>
      </div>
    </div>
  )
}
export default LatestMatch
