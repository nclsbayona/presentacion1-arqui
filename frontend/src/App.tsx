import React from 'react';
import './App.css';
import Main from './components/Main';
import Get from './components/Get';
import GetAll from './components/GetAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <body>
          <Routes>
            <Route index path="/api" element={<Main />} />
            <Route path="/getUserById" element={<Get />} />
            <Route path="/getAllUsers" element={<GetAll />} />
            <Route path="/postUser" element={<Post />} />
          </Routes>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
