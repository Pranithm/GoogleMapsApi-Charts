import React from 'react';
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

const Visuals = (props) => {
    console.log("chart is being called");
    console.log(props.labels);
    console.log(props.timeTaken);
    // console.log(durationTraffic);
    const data = {
        labels: props.labels,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Duration in traffic',
              data: props.timeTaken,
              backgroundColor: [
                "#2a71d0"
              ],
              borderColor: 'black',
              Color:'red',
              // you can set indiviual colors for each bar
              borderWidth: 1,
            }
        ]
    }

    let travelDetails = props.odDetails;
    return (
        
        <div style={{padding: "0px 35px"}}>
        {console.log("data")}
        <h2>Chart for below OD's</h2>
        <p>{`Origin Lat: ${travelDetails[0]}`}</p>
        <p>{`Origin Lon: ${travelDetails[1]}`}</p>
        <p>{`Destination Lat: ${travelDetails[2]}`}</p>
        <p>{`Destination Lon: ${travelDetails[3]}`}</p>
        <Line
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Estimated Time to travel"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
        <hr style={{margin: "15px 15px"}}></hr>
      </div>
      
    );
}

export default Visuals;