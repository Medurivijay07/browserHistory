import './index.css'

const HistoryItem = props => {
  const {item, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item
  const onClickingDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="each-item">
      <div className="details">
        <p>{timeAccessed}</p>
        <div className="logo-details">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        className="button"
        onClick={onClickingDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
