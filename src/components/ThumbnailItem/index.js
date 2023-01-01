// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, clickThumbnail, isClicked} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl} = eachThumbnail

  const onClickThumbnail = () => {
    clickThumbnail(imageUrl)
  }

  const isClickedTrue = isClicked ? 'activeThumbnail' : ''

  return (
    <li>
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          className={`thumbnail ${isClickedTrue}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
