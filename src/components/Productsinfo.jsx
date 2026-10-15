import style from "./index.module.css"
 import { FaArrowRightLong } from "react-icons/fa6";
export default function Productsinfo(Deliverproduct) {
  return (
   
<div className={style.container}>

         <div className={style.product}>
           
                <img className={style.img} src={Deliverproduct.passedproduct.img} alt="" />
                <div className={style.content}>
            <h2>{Deliverproduct.passedproduct.title}</h2>
                <p>{Deliverproduct.passedproduct.desc}</p>
                </div>
                
                <FaArrowRightLong />
              </div>
    </div>
   
    
      
  )
}


