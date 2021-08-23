import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import MakePost from './components/MakePost';
import PostBody from './components/PostBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Social Media Display</h1>

          <Navbar />
          <MakePost />
          <PostBody />
       
          <Footer />
    </div>
  );
}

export default App;
