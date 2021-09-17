import "./App.css";
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import input1 from "./input/input1";
import ubahWarna from "./useContext/context";
import { productTupp } from "./product/productTupp";
import Index from "./product/index";
import home from "./home/home";
import Index1 from "./useContext/index";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="navv">
          <div className="title" style={{ marginLeft: "5em" }}>
            <p>Tugas Modul 4</p>
          </div>
          <nav
            style={{
              float: "right",
              position: "relative",
              bottom: "2.5em",
              marginRight: "5em",
            }}
            className="right"
          >
            <Link className="text" to="/home">
              Home
            </Link>
            {/* <Link className="text" to="/Test">
              Test
            </Link> */}
            <Link className="text" to="/input">
              Input
            </Link>
            <Link className="text" to="/Produk">
              Produk
            </Link>
            <Link className="text navtext2" to="/GantiBackground">
              Ganti Background
            </Link>
            <Link className="text" to="/Effect">
              Effect
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/home" exact component={home} />
          {/* <Route path="/test" exact component={Index1} /> */}
          <Route path="/input" exact component={input1} />
          <Route path="/Produk" exact component={productTupp} />
          <Route path="/GantiBackground" exact component={ubahWarna} />
          <Route path="/Effect" exact component={Index} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
