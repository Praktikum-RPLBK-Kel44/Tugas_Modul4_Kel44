import { React } from "react";
import reactDom from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../App.css";
import lis1 from "../card/list1";
import lis2 from "../card/list2";
import lis3 from "../card/list3";

export const productTupp = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="content">
          <h1>Tupperware</h1>
          <Link className="text" to="/gelas">
            Gelas
          </Link>
          <Link className="text navtext2" to="/penyimpan">
            Penyimpan
          </Link>
        </div>
        <Switch>
          <Route path="/makanan" exact component={lis1} />
          <Route path="/gelas" exact component={lis2} />
          <Route path="/penyimpan" exact component={lis3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
