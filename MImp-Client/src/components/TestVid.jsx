import React from 'react'
import MainVid from '../assets/vidoes/video1.mp4'

const TestVid = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-7  h-[500px] w-full z-10 object-cover"
            >
                <source src={MainVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default TestVid