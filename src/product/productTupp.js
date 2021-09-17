import { React } from "react";
import reactDom from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../App.css";
import lis1 from "../card/list1";
import lis2 from "../card/list2";
import lis3 from "../card/list3";
// import supra from "../asset/image/SupraGR201.jpg";
// import supraY from "../asset/image/SupraY.jpg";
// import supraW from "../asset/image/supraW.jpg";
// import logo from "../asset/image/logo512.png";

export const productTupp = () => {
  // const data = [
  //   {
  //     name: "Randi Nur Ardianto",
  //     nim: "21120118130069",
  //     kelompok: "20",
  //     image: logo,
  //   },
  //   {
  //     name: "Teddy Anggi",
  //     nim: "21120115130055",
  //     kelompok: "20",
  //     image: supra,
  //   },
  //   {
  //     name: "Maba 21",
  //     nim: "21120121130069",
  //     kelompok: "30",
  //     image: supraY,
  //   },
  //   {
  //     name: "Maba 21",
  //     nim: "21120121130055",
  //     kelompok: "40",
  //     image: supraW,
  //   },
  // ];
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
