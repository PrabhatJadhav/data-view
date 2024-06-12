import React from 'react';
import ViewList from '../components/ViewList';

function HomeScreen() {
  let linkToGetDataFrom: string =
    'https://aamras.com/dummy/EmployeeDetails.json';

  return <ViewList dataLink={linkToGetDataFrom} />;
}

export default HomeScreen;
