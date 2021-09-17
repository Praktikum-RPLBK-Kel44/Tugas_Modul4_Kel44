import React from "react";
import simpan1 from "../asset/image/makan.jpeg";
import simpan2 from "../asset/image/makan3.jpeg";
import simpan3 from "../asset/image/makan2.jpeg";

const list2 = (props) => {
  const { isNameBold } = props;

  const data = [
    {
      name: "Termos",
      pcs: "30",
      harga: "34.000",
      image: simpan1,
    },
    {
      name: "Termos Mini",
      pcs: "12",
      harga: "28.000",
      image: simpan2,
    },
    {
      name: "Penyimpan Makanan",
      pcs: "5",
      harga: "24.000",
      image: simpan3,
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
