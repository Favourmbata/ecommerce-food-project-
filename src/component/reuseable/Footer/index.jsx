import style from "./index.module.css"
import facebookImg from "../../../asserts/logos_facebook (1).png"
import instagram from "../../../asserts/cib_instagram.png"
import twitter from "../../../asserts/logos_twitter (1).png"
import github from "../../../asserts//footer/Social icon.png"
import circle from "../../../asserts/footer/Icon.png"
import chevron from "../../../asserts/footer/icon/Icon.png"
import image from "../../../asserts/footer/icon/Rectangle 49.png"

const Footer = ()=>{
    const date = new Date().getFullYear();
    return(
        <div className={style.mainCont}>

          <div className={style.linkCont}>
          <div className={style.secondCont}>
            <div className={style.info}>
                <p>INFORMATION</p>
                <p>Home</p>
                <p>Blog</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>

            <div className={style.topCategory}>
                <p>Top Categories</p>
                <p>Fruit</p>
                <p>Carrot</p>
                <p>Tubers</p>
                <p>Organics</p>
            </div>
            <div className={style.legal}>
                <p>LEGAL</p>
                <p>Calm</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>

              <div className={style.currency}>
            <p>LANGUAGES & CURRENCIES</p>
                  <p>
                      <button className={style.languageBtn}>English</button>
                      <img src={chevron} alt={""} className={style.chev}/>
                  </p>
                  <button className={style.currencyBtn}>AUD</button>
        </div>
          </div>

            <div>
                <hr/>

                <div className={style.icons}>
                    <span className={style.copyWell}> Copyright &copy; {date} Workflow, Inc. All rights reserved.</span>

                    <div className={style.socials}>
                    <img src={facebookImg} alt={""} className={style.logo1}/>
                    <img src={instagram} alt={""} className={style.logo2}/>
                    <img src={twitter} alt={""} className={style.logo3}/>
                    <img src={github} alt={""} className={style.logo4}/>
                    <img src={circle} alt={""} className={style.logo5}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Footer;