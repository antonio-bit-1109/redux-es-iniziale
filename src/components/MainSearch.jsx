import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, setJobs } from "../redux/reducers/queryReducer";

const MainSearch = () => {
    const query = useSelector((state) => state.queryState.query);
    const dispatch = useDispatch();

    /*  const [jobs, setJobs] = useState([]); */
    const jobs = useSelector((state) => state.queryState.jobs);

    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    const handleChange = (e) => {
        dispatch(setQuery(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const { data } = await response.json();
                dispatch(setJobs(data));
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1 className="display-1">Remote Jobs Search</h1>
                </Col>
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="type and press Enter"
                        />
                    </Form>
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default MainSearch;
