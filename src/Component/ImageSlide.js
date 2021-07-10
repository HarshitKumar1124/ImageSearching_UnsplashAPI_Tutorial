import React from 'react';
import "../App.css";
//import Image from '../Test Image/download (1).jpg';

const ImageSlide = (props) => {
    return (
        <div className="row col-md-3 p-0 m-0 my-2 ImageContainer ">
            <img className="Image_card p-0" src={props.url} alt={props.key} />
        </div>
    )
}

export default ImageSlide;
