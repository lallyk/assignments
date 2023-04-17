import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const { cases, deaths, recovered } = res.data;
      setData({
        labels: Object.keys(cases),
        datasets: [
          {
            label: "Confirmed Cases",
            data: Object.values(cases),
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
          },
          {
            label: "Deaths",
            data: Object.values(deaths),
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1,
          },
          {
            label: "Recovered",
            data: Object.values(recovered),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
};

export default Chart;