import React from "react";
import mug1 from "../asset/image/botol1.jpeg";
import mug2 from "../asset/image/botol2.jpeg";
import mug3 from "../asset/image/botol3.jpeg";
import logo from "../asset/image/logo512.png";

const list2 = (props) => {
  const { isNameBold } = props;

  const data = [
    {
      name: "Mug Classic",
      pcs: "10",
      harga: "20.000",
      image: mug1,
    },
    {
      name: "Mug Basic",
      pcs: "20",
      harga: "15.000",
      image: mug2,
    },
    {
      name: "Mug Magic",
      pcs: "5",
      harga: "54.000",
      image: mug3,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid red",
        marginTop: "1.5em",
        Width: "100%",
      }}
    >
      {data.map(({ name, pcs, harga, image }) => (
        <div style={{}}>
          <div
            style={{
              flex: "1",
              margin: "10px",
              fontFamily: "poppins",
            }}
          >
            <div
              style={{
                padding: "10px",
                boxShadow: "1px 1px 5px 2px grey",
                backgroundColor: "#f5f5f5f2",
              }}
              className="group relative shadow"
            >
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={image}
                  alt="Gambar"
                  style={{
                    padding: "10px",
                    boxSizing: "border-box",
                    width: "400px",
                    height: "400px",
                    marginTop: "1.5em",
                  }}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div
                style={{ padding: "10px" }}
                className="mt-4 flex justify-between"
              >
                <div>
                  <h3
                    className={`${
                      isNameBold ? "font-bold " : ""
                    } text-sm text-gray-700`}
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Rp. {harga}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Tersisa : {pcs}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default list2;
