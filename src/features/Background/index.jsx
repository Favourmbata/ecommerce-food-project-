import style from "./index.module.css"

const  Background = ()=>{
    return(
        <div className={style.mainCont}>


            <div className={style.secondCont}>
                <p >
                    <button className={style.thirdCont}>Enter your Email Address</button> <button style={{background:"#F89839", color:"#ffffff"}} className={style.sub}>Subscribe</button>   </p>
            </div>

        </div>
    )
}
export default Background;