import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3005/datas")
      .then((response) => {
        setDatas(response.data);
        console.log(response.data);
      })
      .catch((error) => alert("Data Yüklenemedi"));
  }, []);

  if (datas === null) return <h1>Loading</h1>;

  return (
    <>
      <div className="container">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Platform</th>
              <th scope="col">Identifier</th>
              <th scope="col">Agent</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.platform}</td>
                <td>{data.identifier}</td>
                <td>{data.agent}</td>
                <td>{data.status}</td>
                <td>{data.createdat}</td>
                <td>
                  <div className="d-flex gap-3">
                    <button className="btn btn-success rounded-3">Open</button>
                    <button className="btn btn-danger rounded-3">Del</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
