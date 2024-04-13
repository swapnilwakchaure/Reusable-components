import { useEffect, useState } from "react";
import styled from "styled-components";
const BASE_URL = "http://localhost:4000/api/participants_report/getall";

const Report = () => {
  // filter arrays
  const [eventArr, setEventArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // table data array
  const [report, setReport] = useState([]);

  // additional functionlity
  const [page, setPage] = useState(1);
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    getMaxDateLimit();

    
  }, []);

  useEffect(() => {
    // fetch(`${BASE_URL}?page=${page}`)
    //   .then((res) => res.json())
    //   .then((res) => setReport(res.data))
      //   .catch((error) => console.log('error: ', error))
    }, [page]);

  function getMaxDateLimit() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedMaxDate = `${yyyy}-${mm}-${dd}`;
    setMaxDate(formattedMaxDate);
  }

  return (
    <div>
      <h3>Participants Report</h3>

      <Filter>
        <select>
          <option>Select Events</option>
          <option>Holi</option>
          <option>Rangoli</option>
        </select>
        <select>
          <option>Select Location</option>
          <option>Mumbai</option>
          <option>Pune</option>
        </select>
        <input type="date" />
        <input type="date" max={maxDate} />
      </Filter>

      <Table border="1">
        <Thead>
          <Th>Full Name</Th>
          <Th>Age</Th>
          <Th>Gender</Th>
          <Th>Phone</Th>
          <Th>Email</Th>
          <Th>Address</Th>
          <Th>Event Name</Th>
          <Th>Event Date</Th>
          <Th>Event Location</Th>
        </Thead>
        {report.length > 0 &&
          report.map((el) => (
            <tbody key={el.participants_order_id}>
              <Td>
                {el.Participant.first_name} {el.Participant.last_name}
              </Td>
              <Td>{el.Participant.age}</Td>
              <Td>{el.Participant.gender}</Td>
              <Td>{el.Participant.mobile}</Td>
              <Td>{el.Participant.email}</Td>
              <Td>{el.Participant.address}</Td>
              <Td>{el.Event_Schedule.Event.title_en}</Td>
              <Td>{el.Event_Schedule.start_date}</Td>
              <Td>{el.Event_Schedule.venue_address}</Td>
            </tbody>
          ))}
      </Table>

      <Pagination>
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage((next) => next + 1)}>Next</Button>
      </Pagination>
    </div>
  );
};

export default Report;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Table = styled.table`
  text-align: center;
  width: 95%;
  margin: 20px auto;
`;

const Thead = styled.thead`
  text-align: center;
`;

const Th = styled.th`
  border: 1px solid #ddd;
`;

const Td = styled.td`
  border: 1px solid #ddd;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
`;
