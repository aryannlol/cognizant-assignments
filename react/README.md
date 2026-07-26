# ReactJS Hands-on Assignments (1 to 19) - Complete Solutions

This directory contains complete implementations and reference source code for all **19 ReactJS Hands-on Assignments (HOL 1 to 19)**.

---

## 📋 Table of Contents & Solutions Overview

| Assignment | Project Name | Description & Key Concepts |
| :--- | :--- | :--- |
| **HOL 1** | `myfirstreact` | First React App, JSX rendering, Functional Component setup. |
| **HOL 2 & 3** | `scorecalculatorapp` | State, Props, Event handling, Student Score & Grade Calculator. |
| **HOL 4** | `blogapp` | Component Lifecycle (`componentDidMount`, `componentDidCatch`, Async Fetch). |
| **HOL 5** | `cohortdashboard` | Styling with CSS Modules (`CohortDetails.module.css`) & Inline dynamic styles. |
| **HOL 6** | `trainersapp` | SPA Navigation with `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`). |
| **HOL 7** | `shoppingapp` | Props passing & Array rendering in Class Components (`Cart` & `OnlineShopping`). |
| **HOL 8** | `counterapp` | Component State management for Mall Entry/Exit Counter (`UpdateEntry`, `UpdateExit`). |
| **HOL 9** | `cricketapp` | ES6 array mapping, filter, arrow functions, destructuring, and array merging (`T20` & `Ranji`). |
| **HOL 10** | `officespacerentalapp` | JSX Elements, dynamic styling rules (Rent condition > 60000 green, else red). |
| **HOL 11** | `eventexamplesapp` | Event handling, synthetic events, counter controls, & INR to EUR Currency Converter. |
| **HOL 12** | `ticketbookingapp` | Conditional Rendering (Guest User vs Logged-in User views). |
| **HOL 13** | `bloggerapp` | Conditional rendering variations for Book, Blog, and Course details. |
| **HOL 14** | `employeemanagementapp` | Theme Context Sharing across nested components using React Context API (`createContext`, `useContext`). |
| **HOL 15** | `ticketraisingapp` | Controlled Components & Forms for employee complaint registration with reference code generator. |
| **HOL 16** | `mailregisterapp` | Form Validation (Name length >= 5, Email pattern `@.`, Password length >= 8). |
| **HOL 17** | `fetchuserapp` | Asynchronous REST API consumption from `https://api.randomuser.me/` using `fetch`. |
| **HOL 18** | `cohortdashboard` | Unit testing React components with Jest & Enzyme (`describe`, `test`, `mount`, matchers, snapshots). |
| **HOL 19** | `gitclientapp` | GitHub API service consuming repos via Axios with Jest unit test mocks & spies. |

---

## 🛠️ Code Implementations & Component Snippets

### 1. HOL 1: `myfirstreact`
```jsx
// src/App.js
import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My First React App</h1>
      <p>Building modern web applications with ReactJS!</p>
    </div>
  );
}

export default App;
```

---

### 2. HOL 2 & 3: `scorecalculatorapp` (Student Score & Grade)
```jsx
// src/CalculateScore.js
import React from 'react';

export const CalculateScore = ({ Name, School, Total, Goal }) => {
  const average = Total / 3;
  const grade = average >= 80 ? 'A' : average >= 60 ? 'B' : 'C';

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Average Marks:</strong> {average.toFixed(2)}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
};
```

---

### 3. HOL 4: `blogapp` (Lifecycle & Error Boundaries)
```jsx
// src/Posts.js
import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], hasError: false, errorInfo: null };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 5) });
    } catch (err) {
      this.setState({ hasError: true, errorInfo: err.message });
    }
  };

  componentDidCatch(error, info) {
    alert(`Error caught in component: ${error.toString()}`);
  }

  render() {
    if (this.state.hasError) return <div>Error loading posts.</div>;

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
```

---

### 4. HOL 5: `cohortdashboard` (CSS Modules & Inline Styling)
```css
/* src/CohortDetails.module.css */
.box {
  width: 300px;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}

dt {
  font-weight: 500;
}
```

```jsx
// src/CohortDetails.js
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
        <dt>Course:</dt>
        <dd>{cohort.name}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
};
```

---

