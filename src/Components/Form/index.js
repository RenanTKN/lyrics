import React from "react";

export default ({ song, handleSong, band, handleBand, handleSubmit }) => (
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
      value={song}
      onChange={handleSong}
    />
    <input
      type="text"
      className="form-control mb-2 mr-sm-2"
      id="band"
      name="band"
      placeholder="Band"
      value={band}
      onChange={handleBand}
    />
    <button type="submit" className="btn btn-primary mb-2">
      Search
    </button>
  </form>
);
