import React from "react";

function Updateios({ onUpdate }) {
  const [Slug, setSLug] = React.useState("");
  const [IosPrimary, setIosPrimary] = React.useState("");
  const [IosFallback, setIosFallback] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onUpdate({
      slug: Slug,
      ios: {
        primary: IosPrimary,
        fallback: IosFallback,
      },
    });
  };

  const handleSLugChange = (event) => {
    setSLug(event.target.value);
  };
  const handleIosPrimaryChange = (event) => {
    setIosPrimary(event.target.value);
  };
  const handleIOSFallbckChange = (event) => {
    setIosFallback(event.target.value);
  };
  return (
    <div>
      <form style={{ width: "25em" }}>
        <div className="form-group">
          <label style={{ marginBottom: ".5em" }} for="exampleInputEmail1">
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
          <label for="Ios primary">IOS primary</label>
          <input
            type="url"
            onChange={handleIosPrimaryChange}
            className="form-control"
            placeholder="ex: http://localhost:3000/"
            required
            style={{ marginBottom: ".5em" }}
          />
        </div>
        <div className="form-group">
          <label for="Ios fallback">IOS fallback</label>
          <input
            type="url"
            onChange={handleIOSFallbckChange}
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

export default Updateios;
