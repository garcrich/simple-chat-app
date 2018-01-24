import React from 'react';
import video from '../../videos/Pencil.mp4'

const Video = () => {
    return (
        <div>
            <div className="video-overlay"></div>
            <video autoPlay loop id="video-background" muted playsInline>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;