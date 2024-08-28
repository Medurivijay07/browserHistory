import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'
import EmptyHistoryView from '../EmptyHistoryView'

class History extends Component {
  state = {
    historyList: this.props.initialHistoryList,
    searchInput: '',
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyList: filteredHistoryList})
  }

  render() {
    const {historyList, searchInput} = this.state
    const filteredHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="searchInput-container">
              <input
                type="search"
                className="input"
                placeholder="Search history"
                onChange={this.onChangingSearchInput}
              />
            </div>
          </div>
        </div>
        {filteredHistoryList.length > 0 ? (
          <ul className="list-container">
            {filteredHistoryList.map(eachItem => (
              <HistoryItem
                item={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        ) : (
          <EmptyHistoryView />
        )}
      </div>
    )
  }
}

export default History
