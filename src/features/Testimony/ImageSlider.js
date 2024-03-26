import React from "react";
import "react-slideshow-image/dist/styles.css"
import {Fade ,Zoom, Slide} from "react-slideshow-image";
// import image1 from "../../asserts/footer/icon/Rectangle 208 (2).png"
// import image2 from "../../asserts/footer/icon/Rectangle 210.png"
// import image3 from "../../asserts/footer/Rectangle 209.png"


const slideImages = [
    {
        url :"../../asserts/footer/icon/Rectangle 210.png",
    },
    {
        url: "../../asserts/footer/icon/Rectangle 208 (2).png",
    },

    {
        url: "../../asserts/footer/Rectangle 209.png"
    }
    ];
const divStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',

}

function ImageSlider (){
    return(
        <div className= 'slide-container'>
            <Fade>
                {slideImages.map((image,index)=>(
                    <div key={index}>
                     <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
                         <span style={{}}>{image.caption}</span>

                     </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
export default ImageSlider;