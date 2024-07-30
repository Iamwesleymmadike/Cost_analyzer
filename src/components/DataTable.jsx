import React, { useState, useEffect } from 'react';
import star from '../assets/Star.svg';
import unclicked from '../assets/StarUnclicked.svg';
import bookmarked from '../assets/StarClicked.svg';

const DataTable = () => {
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

  const handleBookmarkToggle = (item) => {
    if (bookmarks.includes(item.id)) {
      setBookmarks(bookmarks.filter(bookmarkId => bookmarkId !== item.id));
    } else {
      setBookmarks([...bookmarks, item.id]);
    }
  };

  const toggleShowBookmarksOnly = () => {
    setShowBookmarksOnly(!showBookmarksOnly);
  };

  const displayedItems = showBookmarksOnly
    ? items.filter(item => bookmarks.includes(item.id))
    : items;

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Warehouse</th>
            <th>Usage</th>
            <th>Cost</th>
            <th onClick={toggleShowBookmarksOnly}>
              <img src={star} alt="Toggle Bookmarks"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((row, index) => (
            <tr key={index} className={row.starred ? "starred" : ""}>
              <td>{row.warehouse}</td>
              <td>{row.usage}</td>
              <td>{row.cost}</td>
              <td onClick={() => handleBookmarkToggle(row)}>
                {bookmarks.includes(row.id)
                  ? <img src={bookmarked} alt="Bookmarked"/>
                  : <img src={unclicked} alt="Unclicked"/>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;