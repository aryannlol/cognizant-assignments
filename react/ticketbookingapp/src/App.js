import React, { useState } from 'react';

const GuestPage = () => (
  <div>
    <h2>Flight Schedules (Guest View)</h2>
    <p>Flight 101: NY to LDN - </p>
    <p>Flight 202: DEL to SFO - </p>
    <p><em>Please log in to book tickets.</em></p>
  </div>
);

const UserPage = () => (
  <div>
    <h2>User Booking Portal</h2>
    <p>Welcome, User! You can now book tickets.</p>
    <button onClick={() => alert('Ticket Booked Successfully!')}>Book Flight 101</button>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <header style={{ marginBottom: '20px' }}>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </header>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
