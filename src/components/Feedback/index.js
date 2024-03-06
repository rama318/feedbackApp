import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackStatement = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <div className="sub-feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul>
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji-image"
                  />
                  <br />
                  <span className="emoji-name">{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouSection = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading-love">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer.support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="sub-container">
          {isFeedbackSelected
            ? this.renderThankYouSection()
            : this.renderFeedbackStatement()}
        </div>
      </div>
    )
  }
}

export default Feedback
