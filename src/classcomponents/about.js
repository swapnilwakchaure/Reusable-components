import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalData: [],
      arrData: [],
      selectLang: "All",
      inputVal: "",
      reset: false
    };

    this.isEnglishTitle = this.isEnglishTitle.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          originalData: res,
          arrData: res,
        });
      })
      .catch((error) => console.log("error: ", error));
  }

  componentDidUpdate(prevProps, preState) {
    if (preState.selectLang !== this.state.selectLang) {
      let filterData;

      if (this.state.selectLang === "Hindi") {
        filterData = this.state.originalData.filter(
          (el) => !this.isEnglishTitle(el.title)
        );
      } else if (this.state.selectLang === "English") {
        filterData = this.state.originalData.filter((el) =>
          this.isEnglishTitle(el.title)
        );
      } else {
        filterData = this.state.originalData;
      }

      this.setState({
        arrData: filterData,
      });
    }

    if (this.state.reset) {
      this.setState({ inputVal: "" });
    }
  }

  isEnglishTitle(title) {
    return /[a-zA-A]/.test(title);
  }

  handleSelectChange(e) {
    this.setState({
      selectLang: e.target.value,
    });
  }

  handleChange(e) {
    console.log('input: ',e.target.value);
  }

  handleReset() {
    this.setState({ reset: true });
    // this.setState({ inputVal: "" });
  }

  render() {
    return (
      <div>
        <h1>About Page using class components</h1>

        <br />

        <select onChange={this.handleSelectChange}>
          <option value="All">Select Language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>

        {this.state.arrData.length > 0 &&
          this.state.arrData.map((el) => (
            <div key={el.audio_id}>{el.title}</div>
          ))}

        <br />

        <div>
          <input type="text" placeholder="searh here" onChange={this.handleChange} />
          <button onClick={this.handleReset}>*</button>
        </div>
      </div>
    );
  }
}

export default About;
