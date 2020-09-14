import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:&nbsp;
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        <ColorContext.Provider value="teal">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App