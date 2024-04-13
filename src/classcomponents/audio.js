import React, { Component } from "react";

class AudioGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: [],
      audioCopy: [],
    };
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  componentDidMount() {
    this.apiCall();
  }

  async apiCall() {
    try {
      const response = await fetch(
        `https://prepod.manashakti.org/admin/backend/index.php/audio/getAudioGalleryFrontEnd/ma/15`
      );
      const res = await response.json();
      this.setState({ audio: res, audioCopy: res });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  handleLanguage(e) {
    const lan = e.target.value;
    console.log('audio: ', this.state.audioCopy);

    if (lan === "All") {
      this.setState({ audioCopy: this.state.audio });
    } else if (lan === "English") {
      const enArr = this.state.audio.filter((el) => {
        return /[a-zA-Z]/.test(el.title);
      });
      this.setState({ audioCopy: enArr });
      console.log("english: ", enArr);
    } else if (lan === "Marathi") {
      const maArr = this.state.audio.filter((el) => {
        return /[\u0900-\u097F]/.test(el.title);
      });
      this.setState({ audioCopy: maArr });
      console.log("marathi: ", maArr);
    }
  }

  render() {
    return (
      <div>
        <h1>Audio Gallery Class Component</h1>

        <div>
          <select onChange={this.handleLanguage}>
            <option value="All">Select Language</option>
            <option value="English">English</option>
            <option value="Marathi">Marathi</option>
          </select>
        </div>

        {this.state.audioCopy.length > 0 &&
          this.state.audioCopy.map((el) => (
            <div key={el.audio_id}>
              <p>{el.title}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default AudioGallery;
