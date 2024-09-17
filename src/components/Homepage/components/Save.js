import React from 'react';
import "./Save.css";
import Saveimg from "../../../saveimg.png"
import Tag from "../../../tag.png";
import sparkle from "../../../sparkle.png";

const Save = () => {
  return (
    <div className='main-div-save'>
        <div className='container sub-main-save'>
            <div className='row save-blue-div'>
                <div className='col-md-2'>
                    <h2 className='first-text'>Save</h2>
                    <div className='sparkle-div'>
                    <img src={sparkle} className='sparkle-img' />
                    </div>
                  
                </div>
                <div className='col-md-4'>
                    <div className='tag-div'>
                        <img src={Tag} className='tag-img'/>
                        <div className='first-purchase'>
                           <span className='first'> 1<sup>st</sup></span> <br/> <span className='purchase'>Purchase</span> 
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='circle-div'>
                        <img src={Saveimg} className='save-img-girl'/>
                    </div>
                    <div className='sparkle-2'>
                        <img src={sparkle} className='sparkle-img-2' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Save;
