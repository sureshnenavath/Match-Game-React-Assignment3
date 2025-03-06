import React from 'react'

const Thumbnails = ({activeTab, imagesList, onThumbnailClick}) => {
  const filteredImages = imagesList.filter(
    image => image.category === activeTab,
  )

  return (
    <div className="thumbnails-container">
      {filteredImages.map(image => (
        <img
          key={image.id}
          src={image.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={() => onThumbnailClick(image.imageUrl)}
        />
      ))}
    </div>
  )
}

export default Thumbnails
