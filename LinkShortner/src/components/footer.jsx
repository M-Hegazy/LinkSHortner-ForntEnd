import React from "react";
const footer = () => {
  return (
    <>
      <div
        className="cont"
        style={{
          backgroundColor: "#381842",
          color: "white",
          paddingTop: "3em",
        }}
      >
        <div
          class="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div class="col-3">
            <div class="row">
              <p>E-mail</p>
            </div>
            <div class="row">
              <p>Mouradhegazy95@gmail.com</p>
            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <p>University</p>
            </div>
            <div class="row">
              <p>The British University in Egypt</p>
            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <p>Graduation Year</p>
            </div>
            <div class="row">
              <p>2018</p>
            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <p>Military service</p>
            </div>
            <div class="row">
              <p>Completed</p>
            </div>
          </div>
        </div>

        {/* <div className="email-cont">
          <span>E-mail</span>
          <p style={{ margin: "2em" }}> Mouradhegazy95@gmail.com</p>
        </div>
        <div className="title-cont">
          <span>title</span>
          <p style={{ margin: "2em" }}>Junior software engineer</p>
        </div>
        <div className="Grad-cont">
          <span>Graduation Year</span>
          <p style={{ margin: "2em" }}>2018</p>
        </div>
        <div className="uni-cont">
          <span>University</span>
          <p style={{ margin: "2em" }}>The British University in Egypt</p>
        </div> */}
      </div>
    </>
  );
};

export default footer;
