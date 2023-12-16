import React, { useState, useEffect } from 'react';

const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Chain</th>
        <th>Token</th>
        <th>Total Supply</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>Chain Market Cap</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.chain}</td>
          <td>{item.token}</td>
          <td>{item.totalsupply.toLocaleString()}</td>
          <td>${item.price.toLocaleString()}</td>
          <td>${item.marketcap.toLocaleString()}</td>
          <td>${item.chainmc.toLocaleString()}</td>
          <td>{(item.percentage * 100).toFixed(2)}%</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const GitHubTable = ({ repoUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(repoUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json instanceof Array ? json : [json]); // Handle if JSON is an object instead of an array
      } catch (error) {
        console.error("Could not fetch data from repository:", error);
      }
    };

    fetchData();
  }, [repoUrl]);

  return <Table data={data} />;
};

export default GitHubTable;
