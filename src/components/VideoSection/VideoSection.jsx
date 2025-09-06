import React from "react";
import "./VideoSection.scss";
import demoVideo from "../../assets/videoplayer.mp4";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline>
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
