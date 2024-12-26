import React, { useState, useEffect } from 'react';
import '../App.css'; // Import the CSS file

const Timeline = () => {
  const [highlightPosition, setHighlightPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // Track if scrolled

  // Function to update the highlight position when the mouse moves
  const handleMouseMove = (e) => {
    const timeline = document.querySelector('.timeline-line');
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const offsetY = e.clientY - rect.top; // Calculate Y position relative to the timeline
      setHighlightPosition(offsetY);
    }
  };

  // Function to handle scroll events and change the timeline line color
  const handleScroll = () => {
    const timeline = document.querySelector('.timeline-line');
    if (timeline) {
      // Check if user has scrolled and toggle red class
      if (window.scrollY > 0) {
        setIsScrolled(true);
        timeline.classList.add('red');
      } else {
        setIsScrolled(false);
        timeline.classList.remove('red');
      }
    }

    // Handle visibility of timeline elements when scrolling
    const timelineElements = document.querySelectorAll('.timeline-element');
    timelineElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when the page loads

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineData = [
    { id: 1, title: 'Opening Session', subtitle: 'Address by Prof. Avinash and Host', time: '09:15 AM - 10:00 AM' },
    { id: 2, title: 'Talk 1', subtitle: 'Mr. Nalin Singhal', time: '10:00 AM - 10:30 AM' },
    { id: 3, title: 'Talk 2', subtitle: 'Co. Shivdendra Pratap Singh Kanwar', time: '10:30 AM - 11:00 AM' },
    { id: 4, title: 'Talk 3', subtitle: 'Mrs. Kaushalya Choudhary', time: '11:00 AM - 11:30 AM' },
    { id: 5, title: 'Talk 4', subtitle: 'Mr. Arpit Mangal', time: '12:30 PM - 01:00 PM' },
    { id: 6, title: 'Talk 5', subtitle: 'Mr. Sujeet Singh', time: '01:00 PM - 01:30 PM' },
    { id: 7, title: 'Talk 6', subtitle: 'Mr. Gaurav Sen', time: '03:20 PM - 03:50 PM' },
    { id: 8, title: 'Talk 7', subtitle: 'Ms. Devyani Shorey', time: '03:50 PM - 04:20 PM' },
    { id: 9, title: 'Talk 8', subtitle: 'Mrs. Nithya Rajendran', time: '04:20 PM - 05:05 PM' },
    { id: 10, title: 'Talk 9', subtitle: 'Mr. Suhas Yathiraj', time: '05:30 PM - 06:00 PM' },
  ];

  return (
    <div className="timeline-container" onMouseMove={handleMouseMove}>
      <h1 className="timeline-header">
        Programme <span style={{ color: 'red' }}>Schedule</span>
      </h1>
      <div className="timeline">
        {/* Main Vertical Line */}
        <div className="timeline-line">
          {/* Highlight Circle that follows the pointer */}
          <div
            className="timeline-highlight"
            style={{ top: `${highlightPosition}px` }}
          ></div>
        </div>

        {/* Timeline Elements */}
        <div className="timeline-elements">
          {timelineData.map((event, index) => (
            <div
              key={event.id}
              className={`timeline-element ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className={`timeline-element-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                <h3>{event.title}</h3>
                <h4>{event.subtitle}</h4>
                <p>{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
