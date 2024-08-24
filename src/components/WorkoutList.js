import React, { useState } from 'react';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState(['Push-ups', 'Squats', 'Running', 'Cycling']);
  
  return (
    <div>
      <h2>Available Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
