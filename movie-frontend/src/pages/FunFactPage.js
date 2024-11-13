// // src/pages/FunFactPage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FunFactPage.css';

// const funFacts = [
//   { title: "Barbie", fact: "Margot Robbie handpicked Ryan Gosling for the role of Ken, and he reportedly took the part after finding a Ken doll lying face-down in mud in his backyard" },
//   { title: "Guardians of the Galaxy Vol. 3", fact: "James Gunn confirmed that the song 'Dog Days Are Over' by Florence + The Machine was in the movie because it perfectly captured the celebratory spirit of the Guardians' last adventure." },
//   { title: "Get Out", fact: "Jordan Peele wrote the script for 'Get Out' in just two months and drew inspiration from 'The Stepford Wives' for its social commentary and horror elements." },
//   { title: "Oppenheimer", fact: "Christopher Nolan recreated the Trinity nuclear test without using CGI, employing practical effects and miniature models to depict the first-ever nuclear explosion." },
//   { title: "Frozen", fact: "Let It Go' was almost cut from the movie, but after hearing the completed song, the directors changed the entire plot to make Elsa a more sympathetic character" },
//   {
//     title: "Inception",
//     fact: "Each character in 'Inception' represents different roles in movie production, such as the architect representing the production designer and Cobb as the director."
//     },
//     {
//     title: "Mission: Impossible – Dead Reckoning Part One",
//     fact: "Tom Cruise trained for an entire year for the motorcycle jump stunt featured in the film. He did the actual jump over six times for the final shot."
//     },
//     {
//     title: "The Social Network",
//     fact: "Jesse Eisenberg, who played Mark Zuckerberg, never met the real Zuckerberg until years after the movie was released."
//     },
//     {
//     title: "Knives Out",
//     fact: "Director Rian Johnson wrote the script for 'Knives Out' as a homage to Agatha Christie, featuring twists that subverted classic whodunit tropes."
//     },
//     {
//     title: "Zootopia",
//     fact: "In the original script, the movie was much darker, with prey animals wearing shock collars to keep them subdued. This concept was later scrapped for a more family-friendly theme."
//     },
//     {
//     title: "Black Panther",
//     fact: "'Black Panther' was the first Marvel movie to win an Oscar, taking home awards for Best Costume Design, Best Production Design, and Best Original Score."
//     },
//     {
//     title: "Crazy Stupid Love",
//     fact: "Ryan Goslings Dirty Dancing lift scene with Emma Stone was real, but Emma had a fear of being lifted due to a past injury and screamed in genuine panic during the take."
//     },
//     {
//     title: "Avatar",
//     fact: "James Cameron began developing 'Avatar' in 1994, but the technology to realize his vision didn't exist at the time. He waited over a decade for advancements before starting production."
//     },
//     {
//     title: "Titanic",
//     fact: "Leonardo DiCaprio's famous line 'I'm the king of the world!' was improvised during filming and went on to become one of the most iconic quotes in cinema."
//     },
//     {
//     title: "Jurassic Park",
//     fact: "The iconic T. rex roar was a blend of various animal sounds, including a baby elephant, alligator, and tiger."
//     },
//     {
//     title: "The Lion King",
//     fact: "Matthew Broderick, who voiced adult Simba, didn't know he was working on an original movie. He initially thought 'The Lion King' was a remake of 'Kimba the White Lion,' an old Japanese cartoon."
//     },
//     {
//     title: "La La Land",
//     fact: "Emma Stone and Ryan Gosling had to learn to tap dance for the opening number and spent three months in dance rehearsals to perfect the routine."
//     },
//     {
//     title: "Hereditary",
//     fact: "The clicking sound that Charlie makes in 'Hereditary' was originally just a way for the actress Milly Shapiro to stay in character. The director found it so creepy that he made it a central part of the film."
//     },
//     {
//     title: "The Notebook",
//     fact: "Ryan Gosling was cast as Noah because the director wanted someone who wasn't 'handsome' in a conventional way, stating he was 'an everyday guy.'"
//     },
//     {
//     title: "John Wick: Chapter 4",
//     fact: "Keanu Reeves trained for months in martial arts, nunchaku, and handling firearms to execute the movie's complex fight sequences with authenticity."
//     },
//     {
//     title: "Spider-Man: Into the Spider-Verse",
//     fact: "The movie's animators used a unique frame rate technique that showed Miles Morales animated at 12 frames per second at the start of the film to signify his inexperience, while other characters were animated at 24 frames per second."
//     },
//     {
//     title: "Harry Potter and the Philosopher's Stone",
//     fact: "The child actors reactions during the Great Hall scenes were genuine because they were filmed as they saw the magical props, like floating candles and moving portraits, for the first time."
//     },
//     {
//     title: "The Hunger Games: The Ballad of Songbirds and Snakes",
//     fact: "This prequel dives into the origins of President Snow, showing how he was molded by the ruthless world of Panem and the events that shaped his character."
//     },
//     {
//     title: "Fair Play",
//     fact: "The movie explores the complexities of power dynamics in relationships, using the workplace as an intense battleground for gender roles and ambition."
//     },
//     {
//     title: "Barbie",
//     fact: "Greta Gerwig's 'Barbie' movie broke the record for the highest-grossing film directed by a woman, surpassing previous titles by a significant margin."
//     },
//     {
//     title: "Inception",
//     fact: "The spinning top in the final scene of 'Inception' was deliberately left ambiguous by Christopher Nolan to keep viewers questioning reality."
//     },
//     {
//     title: "Avengers: Endgame",
//     fact: "Robert Downey Jr. improvised the iconic line 'I love you 3000,' inspired by a phrase his real-life children would say to him."
//     },
//     {
//     title: "Mission: Impossible – Dead Reckoning Part One",
//     fact: "Tom Cruise performed his own stunts, including a record-breaking motorcycle jump off a cliff that was captured in a single, breathtaking shot."
//     },
//     {
//     title: "Frozen",
//     fact: "Idina Menzel's powerful song 'Let It Go' was so captivating during its first screening that it influenced the writers to change Elsa from a villain into a hero."
//     },
//     {
//     title: "Knives Out",
//     fact: "Director Rian Johnson wrote the character of Benoit Blanc with Daniel Craig in mind and was delighted when the actor accepted the role, bringing his unique Southern drawl."
//     },
//     {
//     title: "Jiro Dreams of Sushi",
//     fact: "The documentary 'Jiro Dreams of Sushi' inspired chefs around the world with its meticulous portrayal of Jiro Ono's pursuit of perfection in sushi making."
//     },
//     {
//     title: "Oppenheimer",
//     fact: "Christopher Nolan avoided using CGI for the Trinity nuclear test scene in 'Oppenheimer.' Instead, he used practical effects to recreate the explosion with stunning detail."
//     },
//     {
//     title: "The Social Network",
//     fact: "Jesse Eisenberg, who played Mark Zuckerberg, had never met or spoken to the Facebook founder before filming. The portrayal was based solely on the script."
//     },
//     {
//     title: "The Covenant",
//     fact: "The movie was praised for its strong themes of loyalty and sacrifice, highlighting the personal connections formed during wartime that transcend borders and cultures."
//     },
//     {
//     title: "Spider-Man: No Way Home",
//     fact: "The film marked the first live-action crossover of three generations of Spider-Men, featuring Tobey Maguire, Andrew Garfield, and Tom Holland in a fan-favorite team-up."
//     },
//     {
//     title: "Elemental",
//     fact: "Pixar's 'Elemental' took inspiration from director Peter Sohn's experiences growing up in a multicultural family, emphasizing the balance between family traditions and finding one's identity."
//     },
//     {
//     title: "Crazy, Stupid, Love",
//     fact: "Ryan Gosling's line 'Seriously? It's like you're photoshopped!' during the shirtless scene was an ad-lib that became one of the movie's most memorable moments."
//     },
//     {
//     title: "Hereditary",
//     fact: "Toni Collette wasn't initially keen on doing another horror film but was so impressed by Ari Aster's script that she signed on immediately."
//     }

