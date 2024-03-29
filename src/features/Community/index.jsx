import style from "./index.module.css"
import facebook from "../../asserts/logos_facebook (1).png"
import twitter from "../../asserts/logos_twitter (1).png"
import instagram from "../../asserts/cib_instagram.png"
import image1 from "../../asserts/footer/icon/Rectangle 45.png"
import image2 from "../../asserts/footer/Rectangle 48.png"
import image3 from "../../asserts/footer/icon/Rectangle 50@2x.png"
import image4 from "../../asserts/footer/Rectangle 51.png"
import image5 from "../../asserts/footer/icon/Rectangle 49.png"
import image6 from "../../asserts/footer/icon/Rectangle 52.png"
import image7 from "../../asserts/footer/icon/Rectangle 53.png"

 const Community = ()=>{
    return(
        <div className={style.mainCont}>
          <div className={style.secondCont}>
            <div className={style.linkCont}>
                <img src={image1} alt={""} className={style.foodImg}/>
                <p className={style.join}>Join Our <br/> Community</p>

                <div className={style.secondIcons}>
                    <img src={facebook} alt={""} className={style.icon}/>
                    <img src={twitter} alt={""} className={style.icon}/>
                    <img src={instagram} alt={""} className={style.icon}/>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div className={style.foodIcon}>
                <img src={image2} alt={""} className={style.rect1}/>
                <img src={image3} alt={""} className={style.rect}/>
                <img src={image4} alt={""} className={style.rect5}/>
            </div>
          <div className={style.thirdIcons}>
        <img src={image5} alt={""} className={style.rect2}/>
        <img src={image6} alt={""} className={style.rect3}/>
        <img src={image7} alt={""} className={style.rect4}/>
         </div>
          </div>
         </div>

        </div>

    )

 }
export default Community;