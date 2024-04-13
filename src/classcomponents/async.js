import { useEffect, useState } from "react";

const AudioGallery = () => {
  const [audio, setAudio] = useState([]);
  const [audioCopy, setAudioCopy] = useState([]);
  const [lan, setLan] = useState(localStorage.getItem('audio_language') || 'en');

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(
          `https://prepod.manashakti.org/admin/backend/index.php/audio/getAudioGalleryFrontEnd/${lan}/15`
        );
        const res = await response.json();
        console.log("res: ", res.length, res);
        setAudio(res);
        setAudioCopy(res);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    apiCall();
  }, [lan]);

  const handleLanguage = (e) => {
    const lan = e.target.value;

    if (lan === "All") {
      localStorage.setItem('audio_language', lan);
      setAudioCopy(audio);
    } else if (lan === "English") {
      const enArr = audio.filter((el) => {
        return /[a-zA-Z]/.test(el.title);
      });
      enArr.length > 0 && setAudioCopy(enArr);
      console.log("english: ", enArr);
    } else if (lan === "Marathi") {
      const maArr = audio.filter((el) => {
        return /[\u0900-\u097F]/.test(el.title);
      });
      maArr.length > 0 && setAudioCopy(maArr);
      console.log("marathi: ", maArr);
    }
  };

  const handleChangeLan = () => {
    lan === "en" ? setLan("ma") : setLan("en");
  };

  return (
    <div>
      <h1>Audio Gallery Functional Component</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <select onChange={handleLanguage}>
          <option value="All">Select Language</option>
          <option value="English">English</option>
          <option value="Marathi">Marathi</option>
        </select>

        <button
          onClick={handleChangeLan}
          style={{
            border: "none",
            padding: "5px 10px",
            background: "#B71C1C",
            color: "white",
            borderRadius: "5px",
            fontWeight: "500",
          }}
        >
          {lan === "en" ? "English" : "Marathi"}
        </button>
      </div>

      {audioCopy.length > 0 &&
        audioCopy.map((el) => (
          <div key={el.audio_id}>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  );
};

export default AudioGallery;
