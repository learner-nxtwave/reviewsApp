// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  decreaseCount = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="homePage">
        <div className="cardContainer">
          <h1 className="title">Reviews</h1>
          <div className="displayContainer">
            <button
              testid="leftArrow"
              type="button"
              className="leftArrowBtn"
              onClick={this.decreaseCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt=" left arrow"
              />
            </button>
            <div className="profileContainer">
              <img src={imgUrl} alt={username} />
              <p className="username">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              testid="rightArrow"
              type="button"
              className="leftArrowBtn"
              onClick={this.increaseCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt=" right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
