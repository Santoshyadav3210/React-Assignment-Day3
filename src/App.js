// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result)
      setData(result)
    }).catch((err) => {
      console.log(err)
    })
  }, []);


  return (
    <div className="App">
      <div className="Wrapper">

        <h1>Table Data</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>

          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}
export default App;
