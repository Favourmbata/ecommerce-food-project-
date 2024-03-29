import style from "./index.module.css"
import ellipse1 from "../../asserts/footer/icon/Ellipse 6.png"
import ellipse2 from "../../asserts/footer/icon/Ellipse 7.png"
import ellipse3 from "../../asserts/footer/icon/Ellipse 8.png"
import image1 from "../../asserts/footer/icon/Rectangle 208 (2).png"
import image2 from "../../asserts/footer/icon/Rectangle 210.png"
import image3 from "../../asserts/footer/Rectangle 209.png"
const Testimony = ()=>{
    return(
        <div className={style.mainCont}>
            <h2 className={style.testify}>Testimonial</h2>

            <div className={style.secondCont}>
                <div className={style.items}>
                    <div className={style.experience}>
                        <p>I ALREADY HAVE TO WORRY ABOUT BALANCING MY WORK <br/>
                            LIFE WITH MY MOM LIFE. EVER SINCE I STARTED USING THE<br/>
                            APP I EXPERIENCE EASE AND COMFORT CHANNELING MY<br/>
                          TIME TO FOCUS ON MORE IMPORTANT MATTERS
                </p>
            </div>
                    <p>Judith mbaniwe</p>
                    <p style={{color: " #E85E0A"}}>Business woman and Mom</p>
                </div>


                <div className={style.slidingImage}>

                    <div className={style.slidingImage1Cont}>
                    <img src={image2} alt={""} className={style.slidingImage2}/>
                    </div>

                    <div className={style.slidingImage2Cont}>
                    <img src={image3} alt={""} className={style.slidingImage3}/>
                    </div>

                    <div className={style.slidingImage3Cont}>
                    <img src={image1} alt={""} className={style.slidingImage1}/>
                    </div>
                </div>
            </div>

            <div className={style.circles}>
                <img src={ellipse1} alt={""} className={style.circle1}/>
                <img src={ellipse2} alt={""} className={style.circle1}/>
                <img src={ellipse3} alt={""} className={style.circle1}/>

            </div>
        </div>
    )
}
export default Testimony;