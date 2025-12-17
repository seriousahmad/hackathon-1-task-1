import React from 'react';
import clsx from 'clsx';
import './TimelineTable.css';

const TimelineTable = ({ data, className }) => {
  return (
    <div className={clsx('timeline-table-container', className)}>
      <table className="timeline-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Topic</th>
            <th>Learning Objectives</th>
            <th>Activities</th>
          </tr>
        </thead>
        <tbody>
          {data.map((week, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className="week-cell">
                <div className="week-badge">{week.week}</div>
              </td>
              <td>
                <h4>{week.topic}</h4>
                <p>{week.description}</p>
              </td>
              <td>
                <ul className="objectives-list">
                  {week.objectives.map((objective, idx) => (
                    <li key={idx} className="objective-item">
                      {objective}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul className="activities-list">
                  {week.activities.map((activity, idx) => (
                    <li key={idx} className="activity-item">
                      {activity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimelineTable;