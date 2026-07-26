import React from 'react';
import { CohortDetails } from './CohortDetails';

function App() {
  const cohorts = [
    { code: 'CH01', name: 'Java FSE', status: 'ongoing' },
    { code: 'CH02', name: 'Data Science', status: 'completed' }
  ];
  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map(c => <CohortDetails key={c.code} cohort={c} />)}
    </div>
  );
}

export default App;
