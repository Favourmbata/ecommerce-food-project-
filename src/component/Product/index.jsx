import style from "./index.module.css"
import image1 from "../../asserts/footer/image 1.png"
import image2 from "../../asserts/footer/image 2.png"
import image3 from "../../asserts/footer/Vector (1).png"
import dot from "../../asserts/footer/Dot.png"
import ellipse1 from "../../asserts/footer/icon/Ellipse 6.png"
import ellipse2 from "../../asserts/footer/icon/Ellipse 7.png"
import ellipse3 from "../../asserts/footer/icon/Ellipse 8.png"
import Community from "../../features/Community";


const Product = ()=>{
    const date = new Date().getTime()
    return(
        <div className={style.mainCont}>

            <div className={style.secondCont}>
                <div className={style.fruit1Img}>
                    <img src={image1} alt={""} className={style.fruit1}/>
                </div>


                <div  className={style.fruit2Img}>
                    <p className={style.dateTime}>{date}</p>
                    <img src={image2} alt={""} className={style.fruit2}/>
                    <p style={{color: "#F97316"}}>Carrot</p>
                    <img src={image3} alt={""}/>
                    <img src={image3} alt={""}/>
                    <img src={image3} alt={""}/>
                    <img src={image3} alt={""}/>
                    <img src={image3} alt={""}/>
                    <p className={style.starr}>5 Stars</p>
                    <span>$40</span>
                    <button className={style.shop1}>Shop Now</button>
                </div>


                <div className={style.thirdCont}>

                    {/*<div>*/}
                    <button className={style.dotBtn}>
                        <img src={dot} alt={""} className={style.dotIcon}/>
                        <p>NEW</p>
                    </button>

                    {/*</div>*/}

                    <h3 className={style.veggies}>DAILY PURCHASE OF <br/> Fresh Veggies </h3>
                    <p>Enjoy wholesome vegetables delivered at your <br/> doorstep everyday!</p>
                    <button className={style.shop}>Shop Now</button>

                    <div className={style.threeCircles}>
                        <img src={ellipse1} alt={""} className={style.circles}/>
                        <img src={ellipse2} alt={""} className={style.circles}/>
                        <img src={ellipse3} alt={""} className={style.circles}/>
                    </div>
                </div>

            </div>
            <Community />
        </div>
    )
}
export default Product;