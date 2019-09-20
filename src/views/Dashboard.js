import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TEST_QUERY } from '../queries';

const Dashboard = () => {
  
  const { data, loading, error } = useQuery(TEST_QUERY);

  if(error) return <div>Error</div>;
  if(loading) return <div>Loading...</div>;

  return (
    <div className="view-dashboard">
      <p>{ data.test }</p>
    </div>
  );
};

export { Dashboard };