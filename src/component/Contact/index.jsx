import style from "./index.module.css"
import Community from "../../features/Community";

const Contact = ()=>{
    return(
        <div className={style.mainCont}>

            <div className={style.secondCont}>
                <form className={style.information}>
                    <div className={style.first}>
                        <p>FirstName</p>
                        <button className={style.bbOne}></button>
                    </div>
                    <div className={style.last}>
                        <p>LastName</p>
                        <button className={style.bbTwo}></button>
                    </div>

                    <p>EmailAddress</p>
                    <button className={style.bbThree}></button>
                     <p>Message</p>
                    <button className={style.bbFour}></button>
                    <p>I declare that i have read privacy information and authorise the data controller to process my data <br/> according to the methods indicated </p>
                </form>

            </div>
            <div className={style.contact}>
                <h2 style={{color:"#F97316"}}> Contact Us</h2>
                <p>Fill out the form to request information.</p>
            </div>

            <Community/>
        </div>
    )
}
export default Contact;