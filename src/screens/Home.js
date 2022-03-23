import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {

    const [ movies, setMovies ] = useState({})

    const getData = async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
        setMovies(data.results)
    }


    useEffect(() =>{
        getData()
    }, [])

    return (
        <Container>
            <Row>
            {movies.map(movie => (
                <Col className={`m-2`}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title.slice(0, 15)} ...</Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0, 80)} ...
                                </Card.Text>
                                <Button variant="primary">자세히 보기</Button>
                            </Card.Body>
                        </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
};

export default Home;