### 5. HOL 6: `trainersapp` (React Router Navigation)
```jsx
// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const trainersData = [
  { id: 1, name: 'John Doe', email: 'john@cognizant.com', phone: '9876543210', skill: 'React' },
  { id: 2, name: 'Jane Smith', email: 'jane@cognizant.com', phone: '9876543211', skill: 'Angular' }
];

const Home = () => <h2>Welcome to Cognizant Trainers Portal</h2>;

const TrainersList = () => (
  <div>
    <h2>Trainers List</h2>
    <ul>
      {trainersData.map(t => (
        <li key={t.id}>
          <Link to={`/trainers/${t.id}`}>{t.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainersData.find(t => t.id === parseInt(id));
  if (!trainer) return <p>Trainer not found</p>;
  return (
    <div>
      <h3>{trainer.name} Details</h3>
      <p>Email: {trainer.email}</p>
      <p>Phone: {trainer.phone}</p>
      <p>Skill: {trainer.skill}</p>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/trainers">Trainers List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/trainers/:id" element={<TrainerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 6. HOL 8: `counterapp` (State Management for Entry/Exit)
```jsx
// src/CountPeople.js
import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = { entrycount: 0, exitcount: 0 };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({ entrycount: prevState.entrycount + 1 }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({ exitcount: prevState.exitcount + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Mall Visitor Counter</h2>
        <p>People Entered: {this.state.entrycount}</p>
        <p>People Exited: {this.state.exitcount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit} style={{ marginLeft: '10px' }}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
```

---

### 7. HOL 11: `eventexamplesapp` (Currency Converter)
```jsx
// src/CurrencyConvertor.js
import React, { useState } from 'react';

export const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState(null);

  const handleConvert = (e) => {
    e.preventDefault();
    const euroVal = parseFloat(inr) / 90; // Approx rate 1 EUR = 90 INR
    setEur(euroVal.toFixed(2));
  };

  return (
    <div>
      <h3>INR to EUR Currency Converter</h3>
      <form onSubmit={handleConvert}>
        <input 
          type="number" 
          placeholder="Amount in INR" 
          value={inr} 
          onChange={(e) => setInr(e.target.value)} 
          required 
        />
        <button type="submit">Convert</button>
      </form>
      {eur && <p>Equivalent in EUR: €{eur}</p>}
    </div>
  );
};
```

---

### 8. HOL 14: `employeemanagementapp` (React Context API)
```jsx
// src/ThemeContext.js
import { createContext } from 'react';
const ThemeContext = createContext('light');
export default ThemeContext;

// src/EmployeeCard.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <h4>{employee.name}</h4>
      <p>{employee.designation}</p>
      <button className={`btn-${theme}`}>View Profile</button>
    </div>
  );
};
```

---

### 9. HOL 16: `mailregisterapp` (Form Validation)
```jsx
// src/Register.js
import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (form.name.length < 5) err.name = "Name should have at least 5 characters.";
    if (!form.email.includes('@') || !form.email.includes('.')) err.email = "Email should contain @ and .";
    if (form.password.length < 8) err.password = "Password should have at least 8 characters.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Registration Successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>
      <div>
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <div>
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
```

---

### 10. HOL 17: `fetchuserapp` (Async REST API Consumption)
```jsx
// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
  state = { user: null, loading: true };

  async componentDidMount() {
    const res = await fetch('https://api.randomuser.me/');
    const data = await res.json();
    this.setState({ user: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) return <p>Loading user data...</p>;
    const { title, first } = this.state.user.name;
    const image = this.state.user.picture.large;

    return (
      <div>
        <h2>User Details</h2>
        <img src={image} alt="User" style={{ borderRadius: '50%' }} />
        <h3>{title} {first}</h3>
      </div>
    );
  }
}

export default Getuser;
```

---

### 11. HOL 19: `gitclientapp` (Axios API & Unit Testing Mocks)
```javascript
// src/GitClient.js
import axios from 'axios';

export class GitClient {
  static async getRepositories(username) {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data.map(repo => repo.name);
  }
}
```

```javascript
// src/GitClient.test.js
import axios from 'axios';
import { GitClient } from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [{ name: 'react-app' }, { name: 'spring-boot-api' }];
    axios.get.mockResolvedValue({ data: dummyRepos });

    const repos = await GitClient.getRepositories('techiesyed');
    expect(repos).toEqual(['react-app', 'spring-boot-api']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
```

---

## 🚀 Running the Apps Locally
To execute any component or application:
```bash
cd react/<project_name>
npm install
npm start
```

For unit testing (e.g. HOL 18 / HOL 19):
```bash
npm test
```
