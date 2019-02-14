import React from 'react'

export default function Image(props){
    return(
        <div>
           <img src={props.image} alt='a funny meme'/>
        </div>
    )
}