import movies from './MoviesArray';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function AllMovies() {
    console.log(movies);
    return (
        <Container style ={{display:"flex", flexWrap: "wrap",gap: "10px"}}>
            {movies.map((movie) => <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>)}

        </Container>
    )
}

export default AllMovies;