import imgco from"../assets/company.png"
import "./penfits.css"
import debian from "../assets/debian.png"
import ubuntu from "../assets/ubuntu.png"

export default function Penfits() {
  return (
    <section className="penfits">
        <div className="container">
        <img src={imgco} alt="" />
        <div className="content">
            <h2>24/7/365 Support</h2>
            <p>Sample text. Click to select the Text Element. Duis aute <br /> irure dolor in 
                reprehenderit in voluptate velit esse 
                cillum <br /> dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat <br /> non 
                proident, <br /> sunt in culpa
                 qui officia deserunt mollit anim id est laborum.</p>
                 <a href="">Get Started</a>
        </div>
        <div className="servers">
            <h2>Free OS Setup for Dedicated Servers</h2>
            <p>Need a Custom OS? ​Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            <div className="servercontainer">
                        <div className="server">
    <img src={debian} alt="" />
            </div>
            <div className="server">
    <img src={ubuntu} alt="" />
            </div>
            <div className="server">
    <img src={debian} alt="" />
            </div>
            <div className="server">
    <img src={debian} alt="" />
            </div>
            <div className="server">
    <img src={debian} alt="" />
            </div>
            <div className="server">
    <img src={debian} alt="" />
            </div>
            </div>
    
        </div>
        </div>
    </section>
  )
}
