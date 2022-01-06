import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./timeline.css";

function timeline() {
  return (
    <div className="gradient">
      <div className="timeline-title">
        Rewind&nbsp;&nbsp;

        <svg
        className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={50}
        >
          <path
            fill="currentColor"
            d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"
          ></path>
        </svg>
      </div>
      <div className="timeline timeline-section">
        <div className="timeline-container left">
          <div className="date">Aug. '21</div>
          <div className="content">
            <h4>Full Stack Web Developer</h4>
            <p>
              Earned certificate from The Univeristy of Texas at Austin. Yay!!
            </p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="date"> Nov. '19 </div>
          <div className="content">
            <h4>Elementary Teacher</h4>
            <p>
              Started as an At Risk Tutor, then became a teacher.. right before
              covid.
            </p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="date"> May '18 </div>
          <div className="content">
            <h4>Bachelor of Science in Biology</h4>
            <p>Earned a BS in Biology with a minor in Psychology.</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="date"> Dec. '16 </div>
          <div className="content">
            <h4>Associate of Science in Biology</h4>
            <p>Earned a AS in Biology, and an Associate of Arts </p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="date"> May '12 </div>
          <div className="content">
            <h4>Moved to the US</h4>
            <p>Born and raised in Brazil, I moved here during high school!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default timeline;
