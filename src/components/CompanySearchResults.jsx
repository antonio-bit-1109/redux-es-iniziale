import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLavoretti, setPreferiti } from "../redux/reducers/queryReducer";
import ListComponent from "./ListComponent";

const CompanySearchResults = () => {
    /* const [jobs, setJobs] = useState([]); */
    const dispatch = useDispatch();
    const params = useParams();
    const lavoretti = useSelector((state) => state.queryState.lavoretti);
    console.log(lavoretti);

    const preferiti = useSelector((state) => state.queryState.preferiti);
    console.log(preferiti);

    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    useEffect(() => {
        getJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getJobs = async () => {
        try {
            const response = await fetch(baseEndpoint + params.company);
            if (response.ok) {
                const { data } = await response.json();
                dispatch(setLavoretti(data));
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
                <Col className="my-3">
                    <h1 className="display-4">Job posting for: {params.company}</h1>
                    {lavoretti.map((jobData) => (
                        <div key={jobData._id}>
                            <Job data={jobData} />
                            <button
                                onClick={() => {
                                    dispatch(setPreferiti(jobData.company_name));
                                    console.log(preferiti);
                                }}
                            >
                                Salva Nei preferiti
                            </button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <ListComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default CompanySearchResults;
