import React from 'react'
import './ImageList.css'

const ImageList = (props) => {

    const images1  = props.images.map( ({discription, id, urls}) => {
        return <img key={id} src={urls.regular} alt={discription} />
    })

    return <div className='image-list'>{images1}</div>
}


export default ImageList