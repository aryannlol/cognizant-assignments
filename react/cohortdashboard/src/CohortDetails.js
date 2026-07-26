import React from 'react';
import styles from './CohortDetails.module.css';

export const CohortDetails = ({ cohort }) => {
  const h3Style = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };
  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.code}</h3>
      <dl>
        <dt>Cohort Name:</dt>
        <dd>{cohort.name}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
};
