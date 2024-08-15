import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import Matchcard from '../MatchCard'
class Teammatches extends Component {
  state = {teamdetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    //console.log(data)
    this.setState({teamdetails: {...data}, isLoading: false})
  }
  renderBlogItemDetails = () => {
    const {teamdetails} = this.state
    // console.log(teamdetails)
    return (
      <div className="teammatchbg2">
        <img alt="team banner" src={teamdetails.team_banner_url} />
        <LatestMatch
          url={teamdetails.latest_match_details.competing_team_logo}
          alter={teamdetails.latest_match_details.competing_team}
          teamdetails={teamdetails.latest_match_details}
        />
        <ul className="teammatchesbg1">
          {teamdetails.recent_matches.map(each => {
            // console.log(each.competing_team, each.competing_team_logo)
            return (
              <Matchcard
                anotheralter={each.competing_team}
                anotherurl={each.competing_team_logo}
                key={each.id}
                each={each}
              />
            )
          })}
        </ul>
      </div>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default Teammatches
/*

<img src={teamdetails.team_banner_url} />
        <LatestMatch  />
 */
