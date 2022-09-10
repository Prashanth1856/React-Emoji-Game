// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScore() {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score-text">Score: {currentScore}</p>
        <p className="score-text">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar-container">
        <div className="title-with-score-container">
          <div className="logo-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScore()}
        </div>
      </nav>
    )
  }
}

export default NavBar
