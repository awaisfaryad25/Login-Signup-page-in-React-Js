import React, { useState } from "react"
import './LoginSignup.css'
import IMAGES from "../../images/images";


const LoginSignup = () => {

  const [action, setAction] = useState("Log In")

  return (
    <div>
      <section className="form_block bg-teal-400">
        <div className="container">
          <div className="formRow py-16">
            <div className="formWrapper  bg-white">
              <form action="https://formsubmit.co/mujrim333@gmail.com" className="formSign" method="post">
                <div className="user">
                <img src={IMAGES.man} alt='first image'/>
                </div>
                <h1 className="formTitle">{action}</h1>
                <hr className="strokLine mt-1" />

                <div className="inputs">
                  {action==="Log In"?<div></div>:<div className="input">
                    <input type="text" name="name" id="myName" placeholder="Name" required/>
                  </div>}

                  <div className="input">
                    <input type="email" name="email" id="getEmail" placeholder="Email" required/>
                  </div>
                  
                  <div className="input">
                    <input type="password" name="pswd" id="password" placeholder="Password" required/>
                  </div>
                </div>
                
                {action==="Sign Up"? <button className={action=="Log In"? "submitGray" : "submit"} >Sign Up</button>:
                 <button className={action=="Sign Up"? "submitGray" : "submit"} >Log In</button>}
                
                
                <div>
                <br />
                {action==="Sign Up"?<div></div>:<div className="forget">
                  <span className="forget text-xs ">Forget Password? <a className="clickPswd" href="#">Click here.</a></span>
                </div>}
                </div>
                

                <div>
                  <br />
                {action==="Sign Up"? <span className="account text-xs">Already have an account ? <a href="" onClick={()=>{setAction("Log In")}}>Log In</a></span> :
                <span className="account text-xs">Don't have an account? <a href="" onClick={()=>{setAction("Sign Up")}}>Sign Up</a></span>}
                </div>
                
              </form>
              <br />
              <div className="footer">
                  <div className="footerLeft"></div>
                  <div className="footerRight">
                    <span className="text-sm font-bold">Login via</span>
                    <div className="social">
                    <a href="" className="socialIcn">
                    <img src={IMAGES.fb} alt='first image'/>
                    </a>
                    <a href="" className="socialIcn">
                    <img src={IMAGES.insta} alt='first image'/>
                    </a>
                    <a href="" className="socialIcn">
                    <img src={IMAGES.g} alt='first image'/>
                    </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignup;
