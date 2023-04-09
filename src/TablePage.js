import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./TablePage.module.css";
function TablePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    axios.get("https://crudcrud.com/api/14d6533fb19d48afa552b1b53a2fe84d/apiassignment")
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = event => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);
    const filteredData = Array.isArray(data) ? data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchText.toLowerCase())
    ) : [];
  

    setFilteredData(filteredData);
  };

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      // toggle sort direction if same column is clicked again
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // sort by new column
      setSortColumn(columnName);
      setSortDirection("asc");
    }

    const sortedData = [...filteredData].sort((a, b) => {
      const columnA = a[columnName];
      const columnB = b[columnName];

      if (columnA < columnB) {
        return sortDirection === "asc" ? -1 : 1;
      } else if (columnA > columnB) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });

    setFilteredData(sortedData);
  };

  return (
    <div>
      <h1 className={classes.gra}>Graphics Designer</h1>
      <div className={classes.search}>
      
      <input type="text" placeholder="filter" />
      <input type="text" placeholder="Type to Search" value={searchText} onChange={handleSearchChange} /></div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("first_name")}>First Name</th>
            <th onClick={() => handleSort("last_name")}>Last Name</th>
            <th onClick={() => handleSort("gender")}>Gender</th>
            <th onClick={() => handleSort("email")}>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
