import React, { useState, useEffect, useMemo  } from "react";
import {InfluxDB} from '@influxdata/influxdb-client-browser';
import RealTime from "./RealTime";
import { useLocation } from "react-router-dom";



const token =  "H417NO73jCvZXl9cInFHAjZp1v8fq2A3GcqENXMC2YCekgfmKlywL2qDcbSjmWg5BVb8nuC61R9lxVhYMscZLQ==";
const org = "esi-sna";
const bucket = "test";
const url = "http://localhost:8086";
// |> aggregateWindow(every: 1s, fn: last, createEmpty: false)   |> range(start: -4s)   |> yield(name: "last")



// let query = `from(bucket: "ecg")
// |> range(start: -100h)
// |> filter(fn: (r) => r["_measurement"] == "ecg")
// |> filter(fn: (r) => r["_field"] == "value")
// |> filter(fn: (r) => r["patient_id"] == "p2")
// |>last()
//   `;

const  GetEcg = (props) => {
const [data, setData] = useState([]);
const [bp, setBp] = useState();
const [temp, setTemp] = useState();



const [result, setResult] = useState([]);
const location = useLocation();
const deviceKey=location.state.NumDeMachine
console.log("devece key from ... to getdata", deviceKey)
var ecgF = []
let query = `from(bucket: "ecg")
|> range(start: -15h)
|> filter(fn: (r) => r["_measurement"] == "ecg")
|> filter(fn: (r) => r["_field"] == "record")
|> filter(fn: (r) => r["patient_id"] == "${deviceKey}")
|>last()
  `;

  let querybp = `from(bucket: "ecg")
  |> range(start: -20h)
  |> filter(fn: (r) => r["_measurement"] == "bp")
  |> filter(fn: (r) => r["_field"] == "record")
  |> filter(fn: (r) => r["patient_id"] == "${deviceKey}")
  |>last()
    `;
  
    let querytemp = `from(bucket: "ecg")
    |> range(start: -20h)
    |> filter(fn: (r) => r["_measurement"] == "temp")
    |> filter(fn: (r) => r["_field"] == "record")
    |> filter(fn: (r) => r["patient_id"] == "${deviceKey}")
    |>last()
      `;

useEffect(() => {
    let res = [];
    let bps = []
    let temps =[]
    const influxQuery = async () => {
      //create InfluxDB client
      const queryApi = await new InfluxDB({url:"http://localhost:8086", token:"H417NO73jCvZXl9cInFHAjZp1v8fq2A3GcqENXMC2YCekgfmKlywL2qDcbSjmWg5BVb8nuC61R9lxVhYMscZLQ==" }).getQueryApi("esi-sba");
      //make query
      await queryApi.queryRows(query, {
        next(row, tableMeta) {
        
          const o = tableMeta.toObject(row);
         //push rows from query into an array object
          res.push(o);

        },

        complete() {
          let now = new Date()

            
          for(let i = 0; i < res.length; i++) {
            var row = res[i]._value.split('|')
            // console.log("type is ",type[1])
            
            // fréquence ecg 

            var tab = row[0].substr(1,row[0].length-2)

            // type of ecg
            var result = row[1].split(',')

            // var type = result[0]
            // var confidence = result[1]

            // console.log('tab is ', tab)
            tab = tab.split(',')
            for(let j=100; j<tab.length-100; j++){
            let point = {}
            point["x"] = res[i]._time
            point["y"] = tab[j]
            ecgF.push(point)
            
            }
          }  

        
          // const interval = setInterval(() => {
          setData(ecgF);
          // console.log("data from getEcg", data)
          setResult(result)

        // }, 1000)
          // console.log("last data", data)     
        //   console.log("last data", ecgF)
        // console.log("check res every 1s", data)
        // return () => {
        //   clearInterval(interval)
      
        // }
        },
        // }, 2000)

        error(error) {
          console.log("query failed- ", error);
        }
      });
      // blood pressur querry

      await queryApi.queryRows(querybp, {
        next(row, tableMeta) {
        
          const bp = tableMeta.toObject(row);
          bps.push(bp);
          // setBp()
          // console.log('bp from get data', bps)

        },
        complete() {
          let now = new Date()

            
          for(let i = 0; i < bps.length; i++) {
            var bp_value = bps[i]._value  
            bp_value = bp_value.substring(1,bp_value.length-1)
            // console.log("bppp", row)           

          
          }  
          setBp(bp_value)
        },
        

      

        error(error) {
          console.log("query failed- ", error);
        }
      });

      await queryApi.queryRows(querytemp, {
        next(row, tableMeta) {
        
          const temp = tableMeta.toObject(row);
          temps.push(temp);
          // setBp()
          // console.log('bp from get data', bps)

        },
        complete() {
          let now = new Date()

            
          for(let i = 0; i < temps.length; i++) {
            var temp_value = temps[i]._value  
            // console.log("bppp", row)           

          
          }  
          setTemp(temp_value)
        },
        

      

        error(error) {
          console.log("query failed- ", error);
        }
      });
     
    };
    const intervalQ = setInterval( () => {
      influxQuery();
    },1000)
    return () =>{
      clearInterval(intervalQ)
    }

},[data, result, bp, temp]);

return (
 <div >
    <RealTime id='chart-1' data={data } result= {result} bp={bp} temp={temp}/>
  </div> 
)
}

export default GetEcg

