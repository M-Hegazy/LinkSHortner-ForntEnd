import { useState } from "react";
import React from "react";
import Create from "./components/create_slug";
import Update from "./components/update_slug";
import Get from "./components/get_slug";
import Navbar from "./components/navbar";

import Footer from "./components/footer";
const axios = require("axios");

const App = () => {
  const [comp, setcomp] = useState("Create");

  const create_new_slug = (Data) => {
    console.log(Data);

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/shortlinks",
      data: Data,
    });
  };
  const onUpdate = (items) => {
    console.log(items);
    axios({
      method: "PUT",
      url: "http://127.0.0.1:5000/shortlinks/" + items.slug,
      data: items,
    });
  };
  const onRedirect = (url) => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/" + url.url,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // axios
  //   .get("/shortlinks", {
  //     params: {
  //       ID: 12345,
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  return (
    <>
      <Navbar />
      <div
        className="cardContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#E3AFED",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          class="card"
          style={{
            width: "30rem",
            height: "47rem",
            marginTop: "3em",
            border: "solid",
            borderWidth: "4px",
          }}
        >
          <Get onRedirect={onRedirect} />
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              type="button"
              onClick={() => setcomp("Create")}
              className="btn btn-outline-primary"
            >
              Create Slug
            </button>
            <button
              type="button"
              onClick={() => setcomp("Update")}
              className="btn btn-outline-primary"
            >
              Update Slug
            </button>
          </div>

          {comp === "Create" && <Create onSubmitt={create_new_slug} />}

          <div style={{ display: "flex", justifyContent: "center" }}>
            {comp === "Update" && <Update onUpdate={onUpdate} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
