import style from "./index.module.css"
import image from "../../asserts/footer/icon/Rectangle 53.png"
import Community from "../../features/Community";

const Blog = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.bbImage}>
                <img src={image} alt={""} className={style.image1}/>
                <h2 className={style.locals} style={{color:"#F97316"}}>Perfect Assistance in Locals</h2>
            </div>

            <Community/>
        </div>
    )
}
export default Blog;