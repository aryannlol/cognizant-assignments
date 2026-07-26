import React, { useState } from 'react';
import { BookDetails } from './Components/BookDetails';
import { BlogDetails } from './Components/BlogDetails';
import { CourseDetails } from './Components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  const renderContent = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Blogger App (Conditional Rendering)</h2>
      <button onClick={() => setView('book')}>Show Book</button>
      <button onClick={() => setView('blog')}>Show Blog</button>
      <button onClick={() => setView('course')}>Show Course</button>
      <hr />
      {renderContent()}
    </div>
  );
}

export default App;
