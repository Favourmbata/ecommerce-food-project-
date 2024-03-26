import style from "./index.module.css"
import ellipse1 from "../../asserts/footer/icon/Ellipse 6.png"
import ellipse2 from "../../asserts/footer/icon/Ellipse 7.png"
import ellipse3 from "../../asserts/footer/icon/Ellipse 8.png"
import image1 from "../../asserts/footer/icon/Rectangle 208 (2).png"
const Testimony = ()=>{
    return(
        <div className={style.mainCont}>
            <h2>Testimonial</h2>

            <div className={style.secondCont}>

                <div>
                      <p className={style.experience}>I ALREADY HAVE TO WORRY ABOUT BALANCING MY WORK <span>
                           LIFE WITH MY MOM LIFE. EVER SINCE I STARTED USING THE</span>
                        <span>APP I EXPERIENCE EASE AND COMFORT CHANNELING MY</span>
                        <span>TIME TO FOCUS ON MORE IMPORTANT MATTERS</span>.</p>
                </div>
                {/*<div>*/}
                <span>Judith mbaniwe</span>
                <p>Business woman and Mom</p>
                {/*</div>*/}


                <div >
                    <img src={image1} alt={""} className={style.slidingImage}/>
                    {/*    <img src={image2} alt={""}/>*/}
                    {/*    <img src={image3} alt={""}/>*/}
                </div>

                <div>
                    <img src={ellipse1} alt={""} className={style.circle1}/>
                    <img src={ellipse2} alt={""} className={style.circle1}/>
                    <img src={ellipse3} alt={""} className={style.circle1}/>
                </div>

            </div>
        </div>
    )
}
export default Testimony;