import React from "react";
import { useState } from "react";

function UpdateAndroid({ onUpdate }) {
  const [Slug, setSLug] = React.useState("");
  const [andriodPrimary, setandriodPrimary] = React.useState("");
  const [andriodfallback, setandriodfallback] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onUpdate({
      slug: Slug,
      android: {
        primary: andriodPrimary,
        fallback: andriodfallback,
      },
    });
  };

  const handleSLugChange = (event) => {
    setSLug(event.target.value);
  };

  const handleAndroidPrimaryChange = (event) => {
    setandriodPrimary(event.target.value);
  };
  const handleANDRoidFallbackChange = (event) => {
    setandriodfallback(event.target.value);
  };
  return (
    <div>
      <form style={{ width: "25em" }}>
        <div className="form-group">
          <label for="exampleInputEmail1" style={{ marginBottom: ".5em" }}>
            slug
          </label>
          <input
            type="text"
            onChange={handleSLugChange}
            className="form-control"
            placeholder="ex:sbadbs"
            required
          />
          <small
            id="emailHelp"
            style={{ marginBottom: ".5em" }}
            className="form-text text-muted"
          >
            Enter the Slug
          </small>
        </div>
        <div className="form-group">
          <label for="Android Primary">Adroid primary</label>
          <input
            type="url"
            onChange={handleAndroidPrimaryChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
            style={{ marginBottom: ".5em" }}
          />
        </div>
        <div className="form-group">
          <label for="Android Fallback">Adroid fallback</label>
          <input
            type="url"
            onChange={handleANDRoidFallbackChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
            style={{ marginBottom: "1em" }}
          />
        </div>
        <button
          type="onClick"
          onClick={handleClick}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateAndroid;
