import "./App.css";
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import input1 from "./input/input1";
import ubahWarna from "./useContext/context";
import { productTupp } from "./product/productTupp";
import Index from "./product/index";
import home from "./home/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="navv">
          <div className="menu">
            <li className="judul">
              <p className="">Tugas Modul 4</p>
              <p>Kelompok 44</p>
            </li>
            <li><a>
              <Link to="/home">
              Home
              </Link>
            </a></li>
            <li><a>
              <Link to="/input">
                Input
              </Link>
            </a></li>
            <li><a>
              <Link to="/Produk">
                Produk
              </Link>
            </a></li>
            <li><a>
              <Link to="/GantiBackground">
                Ganti Background
              </Link>
            </a></li>
            <li><a>
              <Link to="/Effect">
                Effect
              </Link>
            </a></li>
          </div>
        </header>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/input" exact component={input1} />
          <Route path="/Produk" exact component={productTupp} />
          <Route path="/GantiBackground" exact component={ubahWarna} />
          <Route path="/Effect" exact component={Index} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
