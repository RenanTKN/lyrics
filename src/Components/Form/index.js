import React from "react";

export default ({ handleSong, handleBand, handleSubmit }) => (
  <form
    className="form-inline justify-content-center mt-2"
    onSubmit={handleSubmit}
  >
    <input
      type="text"
      className="form-control mb-2 mr-sm-2"
      id="song"
      name="song"
      placeholder="Song"
      onChange={handleSong}
    />
    <input
      type="text"
      className="form-control mb-2 mr-sm-2"
      id="band"
      name="band"
      placeholder="Band"
      onChange={handleBand}
    />
    <button type="submit" className="btn btn-primary mb-2">
      Search
    </button>
  </form>
);
