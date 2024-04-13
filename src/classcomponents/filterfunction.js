import { useEffect, useState } from "react";
import styled from "styled-components";

const FilterFunction = () => {
  const [topic, setTopic] = useState([]);
  const [event, setEvent] = useState([]);
  const [images, setImages] = useState([]);
  const [year, setYear] = useState('All');
  const [topicId, setTopicId] = useState(0);
  const [eventId, setEventId] = useState(0);
  const [topicDisable, setTopicDisable] = useState(false);
  const [eventDisable, setEventDisable] = useState(false);

  useEffect(() => {
    function getTopic() {
      fetch("https://prepod.manashakti.org/admin/backend/index.php/getAllTopics")
        .then((res) => res.json())
        .then((data) => setTopic(data))
        .catch((error) => console.error("Error:", error));
    }
    function getEvent() {
      fetch("https://prepod.manashakti.org/admin/backend/index.php/photo/getEventList")
        .then((res) => res.json())
        .then((data) => setEvent(data))
        .catch((error) => console.error("Error:", error));
    }

    getTopic();
    getEvent();
  }, []);

  useEffect(() => {
    const limit = 9;
    const language = 'en';
    function getImages() {
        fetch(`https://prepod.manashakti.org/admin/backend/index.php/photo/getPhotoGalleryFrontEnd/${language}/${limit}/${topicId}/${year}/${eventId}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log('images: ', data);
            setImages(data);
           })
          .catch((error) => console.error("Error:", error));
    }
    getImages();
  }, [topicId, eventId, year]);

  const handleResetFilter = () => {
    setTopicId('');
    setEventId('');
    setYear('All');
    setTopicDisable(false);
    setEventDisable(false);
  }

  return (
    <div>
      <h5>Filter Functional Component</h5>

      <SelectBox>
        <Select disabled={topicDisable} value={topicId} onChange={(e) => e.target.value ? (setEventDisable(true), setTopicId(e.target.value), setEventId(0)) : setEventDisable(false)}>
          <option value=''>Select Topic</option>
          {topic.length > 0 &&
            topic.map((el) => {
              return <option value={el.value}>{el.label}</option>
            })}
        </Select>
        <Select disabled={eventDisable} value={eventId} onChange={(e) => e.target.value ? (setTopicDisable(true), setEventId(e.target.value), setTopicId(0)) : setTopicDisable(false)}>
          <option value=''>Select Event</option>
          {event.length > 0 &&
            event.map((el) => {
              return <option value={el.event_id}>{el.title}</option>;
            })}
        </Select>
        <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value='All'>Select Year</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
        </Select>
        <Button onClick={handleResetFilter}>Reset</Button>
      </SelectBox>

      <Main>
        {images.length > 0 && images.map((el) => {
          return (
            <div key={el.photo_id}>
              <Img src={el.image_url} alt='...' />
            </div>
          )
        })}
      </Main>
    </div>
  );
};

export default FilterFunction;


const SelectBox = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Select = styled.select`
  width: 20%;
`

const Main = styled.div`
  width: 90%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Button = styled.button`
  background: #9d0b0e;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 5px;
  border: none;
  letter-spacing: 1px;
`