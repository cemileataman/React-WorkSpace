import React from 'react'

function Course({course}) {
    const {id,title,description,price,link,image} = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={220} height= {150}/>
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-desc'>{description}</h5>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a style={{textDecoration:'none'}} href={link}  >Satın Al</a></div>
        </div>
    </div>
  )
}

export default Course