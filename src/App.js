import React, { useState } from 'react';
import WorkoutList from './components/WorkoutList';
import PlanCreation from './components/PlanCreation';
import WorkoutTracker from './components/WorkoutTracker';

function App() {
  const availableWorkouts = ['Push-ups', 'Squats', 'Running', 'Cycling'];
  const [savedPlans, setSavedPlans] = useState([]);

  const handleSavePlan = (newPlan) => {
    setSavedPlans([...savedPlans, newPlan]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Fitness Tracker App</h1>
        <WorkoutList />
        <PlanCreation availableWorkouts={availableWorkouts} onSavePlan={handleSavePlan} />
        <WorkoutTracker savedPlans={savedPlans} />
      </header>
    </div>
  );
}

export default App;
