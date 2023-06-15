import React, { useState, useEffect } from 'react';
import jsonData from './data.json';

const CommitTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set the JSON data directly from the imported file
    setData(Object.entries(jsonData).sort((a, b) => b[1] - a[1]));
  }, []);

  return (
    <div>
      <h1>Commit Table</h1>
      <table>
        <thead>
          <tr>
            <th>Committers</th>
            <th>Number of Commits</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([committer, commits], index) => (
            <tr key={index}>
              <td>{committer}</td>
              <td>{commits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitTable;

