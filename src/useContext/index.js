import { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState([]);

  // dipanggil hanya sekali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("[ini data]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleButton = (props) => {
  //   alert("Hai ini namanya");
  // };
  // const {value} = props;
  const data1 = [
    { Nama: "Randi", Nim: "21120118130069" },
    { Nama: "Randi", Nim: "21120118130069" },
    { Nama: "Randi", Nim: "21120118130069" },
  ];
  const click = (res) => {
    alert("nama " + res.nama);
  };
  return (
    <div
      style={{
        display: "grid",
        // flexWrap: "wrap",
        gridTemplateColumns: "25% 25% 25%  25% ",
        justifyContent: "space-around",
        marginTop: "1.5em",
        Width: "100%",
      }}
    >
      <div>
        {data1.map((res) => (
          <div>
            <h1>Nama : {res.Nama}</h1>
            <p>Nim : {res.Nim}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
