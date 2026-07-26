# ReactJS Hands-on Assignments (1, 2, 3, 4, 5, 9, 10, 11, 12, 13) - Complete Solutions

This directory contains complete implementations and reference source code exclusively for **ReactJS Hands-on Assignments 1, 2, 3, 4, 5, 9, 10, 11, 12, and 13**.

---

## 📋 Table of Contents & Exact Project Names

| Assignment | Exact Project Name | Description & Key Concepts |
| :--- | :--- | :--- |
| **HOL 1** | `myfirstreact` | First React App, JSX rendering, Functional Component setup. |
| **HOL 2** | `StudentApp` | Class Components (`Home.js`, `About.js`, `Contact.js`) and rendering. |
| **HOL 3** | `scorecalculatorapp` | Function component (`CalculateScore`), Props, Percentage calculation, CSS stylesheet. |
| **HOL 4** | `blogapp` | Component Lifecycle (`componentDidMount`, `componentDidCatch`, Async Fetch API). |
| **HOL 5** | `cohortdashboard` | Styling with CSS Modules (`CohortDetails.module.css`) & Inline dynamic styles (green/blue status). |
| **HOL 9** | `cricketapp` | ES6 array mapping, filter (`score >= 70`), arrow functions, destructuring, and array merging (`T20players` & `RanjiTrophy`). |
| **HOL 10** | `officespacerentalapp` | JSX Elements, dynamic styling rules (Rent condition > 60000 green, else red). |
| **HOL 11** | `eventexamplesapp` | Event handling, synthetic events, counter controls, & INR to EUR Currency Converter. |
| **HOL 12** | `ticketbookingapp` | Conditional Rendering (`GuestPage` flight browsing vs `UserPage` ticket booking based on login state). |
| **HOL 13** | `bloggerapp` | Conditional rendering variations for Book, Blog, and Course details (`BookDetails`, `BlogDetails`, `CourseDetails`). |

---

## 🛠️ Project Implementations & Code Overview

### 1. HOL 1: `myfirstreact`
- **Location:** `react/myfirstreact/`
- **App.js:**
```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

---

### 2. HOL 2: `StudentApp`
- **Location:** `react/StudentApp/`
- **Components:** `Home.js`, `About.js`, `Contact.js`
```jsx
// src/Components/Home.js
import React, { Component } from 'react';
export class Home extends Component {
  render() {
    return <h3>Welcome to the Home page of Student Management Portal</h3>;
  }
}

// src/App.js
import React from 'react';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}
export default App;
```

---

### 3. HOL 3: `scorecalculatorapp`
- **Location:** `react/scorecalculatorapp/`
- **CalculateScore.js:**
```jsx
import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => (decimal * 100).toFixed(2) + '%';
const calcScore = (total, goal) => percentToDecimal(total / goal);

export const CalculateScore = ({ Name, School, Total, Goal }) => {
  return (
    <div className="score-box">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Goal Marks:</strong> {Goal}</p>
      <p><strong>Score:</strong> {calcScore(Total, Goal)}</p>
    </div>
  );
};
```

---

### 4. HOL 4: `blogapp`
- **Location:** `react/blogapp/`
- **Posts.js (Lifecycle & Fetch API):**
```jsx
import React, { Component } from 'react';
import { Post } from './Post';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], hasError: false };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const loaded = data.slice(0, 5).map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: loaded });
      })
      .catch(err => this.setState({ hasError: true }));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Error occurred: ' + error);
  }

  render() {
    if (this.state.hasError) return <h2>Error loading posts.</h2>;
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(p => (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
```

---

### 5. HOL 5: `cohortdashboard`
- **Location:** `react/cohortdashboard/`
- **CohortDetails.module.css:**
```css
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
- **CohortDetails.js:**
```jsx
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
```

---

### 6. HOL 9: `cricketapp`
- **Location:** `react/cricketapp/`
- **ListofPlayers.js:** Filters players with score >= 70 using arrow function & map.
- **IndianPlayers.js:** Destructuring & Spread operator for merging `T20players` and `RanjiTrophy`.
- **App.js:** Renders components based on `flag` boolean condition.

---

### 7. HOL 10: `officespacerentalapp`
- **Location:** `react/officespacerentalapp/`
- **App.js:** Inline CSS rule displaying Rent in Red if below 60,000 and Green if above 60,000.

---

### 8. HOL 11: `eventexamplesapp`
- **Location:** `react/eventexamplesapp/`
- **CurrencyConvertor.js:** Form event handling for INR to EUR conversion.
- **App.js:** Increment/decrement counter, multiple method calls (`sayHello`), argument passing (`sayWelcome`), and synthetic event handling (`OnPress`).

---

### 9. HOL 12: `ticketbookingapp`
- **Location:** `react/ticketbookingapp/`
- **App.js:** Conditional rendering of `GuestPage` (browsing flight details) and `UserPage` (booking tickets) controlled by Login/Logout state toggle.

---

### 10. HOL 13: `bloggerapp`
- **Location:** `react/bloggerapp/`
- **App.js:** Implements conditional rendering to dynamically display `BookDetails`, `BlogDetails`, or `CourseDetails`.

---

## 🚀 Running Any Project Locally
Navigate into any project directory and start the React dev server:
```bash
cd react/<project_name>
npm start
```
