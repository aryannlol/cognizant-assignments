import React from 'react';

function App() {
  const officeSpace = { name: 'DBS Tech Park', rent: 55000, address: 'Tech Zone 1, City Center' };
  const officeList = [
    { name: 'Cognizant Hub', rent: 75000, address: 'IT Park Phase 2' },
    { name: 'Innovate Campus', rent: 45000, address: 'Outer Ring Road' }
  ];
  return (
    <div>
      <h1>Office Space Rental Portal</h1>
      <div>
        <h2>Featured Office</h2>
        <p>Name: {officeSpace.name}</p>
        <p style={{ color: officeSpace.rent < 60000 ? 'red' : 'green' }}>Rent: Rs. {officeSpace.rent}</p>
        <p>Address: {officeSpace.address}</p>
      </div>
      <h2>All Available Spaces</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
          <h3>{item.name}</h3>
          <p style={{ color: item.rent < 60000 ? 'red' : 'green' }}>Rent: Rs. {item.rent}</p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
