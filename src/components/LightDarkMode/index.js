import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: true}

  onChangeModeButton = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }

  render() {
    const {changeMode} = this.state
    const isMode = changeMode ? 'dark-mode' : 'light-mode'
    const isButton = changeMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${isMode}`}>
          <h1 className="heading">Click To Change Mode </h1>
          <button
            className="light-mode-button"
            type="button"
            onClick={this.onChangeModeButton}
          >
            {isButton}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
