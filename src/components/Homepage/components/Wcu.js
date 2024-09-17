import React from 'react';
import "./Wcu.css";
import handshake from "../../../handshake.png";
import authentic from "../../../authentic.png";
import recycle from "../../../recycle.png";
import plane from "../../../plane.png";
import firework from "../../../splashpng.png"
import shapewave from "../../../wave.png";
const Wcu = () => {
  return (
    <div className='Wcu-main-div'>
       <img src={shapewave} className="waveshape" />
      <div className='container Wcu-internal'>
        <div className='row'>
          <div className='col-md-8 text-center Wcu-leftdiv'>
           
            <h2 className='Wcu-title'>
              Why <span className='Wcu-title-span'>Choose</span> Us?
            </h2>
            <div className='internal-boxes-div'>
              <div className='flex-row'>
                <div className='items-Wcu-div'>
                    <div className='img-div-Wcu'>
                        <img  className='image-wcu' src={handshake}  /> 
                    </div>
                    <h3 className='name-img-wcu'>Trusted Partnership with Local Artisans</h3>
                </div>
                <div className='items-Wcu-div'>
                <div className='img-div-Wcu'>
                <img  className='image-wcu' src={authentic}  /> 
                </div>
                <h3 className='name-img-wcu'>Authentic Nepalese Products</h3>
                </div>
              </div>
              <div className='flex-row'>
                <div className='items-Wcu-div'>
                <div className='img-div-Wcu'>
                <img  className='image-wcu' src={recycle
                }  /> 
                </div>
                <h3 className='name-img-wcu'>Sustainable and Ethical Sourcing</h3>
                </div>
                <div className='items-Wcu-div'>
                <div className='img-div-Wcu'>
                <img  className='image-wcu' src={plane}  /> 
                </div>
                <h3 className='name-img-wcu'>Global Shipping & Easy Returns</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 firwork-side'>
            <div className='firework-div'>
              <img src={firework} className='firework-img'/>
            </div>
          </div>
        </div>
      </div>
      <img src={shapewave} className="waveshapeb" />
    </div>
  )
}

export default Wcu;
