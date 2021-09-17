/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from "react";
import "./input.css";

export default function index() {
  // const [count, setCount] = useState(0);
  // function change() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // console.log(change);
  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={change}>change</button>
  //   </>
  // );
  const contoh = useState(false);
  console.log("[state]", contoh);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const submit = () => {
    let a =
      password == password1
        ? "Username " + user + " Berhasil dibuat"
        : "Password Tidak Valid";
    alert(a);
  };
  return (
    <div
      style={{
        textAlign: "center",
        height: "89vh",
        overflow: "hidden",
        width: "99.85%",
      }}
      className="container"
    >
      {show && (
        <form
          style={{
            position: "relative",
            top: "11em",
            boxSizing: "border-box",
            width: "40%",
            left: "30vw",
            backgroundColor: "#f8f8",
            borderRadius: "20px",
            padding: "20px",
          }}
          onSubmit={submit}
        >
          <div className="">
            <p
              style={{
                textAlign: "center",
                position: "relative",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              input with useState
            </p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                className="form"
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                required
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
                required
                placeholder="password"
                size="50"
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
            <div>
              <input
                type="submit"
                placeholder="password"
                size="50"
                value="Submit"
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
          </div>
        </form>
      )}
      <button
        style={{
          padding: "5px 30px 5px 30px",
          borderRadius: "5px",
          position: "relative",
          top: "20em",
        }}
        className="Button"
        onClick={() => setShow(!show)}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}
