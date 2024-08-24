import React, { useState } from 'react';

const PlanCreation = ({ availableWorkouts, onSavePlan }) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [planName, setPlanName] = useState('');

  const handleSelectWorkout = (workout) => {
    setSelectedWorkouts([...selectedWorkouts, workout]);
  };

  const handleSavePlan = () => {
    if (planName && selectedWorkouts.length > 0) {
      onSavePlan({ name: planName, workouts: selectedWorkouts });
      setPlanName('');
      setSelectedWorkouts([]);
    }
  };

  return (
    <div>
      <h2>Create a Workout Plan</h2>
      <input
        type="text"
        placeholder="Enter plan name"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
      />
      <h3>Select Workouts:</h3>
      <ul>
        {availableWorkouts.map((workout, index) => (
          <li key={index}>
            <button onClick={() => handleSelectWorkout(workout)}>
              {workout}
            </button>
          </li>
        ))}
      </ul>
      <h3>Selected Workouts:</h3>
      <ul>
        {selectedWorkouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
      <button onClick={handleSavePlan}>Save Plan</button>
    </div>
  );
};

export default PlanCreation;
