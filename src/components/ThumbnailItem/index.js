// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listDetails, changeImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = listDetails

  const changeImage = () => {
    changeImg(id)
  }

  const classItem = isActive ? 'image2' : 'image'
  return (
    <li className="list-item">
      <button className="buttons" type="button" onClick={changeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={classItem} />
      </button>
    </li>
  )
}

export default ThumbnailItem
