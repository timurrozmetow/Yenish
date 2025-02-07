import React from 'react'

export const Timeline = () => {
    const events = [
      { date: '2005', title: 'Родился в Москве', icon: '🎂' },
      { date: '2022', title: 'Закончил школу', icon: '🎓' },
      { date: '2025', title: 'Призыв в армию', icon: '🎖️' },
      { date: '2027', title: 'Дембель!', icon: '🕊️' },
    ];
  
    return (
      <div className="timeline">
        {events.map((event, index) => (
          <div 
            key={event.date}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-icon">{event.icon}</div>
            <div className="timeline-content">
              <h4>{event.date}</h4>
              <p>{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };