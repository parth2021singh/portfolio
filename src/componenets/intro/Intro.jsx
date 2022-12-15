import React from "react"
import './Intro.css'
import Me from '../../img/face.jpg'

function Intro(){
    return(
        <div className="i">
            <div className="i-left">
             <div className="i-left-wrapper">
                <div className="i-intro">
                    Hi, My name is
                </div>
                <div className="i-name">
                    Parth Singh
                </div>
                <div className="i-skills">
                <div className="i-left-title-wrapper">
                    <div className="i-title-item">
                        React Developer
                    </div>
                    <div className="i-title-item">
                         Photographer
                    </div>
                    <div className="i-title-item">
                        Javascript Developer
                    </div>
                    <div className="i-title-item">
                        Content Creator
                    </div>
                </div>
        
             </div>
             <p className="i-left-desc">
                    I worked on the UI part of develoment, along with working on cross platform responsiveness.
            </p>
            </div>
            </div>


            <div className="i-right">
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}
export default Intro