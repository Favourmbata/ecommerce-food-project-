import style from "./index.module.css"
import rectangle1 from "../../asserts/footer/icon/Rectangle 48.png"
import rectangle2 from "../../asserts/footer/icon/Mask group (1).png"
import rectangle3 from "../../asserts/footer/icon/Rectangle 198.png"
import rectangle4 from "../../asserts/footer/icon/Rectangle 53.png"
import rectangle5 from "../../asserts/footer/icon/Rectangle 52.png"
import rectangle6 from "../../asserts/footer/icon/Rectangle 45.png"
import rectangle7 from "../../asserts/footer/icon/Rectangle 198.png"
import rectangle8 from "../../asserts/footer/icon/Rectangle 49.png"

const Hero = ()=>{
    return(
        <div className={style.mainCont}>

            <div className={style.writeup}>
                <p className={style.relax}>
                    <h2>
                        <span style={{color: "#00af52"}}>Relax! Get </span>
                        <span style={{color: "#00af52"}}> Groceries </span>
                        <span style={{color: "#00af52"}}> With  Ease</span>
                    </h2>

                </p>
                   <p className={style.shop}>Are you worried about the hassles of grocery shopping? Worry no more! Go Chow has
                    <span></span> got you. Be
                    like
                    Tutu Save time, Save energy</p>


                  <button className={style.shopNow}>Shop Now</button>
            </div>


            <div className={style.groupedPic}>
                <div className={style.group1}>
                    <img src={rectangle1} alt={""} className={style.image1}/>
                    <img src={rectangle2} alt={""} className={style.image2}/>
                    <img src={rectangle3} alt={""} className={style.image3}/>
                    <img src={rectangle4} alt={""} className={style.image4}/>
                </div>

                <div className={style.group2}>
                    <img src={rectangle5} alt={""} className={style.image5}/>
                    <img src={rectangle6} alt={""} className={style.image6}/>
                    <img src={rectangle7} alt={""} className={style.image7}/>
                    <img src={rectangle8} alt={""} className={style.image8}/>
                </div>

            </div>

        </div>
    )
}

export default Hero;