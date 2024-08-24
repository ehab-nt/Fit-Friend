import React, { useState } from 'react';

const WorkoutTracker = ({ savedPlans }) => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleStartPlan = (plan) => {
    setCurrentPlan(plan);
    setCompletedWorkouts([]);
  };

  const handleCompleteWorkout = (workout) => {
    setCompletedWorkouts([...completedWorkouts, workout]);
  };

  return (
    <div>
      <h2>Workout Tracker</h2>
      <div>
        <h3>Select a Plan:</h3>
        <ul>
          {savedPlans.map((plan, index) => (
            <li key={index}>
              <button onClick={() => handleStartPlan(plan)}>
                {plan.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {currentPlan && (
        <div>
          <h3>Tracking Plan: {currentPlan.name}</h3>
          <ul>
            {currentPlan.workouts.map((workout, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCompleteWorkout(workout)}
                  disabled={completedWorkouts.includes(workout)}
                >
                  {workout} {completedWorkouts.includes(workout) && '✔️'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkoutTracker;
