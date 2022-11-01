import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';
import Error from './Pages/Error';
import Navbar from './Pages/Navbar';
import Description from './Pages/Description';
import Example from './Pages/Example';
import Users from './Pages/Users';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const getData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=120');
    setLoading(false);
    const data = await response.json();
    setUser(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
  const nPages = Math.ceil(user.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 1) {
      setCurrentPage(0);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="description" element={<Description />} />
            <Route path="example" element={<Example />} />
          </Route>
          <Route
            path="/users"
            element={
              <Users
                loading={loading}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                user={currentPosts}
                postsPerPage={postsPerPage}
                totalPosts={user.length}
                paginate={paginate}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
