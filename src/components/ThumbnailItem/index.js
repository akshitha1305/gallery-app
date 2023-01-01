// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem} = props
  const {ThumbnailUrl, ThumbnailAltText} = eachItem
  return (
    <div className="thumbnail-container">
      <img className="thumbnail" src={ThumbnailUrl} alt={ThumbnailAltText} />
    </div>
  )
}

export default ThumbnailItem
