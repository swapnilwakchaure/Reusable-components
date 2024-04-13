import React, { Component } from "react";
import './class.css';

class FilterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: [],
      event: [],
      images: [],
      year: 'All',
      topicId: 0,
      eventId: 0,
      topicDisable: false,
      eventDisable: false
    };
  }

  componentDidMount() {
    this.getTopic();
    this.getEvent();
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topicId !== this.state.topicId || prevState.eventId !== this.state.eventId || prevState.year !== this.state.year) {
      this.getImages();
    }
  }

  getTopic() {
    fetch("https://prepod.manashakti.org/admin/backend/index.php/getAllTopics")
      .then((res) => res.json())
      .then((data) => this.setState({ topic: data }))
      .catch((error) => console.error("Error:", error));
  }

  getEvent() {
    fetch("https://prepod.manashakti.org/admin/backend/index.php/photo/getEventList")
      .then((res) => res.json())
      .then((data) => this.setState({ event: data }))
      .catch((error) => console.error("Error:", error));
  }

  getImages() {
    const limit = 9;
    const language = 'en';
    fetch(`https://prepod.manashakti.org/admin/backend/index.php/photo/getPhotoGalleryFrontEnd/${language}/${limit}/${this.state.topicId}/${this.state.year}/${this.state.eventId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ images: data });
      })
      .catch((error) => console.error("Error:", error));
  }

  handleResetFilter = () => {
    this.setState({
      topicId: '',
      eventId: '',
      year: 'All',
      topicDisable: false,
      eventDisable: false
    });
  }

  render() {
    const { topic, event, images, year, topicId, eventId, topicDisable, eventDisable } = this.state;

    return (
      <div>
        <h5>Filter Functional Component</h5>
  
        <div className="selectbox">
          <select className="select" disabled={topicDisable} value={topicId} onChange={(e) => e.target.value ? (this.setState({ eventDisable: true, topicId: e.target.value, eventId: 0 })) : this.setState({ eventDisable: false })}>
            <option value=''>Select Topic</option>
            {topic.length > 0 &&
              topic.map((el) => {
                return <option key={el.value} value={el.value}>{el.label}</option>
              })}
          </select>
          <select className="select" disabled={eventDisable} value={eventId} onChange={(e) => e.target.value ? (this.setState({ topicDisable: true, eventId: e.target.value, topicId: 0 })) : this.setState({ topicDisable: false })}>
            <option value=''>Select Event</option>
            {event.length > 0 &&
              event.map((el) => {
                return <option key={el.event_id} value={el.event_id}>{el.title}</option>;
              })}
          </select>
          <select className="select" value={year} onChange={(e) => this.setState({ year: e.target.value })}>
              <option value='All'>Select Year</option>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
          </select>
          <button className="button" onClick={this.handleResetFilter}>Reset</button>
        </div>
  
        <div className="main">
          {images.length > 0 && images.map((el) => {
            return (
              <div key={el.photo_id}>
                <img className="image" src={el.image_url} alt='...' />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default FilterClass;
