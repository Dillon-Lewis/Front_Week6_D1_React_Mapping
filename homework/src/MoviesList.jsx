import { useState } from "react";


const MovieTitleFunction = () => {
    const [movieTitles, setTitles] = useState(['Dune', 'Mad Max', 'Despicable Me', 'Grown-Ups'])
    
    const [movieDescriptions, setDescrip] = useState(['A crazy adventure through the harsh planet environments and a story of finding ones self in the sand', 'Post-apocoliptic dystopian where water is worth more then gold','A criminal mastermind adopts the use of 3 girls to steal the biggest prize in the world, THE MOON!', 'A group of childhood friends get back together for a week long vacation to the lake like kids again'])

    const [selectedMovie, setSelectedMovie] = useState(-1)

    const deleteMovie = (index) => {
        setTitles(movieTitles.filter((movie, x) => x !== index));
        setDescrip(movieDescriptions.filter((movie, x) => x !== index));
    }

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movieTitles.map((title, index) => (
                    index == selectedMovie ?
                    <>
                    <li onClick={() => setSelectedMovie(index)} key={index}>{title}<button onClick={() => deleteMovie(index)}>Remove</button></li>
                    <p>{movieDescriptions[selectedMovie]}</p>
                    </>
                    : <li onClick={() => setSelectedMovie(index)} key={index}>{title}<button onClick={() => deleteMovie(index)}>Remove</button></li>
                    ))}
            </ul>
        </div>
    )
}


export default MovieTitleFunction