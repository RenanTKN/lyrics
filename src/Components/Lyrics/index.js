import React from "react";

export default ({ title, loading, lyrics }) =>
  loading || lyrics.length > 0 ? (
    <div className="lyrics-container">
      <div className="lyrics justify-content-center">
        <div className="lyrics-content">
          {loading ? (
            <div className="spinner-grow text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <pre>
              {lyrics !== "No lyrics found" && (
                <>
                  <h5>{title}</h5>
                  <hr />
                  {lyrics}
                </>
              )}
            </pre>
          )}
        </div>
      </div>
    </div>
  ) : null;
