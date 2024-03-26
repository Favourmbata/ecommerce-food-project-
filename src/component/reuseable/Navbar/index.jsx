import style from "./index.module.css"
import image from "../../../asserts/Frame 297.png"
import heart from "../../../asserts/footer/icon/heart.png"
import shoppingCart from "../../../asserts/footer/icon/Shopping--cart.png"
import circle from "../../../asserts/footer/icon/iconoir_profile-circle.png"

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.linkCont}>
                <div className={style.new}>
                    <div className={style.linkImg}>
                        <img src={image} alt={""} className={style.imgD}/>
                        <h2><span style={{color: "#37c077"}}>GoChow</span></h2>
                    </div>

                    <div className={style.details}>
                        <p>Products</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>
                </div>


                <div className={style.logoDetails}>
                    <img src={heart} alt={""} className={style.linkPic}/>
                    <img src={shoppingCart} alt={""} className={style.linkPic}/>
                    <img src={circle} alt={""} className={style.linkPic}/>
                </div>

            </div>


        </div>
    )
}
export default Navbar;
