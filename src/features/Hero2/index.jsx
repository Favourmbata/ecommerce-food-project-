import style from "./index.module.css"
import image from "../../asserts//footer/icon/image 1.png"


const Hero2 = () => {
    return (
        <div className={style.mainCont}>


            <div>
                <img src={image} alt={""} className={style.globe}/>
            </div>

            <div className={style.secondCont}>

                <div className={style.round}>
                    <h2 className={style.fiftyFive}><span style={{color: "#00af52"}}>54</span></h2>
                    <p className={style.country}> <span style={{color:"#00af52"}}>Countries</span></p>
                </div>

                <div className={style.platform}>
                        <h2 className={style.cut}>
                            Our platform cuts across<span>different countries</span>
                        </h2>
                    <p className={style.daily}>A daily dataset to keep you up to date on market <span>trends  and fruits and veggies in season. </span></p>
                </div>


            </div>

        </div>
    )
}
export default Hero2;

