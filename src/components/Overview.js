import React from 'react'
import video from "./resources/feature_video.mp4"
import Background from "./resources/feature-image.jpg"
import "./style/Overview.css"

const Overview = () => {
    return (
        <div className='overview'>
            <div className="content">
                <p>
                    A few simple steps towards your perfect fit
                </p>
                <a href='/get-started'>


                    <button>
                        Get started
                        &#8594;


                    </button>
                </a>

            </div>
            {/* <video src={video}></video> */}
        </div>
    )
}

export default Overview