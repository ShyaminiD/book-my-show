import "./App.css";
import Signin from "./Signin";
import Navigationbar from "./Navbar";
import Navbarsmall from "./Navbarsmall";
import Button from "react-bootstrap/Button";
const movies = [
  {
    id: "100",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 6.5,
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    language: "English",
    director: "Jon Favreau",
    releaseDate: "April 26, 2010",
    description:
      "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
  },
  {
    id: "101",
    name: "Avatar 2",
    poster:
      "https://sportshub.cbsistatic.com/i/2022/11/21/4d1fe194-2496-4923-af07-11f47ca498bf/avatar-the-way-of-water-character-posters-1.jpg?auto=webp&width=608&height=900&crop=0.676:1,smart",
    rating: 6.5,
    trailer: "https://www.youtube.com/embed/sdMBNpdYV3Y",
    language: "English",
    director: "James Cameron",
    releaseDate: "16 dec 2022",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home",
  },
  {
    id: "102",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    language: "English",
    director: "Brad Bird",
    releaseDate: "29 June 2007",
    description:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  },
  {
    id: "103",
    name: "Thunivu",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvqdAerc7q_f7No8UqR9bUIODUKUlzvDlad6pBObT&s",
    rating: 6.5,
    trailer: "https://www.youtube.com/embed/jnBZboK17_A",
    language: "Tamil",
    director: "H Vinoth",
    releaseDate: "11 Jan 2023",
    description:
      "A mysterious mastermind and his team forms a plan and commits bank heists across Chennai, but their motive of the heists remains mysterious.",
  },
  {
    id: "104",
    name: "Varisu",
    poster:
      "https://pbs.twimg.com/media/FV2ogeAagAEl_YM?format=jpg&name=medium",
    rating: 8,
    trailer: "https://www.youtube.com/embed/9fux9swQ5AQ",
    language: "Tamil",
    director: "Vamshi Paidipally",
    releaseDate: "11 Jan 2023",
    description:
      "Vijay Rajendran is a happy to-go lucky man. Things change when his foster father dies unexpectedly.",
  },

  {
    id: "105",
    name: "Cirkus",
    poster:
      "https://filmfare.wwmindia.com/content/2022/may/ranveer-singh-cirkus-psoter-latest.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/EkzD0d0yFdM",
    language: "Hindi",
    director: "Rohit Shetty",
    releaseDate: "23 December 2022",
    description:
      "Two sets of identical twins are accidentally separated at birth. Several years later, when they are coincidentally in the same town, there is a lot of confusion and misunderstanding when people mistake them for each other.",
  },

  {
    id: "106",
    name: "Drishyam 2",
    poster: "https://images.news18.com/ibnlive/uploads/2022/10/drishyam-2.jpg",
    rating: 8.9,
    trailer: "https://www.youtube.com/embed/cxA2y9Tgl7o",
    language: "Hindi",
    director: "Abhishek Pathak",
    releaseDate: "18 November 2022",
    description:
      "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
  },

  {
    id: "107",
    name: "Dhamaka",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gPMCyYnavBNeSONG6oibdjpt-zLXQIYwNJfgZ-0&s",
    rating: 8,
    trailer: "https://www.youtube.com/embed/zLPjDE8Lyf4",
    language: "Telugu",
    director: "Trinadha Rao Nakkina",
    releaseDate: "23 Dec, 2022",
    description:
      "Swamy and Anand who look exactly the same, come from different backgrounds. Under dicey circumstances Pranavi, a young and pretty girl falls in love with both of them. How will Swamy and Anand solve their problems?",
  },

  {
    id: "108",
    name: "HIT: The 2nd Case",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDQ0YjBmZTktMDBlZC00MWM1LTgwYTMtZjcyZTBlYzYwNmY1XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
    rating: 9,
    trailer: "https://www.youtube.com/embed/4GzAwnjVTqc",
    language: "Telugu",
    director: "Sailesh Kolanu",
    releaseDate: "02 Dec 2022",
    description:
      "Krishna Dev aka KD, a laid back cop, works in AP HIT, has to take up a gruesome murder case. As KD unravels the layers of the crime, the stakes rise unbelievably high and the threat comes unusually close.",
  },
];
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Navbarsmall/>
 
     
    </div>
  );
}

export default App;
