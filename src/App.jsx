import React from 'react'
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import { Main } from './pages/Main';
import { NewsPage } from './pages/NewsPage';


function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Main/>} />
        <Route path='posts/:id' element={<NewsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
