import React from 'react'
import "./card.css"
import Fear from "../../assetes/images/fear.png";
import unlike from "../../assetes/images/thum-down.png";
import like from "../../assetes/images/like.png";
import sms from "../../assetes/images/sms.png";
import shear from "../../assetes/images/share-2.png";
export default function Cards() {
  return (
    <>
        <div className="card-div">
          <span className='d-flex'>
            <p className='smp'><small><img src={Fear} alt="" /> Hot </small>  #InTech</p>
            <p>1/02/23 1:41</p>
          </span>
          <div className="text"> <h5>County staff to refund stolen Sh17m in exchange for freedom</h5>
          <h6 className='soml-text'>Lorem ipsum lorem ipsum....Lorem ipsum lorem ipsum....Lorem ipsum lorem ipsum....</h6>
          </div>
          <div className="icons">
            <div className="like">
            <img src={like} alt="" />
            1,2M
            </div>
            <div className="like">
            <img src={unlike} alt="" />
            1,1K
            </div>
            <div className="comments">
              <img src={sms} alt="" className='mx-2'/>
              comments
            </div>
            <div className="shear">
              <img src={shear} alt="" /> Shear
            </div>
          </div>
        </div>
    </>
  )
}
