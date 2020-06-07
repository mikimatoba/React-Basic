// Any JS in here is automatically ran for us

// Import the React library
import React from 'react'
import ImageDetail from './image_detail'

const ImageList = (props) => {
  const validImages = props.images.filter(img => !img.is_album)

  const RenderedImages = validImages.map(image =>
     <ImageDetail key={image.title} image={image} />
  )

  return (
    <ul className='media-list list-group'>
      { RenderedImages }
    </ul>
  )
}

export default ImageList
