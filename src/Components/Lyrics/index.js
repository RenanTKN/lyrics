import React from "react";

export default ({ band, song, loading, lyrics }) =>
  lyrics ? (
    <div className="lyrics-container">
      <div className="lyrics justify-content-center">
        <pre>
          {lyrics !== "No lyrics found" && (
            <>
              <h5>
                {band} - {song}
              </h5>
              <hr />
            </>
          )}
          {lyrics}
        </pre>
      </div>
    </div>
  ) : loading ? (
    <div className="spinner mt-3">{loading}</div>
  ) : null;
