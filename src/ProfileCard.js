import React from 'react'

function ProfileCard({title,handle ,image}) {
  return (
    <div>
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-1by1'>
                <img src={image}/>
                </figure>
            </div>
        </div>
        <div className='card-content'>
            <div className='media-content'>
            <div>Title is : {title}</div>
        <div>Handle is : {handle}</div>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileCard