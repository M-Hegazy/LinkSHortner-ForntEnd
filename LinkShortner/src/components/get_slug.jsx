import React from "react";

function Get_slug({ onRedirect }) {
  const [URInpt, setURLInput] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    onRedirect({
      url: URInpt,
    });
  };

  const handleinputChange = (event) => {
    setURLInput(event.target.value);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={{ width: "30em", margin: "1em" }}>
          <div className="form-group">
            <label for="enter the short URL ">Search For Your Links</label>
            <input
              type="url"
              className="form-control"
              placeholder="ex: https://127.0.0.1:5000/wrjdeb"
              onChange={handleinputChange}
            />
          </div>

          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-primary"
            style={{ margin: "1em" }}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Get_slug;
