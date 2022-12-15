import React from 'react'
import "./About.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
    <div className="a-left">
     <div className="a-card bg"></div>  
     <div className="a-card">
     <img src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=600" 
    alt="" 
    className="a-img" />
    </div>  
    </div>


    <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-subtitle">
            Its a portfolio app been developed to do some hands on on react and making it responsive.
        </p>
        <p className="a-desc">
            Magna non eiusmod aliquip sunt amet mollit anim magna enim pariatur. Qui ipsum amet minim aliquip in non. Laboris ipsum quis velit pariatur mollit nisi aute id ex reprehenderit irure enim culpa consequat.
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
            <h4 className="a-award-title">Software Engg Award 2022</h4>
            <p className="a-award-desc">
                Minim dolor et et qui do quis consectetur amet occaecat quis ex amet elit irure. Consectetur amet elit sunt magna eiusmod. Commodo amet.
            </p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default About