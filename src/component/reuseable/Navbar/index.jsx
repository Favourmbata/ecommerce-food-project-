import style from "./index.module.css"
import image from "../../../asserts/Frame 297.png"
import heart from "../../../asserts/footer/icon/heart.png"
import shoppingCart from "../../../asserts/footer/icon/Shopping--cart.png"
import circle from "../../../asserts/footer/icon/iconoir_profile-circle.png"
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.linkCont}>
                <div className={style.new}>
                   <Link to={"/"} ><div className={style.linkImg} >
                        <img src={image} alt={""} className={style.imgD}/>
                        <h2><span style={{color: "#37c077"}}>GoChow</span></h2>
                   </div>
                   </Link>

                    <div className={style.details}>
                        <Link to={"/product"}>Products</Link>
                        <Link to={"/"}>About Us</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/contact"}>Contact Us</Link>
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
