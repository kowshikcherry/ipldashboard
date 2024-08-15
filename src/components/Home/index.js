import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Teamcard from '../TeamCard'

import './index.css'
class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsData} = this.state
    // console.log(blogsData)
    return (
      <div className="homebg1">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <ul>
              <li>
                <img
                  alt="ipl logo"
                  className="homeimglogo"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                />
              </li>
              <li>
                <h1>IPL Dashboard</h1>
              </li>
            </ul>
            <ul className="homeunorderlist">
              {blogsData.map(each => {
                return <Teamcard key={each.id} each={each} />
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
