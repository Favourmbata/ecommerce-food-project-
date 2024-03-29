import style from "./index.module.css"
import {Consent} from "./data";

const CheckOut = ()=>{
    return(
        <div className={style.mainCont}>

            <div>
                <h4 className={style.feature}>Check out these cool features</h4>
            </div>

            <div className={style.secondCont}>
                {
                    Consent.map((item, index) =>(

                        <button key={index}>
                            <h3 className={style.title}>
                                {item.title}
                            </h3>
                            <p className={style.text}>
                                {item.text}
                            </p>
                            <div className={style.started}>
                            <p style={{color:"#37c077"}}>
                                {item.fill}
                            </p>
                            <img src={item.image} alt={""} className={style.arrowImg}/>
                            </div>
                        </button>
                    ))

                }
            </div>


        </div>
    )
}
export default CheckOut;