import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Form from "./Components/Form";
import Lyrics from "./Components/Lyrics";

function App() {
  const [song, setSong] = useState();
  const [band, setBand] = useState();
  const [lyrics, setLyrics] = useState();
  const [loading, setLoading] = useState();

  const handleSong = e => {
    setSong(normalize(e.target.value));
  };

  const handleBand = e => {
    setBand(normalize(e.target.value));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLyrics();
    setLoading(spinner);

    try {
      const lyricsResponse = await findLyrics(band, song);
      const data = await lyricsResponse.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
      } else {
        setLyrics(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const findLyrics = (band, song) => {
    return fetch(`https://api.lyrics.ovh/v1/${band}/${song}`);
  };

  const spinner = () => (
    <div className="spinner-grow text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const normalize = str => str.toUpperCase();

  return (
    <div>
      <Form
        song={song}
        handleSong={handleSong}
        handleBand={handleBand}
        handleSubmit={handleSubmit}
      />
      <Lyrics band={band} song={song} loading={loading} lyrics={lyrics} />
    </div>
  );
}

export default App;