//   // More fun facts here...
// ];

// const FunFactPage = () => {
//   console.log('Rendering FunFactPage'); // Add this for debugging
  
//   return (
//     <div className="funfact-container" style={{backgroundColor: '#1a1f2e', minHeight: '100vh'}}>
//       <h1 style={{color: '#ffffff'}}>Movie Fun Facts</h1>
//       <div style={{padding: '20px'}}>
//         <ul className="funfact-list">
//           {funFacts.map((fact, index) => (
//             <li key={index} className="funfact-item" style={{backgroundColor: '#2a3142', margin: '10px', padding: '15px', borderRadius: '8px'}}>
//               <h3 style={{color: '#e2e8f0'}}>{fact.title}</h3>
//               <p style={{color: '#94a3b8'}}>{fact.fact}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Link to="/" style={{color: '#60a5fa'}}>Back to Home</Link>
//     </div>
//   );
// };

// export default FunFactPage;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FunFactPage.css';

const FunFactPage = () => {
  const [funFacts, setFunFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the fun facts from the backend API
    axios.get('http://localhost:3001/api/funfact')
      .then((response) => {
        setFunFacts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="funfact-container">
      <h1>Movie Fun Facts</h1>
      <ul className="funfact-list">
        {funFacts.map((fact, index) => (
          <li key={index} className="funfact-item">
            <h3>{fact.title}</h3>
            <p>{fact.fact}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FunFactPage;
