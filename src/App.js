import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Form from "./Components/Form";
import Lyrics from "./Components/Lyrics";

function App() {
  const [song, setSong] = useState("");
  const [band, setBand] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSong = (e) => {
    setSong(e.target.value.toUpperCase());
  };

  const handleBand = (e) => {
    setBand(e.target.value.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLyrics("");
    setLoading(true);

    try {
      const lyricsResponse = await findLyrics(band, song);
      const data = await lyricsResponse.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
        setTitle(`${band} - ${song}`.toUpperCase());
        setLoading(false);
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

  return (
    <div>
      <Form
        song={song}
        handleSong={handleSong}
        band={band}
        handleBand={handleBand}
        handleSubmit={handleSubmit}
      />
      <Lyrics title={title} loading={loading} lyrics={lyrics} />
    </div>
  );
}

export default App;
