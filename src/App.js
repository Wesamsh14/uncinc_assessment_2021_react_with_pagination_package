import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Casts from './components/Casts';

function App() {
  const styles = {
    loading: {
      margin: 'auto',
      width: 'fit-content'
    }
  };
  const [casts, setCasts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const castsPerPage = 6;
  const pagesVisited = pageNumber * castsPerPage;
  const castsDisplay = casts.slice(pagesVisited, pagesVisited + castsPerPage);
  const pageCount = Math.ceil(casts.length / castsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const getCasts = async () => {
      const castsData = await axios.get('https://thronesapi.com/api/v2/Characters');
      setCasts(castsData.data);
    };
    getCasts();
  }, []);
  return (
    <div className="App">
      <h1>Game of thrones casts</h1>
      {casts && casts.length > 0
        ? <Casts casts={castsDisplay} pageCount={pageCount} changePage={changePage} />
        : (
          <div style={styles.loading}>
            <ReactLoading type="spin" color="white" />
          </div>
        )}
    </div>
  );
}

export default App;
