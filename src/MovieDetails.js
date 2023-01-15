import {useParams} from "react-router-dom";

console.log(useParams());

function MovieDetails() {
    const { id } = useParams();
    console.log(id);

    return <h1>Movie details Page{id}</h1>;
}

export default MovieDetails;
