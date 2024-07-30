import React, { useState, useEffect } from 'react';
import star from '../assets/Star.svg';
import unclicked from '../assets/StarUnclicked.svg';
import bookmarked from '../assets/StarClicked.svg';

const Top10Costs = () => {
  const [items, setItems] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  useEffect(() => {
    fetch('https://bitbucket.org/terragonengineering/costanalyzer-backend/src/IW-30/') // Replace with your backend API
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns data in a structure similar to the initial example
        // Adjust the parsing of `data` as needed based on the actual API response
        setItems(data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const displayedItems = showBookmarksOnly
    ? items.filter(item => bookmarks.includes(item.id))
    : items;

    return (
    <div className="top-10-costs">
        <h3>Top 10 Costs</h3>
      <div className='cumulatives'>
        <table>
            <tr><td>Cumulative Usage:</td><td>13,931.75 GB</td></tr>
            <tr><td>Cumulative Amount:</td><td> $27,966.27</td></tr>
        </table>
      </div>
      <div className="top10CostsTable">
        <table className="data-table">
          <thead>
            <tr>
              <th>Warehouse</th>
              <th>Usage</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((row, index) => (
              <tr key={index} className={row.starred ? "starred" : ""}>
                <td>{row.warehouse}</td>
                <td>{row.usage}</td>
                <td>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Top10Costs;
