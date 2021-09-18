/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from "react";
import "./input.css";

export default function index() {
  const contoh = useState(false);
  console.log("[state]", contoh);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const submit = () => {
    let a =
      password == password1
        ? "Password dari Username " + user + " sama"
        : "Password yang dimasukkan berbeda";
    alert(a);
  };
  return (
    <div className="kotak">
      <div className="kotaktampil">
        {show && (
          <form onSubmit={submit}>
            <div className="subjudul">
              <p className="subjudul1">
                Silahkan Masukkan Data
              </p>
              <p className="subjudul2">
                (*input dengan useState)
              </p>
            </div>
            <label>Username</label>
            <input type="text" placeholder="username" value={user}
              onChange={(event) => setUser(event.target.value)}/>
            <br></br><br></br>
            <label>Password</label>
            <input type="password" required placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}/>
            <br></br><br></br>
            <label>Masukkan Password Lagi</label>
            <input type="password" required placeholder="Password"
              value={password1}
              onChange={(event) => setPassword1(event.target.value)}
            />
            <br></br><br></br>
            <input type="submit" value="Cek Hasil" className="cek"
              onChange={(event) => setPassword1(event.target.value)}
            />
            <br></br><br></br>
          </form>
        )}
      </div>
      <button className="Button tombol" onClick={() => setShow(!show)}>
        {show ? "Sembunyikan" : "Tampilkan"}
      </button>
    </div>
  );
}
