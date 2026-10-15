import { AiFillFire } from "react-icons/ai";
import "./Hero.css" 
import domainimg from "../assets/domain.png"
export default function Hero() {
  return (
    <main>
        <div className="container">
            <div className="content">
                      <div className="limtedtime">
                <AiFillFire />
                <p>Don't miss limited-time savings: </p>
                <span>Savings 20%</span>
            </div>
            <h1> &nbsp;Everything for Your Site to Succeed</h1>
          
            <div className="special">
                  <a href="">Get Started</a>
                  <div className="start">
                            <p>Starting at only</p>
            <span>$4.75/mo*</span>
                  </div>
             
            </div>
         
        </div>
          <div className="domainimg">
            <img src={domainimg} alt="" />
        </div>
            </div>
      
    </main>
    
  )
}





