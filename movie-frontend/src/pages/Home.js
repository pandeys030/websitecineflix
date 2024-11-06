// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import './Home.css';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import the slider CSS
import 'slick-carousel/slick/slick-theme.css'; // Import the theme CSS
import Navbar from '../components/Navbar'; // Adjust the path based on your folder structure

const movies = [
  {
    id: 1,
    title: 'Avatar',
    poster: '/poster/avatar.jpg',
    releaseDate: '2009',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: '4.8',
    director: 'James Cameron',
    description: 'On the lush alien world of Pandora, a former Marine falls in love with a local warrior and must decide where his loyalties lie when Earth\'s forces threaten the planet\'s indigenous people.'
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    poster: '/poster/avengere.jpg',
    releaseDate: '2019',
    genre: ['Action', 'Superhero', 'Science Fiction'],
    rating: '4.9',
    director: 'Anthony and Joe Russo',
    description: 'After Thanos\' devastating snap, the remaining Avengers devise a daring plan to reverse the damage and restore balance to the universe.'
  },
  {
    id: 3,
    title: 'Titanic',
    poster: '/poster/titanic.jpg',
    releaseDate: '1997',
    genre: ['Romance', 'Drama', 'Historical'],
    rating: '4.7',
    director: 'James Cameron',
    description: 'A fictionalized account of the sinking of the RMS Titanic, following a young aristocrat who falls in love with a poor artist aboard the ill-fated ship.'
  },
  {
    id: 4,
    title: 'Star Wars: The Force Awakens',
    poster: '/poster/starwars.jpg',
    releaseDate: '2015',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: '4.6',
    director: 'J.J. Abrams',
    description: 'Thirty years after the defeat of the Empire, a new threat arises as the First Order attempts to rule the galaxy.'
  },
  {
    id: 5,
    title: 'Jurassic World',
    poster: '/poster/jurassic.jpg',
    releaseDate: '2015',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: '4.5',
    director: 'Colin Trevorrow',
    description: 'Twenty-two years after the events of Jurassic Park, a new theme park, Jurassic World, now operates on Isla Nublar.'
  },
  {
    id: 6,
    title: 'The Lion King',
    poster: '/poster/thelionking.jpg',
    releaseDate: '2019',
    genre: ['Drama', 'Adventure', 'Animation'],
    rating: '4.4',
    director: 'Jon Favreau',
    description: 'A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.'
  },
  {
    id: 7,
    title: 'Spider-Man: No Way Home',
    poster: '/poster/spiderman.jpg',
    releaseDate: '2021',
    genre: ['Action', 'Adventure', 'Fantasy'],
    rating: '4.8',
    director: 'Jon Watts',
    description: 'Peter Parker seeks help from Doctor Strange, leading to a breach in the multiverse that brings together heroes and villains from different Spider-Man universes.'
  },
  {
    id: 8,
    title: 'Top Gun: Maverick',
    poster: '/poster/top.jpg',
    releaseDate: '2022',
    genre: ['Action', 'Drama'],
    rating: '4.8',
    director: 'Joseph Kosinski',
    description: 'After thirty years of service, Pete "Maverick" Mitchell returns to train a new generation of pilots for a specialized mission.'
  },
  {
    id: 9,
    title: 'Furious 7',
    poster: '/poster/f7.jpg',
    releaseDate: '2015',
    genre: ['Action', 'Crime', 'Thriller'],
    rating: '4.6',
    director: 'James Wan',
    description: 'Dominic Toretto and his crew are targeted by a terrorist seeking revenge while trying to protect a sophisticated computer program.'
  },
  {
    id: 10,
    title: 'Avengers: Infinity War',
    poster: '/poster/avengerinfinity.jpg',
    releaseDate: '2018',
    genre: ['Action', 'Superhero', 'Science Fiction'],
    rating: '4.7',
    director: 'Anthony and Joe Russo',
    description: 'The Avengers must stop Thanos from collecting all six Infinity Stones to enact his twisted will on reality.'
  },
  {
    id: 11,
    title: 'Star Wars: Episode VIII - The Last Jedi',
    poster: '/poster/starwars.jpg',
    releaseDate: '2017',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    director: 'Rian Johnson',
    description: 'Rey trains with Luke Skywalker while the Resistance fights against the First Order. As they face their greatest challenges, the bond between them is tested.'
  },
  {
    id: 12,
    title: 'Jurassic World: Fallen Kingdom',
    poster: '/poster/jurassic.jpg',
    releaseDate: '2018',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    director: 'J.A. Bayona',
    description: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from extinction.'
  },
  {
    id: 13,
    title: 'Frozen II',
    poster: '/poster/frozen.jpg',
    releaseDate: '2019',
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Chris Buck, Jennifer Lee',
    description: 'Elsa, Anna, Kristoff, Olaf, and Sven embark on a dangerous journey to uncover the truth about Elsa\'s powers in this enchanting sequel to Disney\'s Frozen.'
  },
  {
    id: 14,
    title: 'Black Panther',
    poster: '/poster/black.jpg',
    releaseDate: '2018',
    genre: ['Action', 'Adventure', 'Superhero'],
    director: 'Ryan Coogler',
    description: 'After the death of his father, T\'Challa returns home to the technologically advanced African nation of Wakanda to take the throne as king while facing a new foe.'
  },
  {
    id: 15,
    title: 'Harry Potter and the Deathly Hallows – Part 2',
    poster: '/poster/avengere.jpg',
    releaseDate: '2011',
    genre: ['Fantasy', 'Adventure', 'Action'],
    director: 'David Yates',
    description: 'In the final installment of the Harry Potter series, the battle between good and evil escalates as Harry faces Lord Voldemort for the last time.'
  },
  {
    id: 16,
    title: 'The Lord of the Rings: The Return of the King',
    poster: '/api/placeholder/300/450',
    releaseDate: '2003',
    genre: ['Fantasy', 'Adventure', 'Action'],
    director: 'Peter Jackson',
    description: 'As the final confrontation with Sauron approaches, Frodo and Sam near Mount Doom in their quest to destroy the One Ring.'
  },
  {
    id: 17,
    title: 'Finding Dory',
    poster: '/poster/find.jpg',
    releaseDate: '2016',
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Andrew Stanton, Angus MacLane',
    description: 'Dory, the forgetful blue tang, embarks on a journey to find her long-lost parents, overcoming challenges and making new friends along the way.'
  },
  {
    id: 18,
    title: 'The Incredibles 2',
    poster: '/poster/incr.jpg',
    releaseDate: '2018',
    genre: ['Animation', 'Action', 'Adventure'],
    director: 'Brad Bird',
    description: 'After defeating Syndrome, the Parr family faces new challenges as they team up with Frozone to fight the ScreenSlaver, who aims to turn the public against superheroes.'
  },
  {
    id: 19,
    title: 'The Fate of the Furious',
    poster: '/poster/fate.jpg',
    releaseDate: '2017',
    genre: ['Action', 'Crime', 'Thriller'],
    director: 'F. Gary Gray',
    description: 'Dom and Letty are on their honeymoon when a mysterious woman forces Dom back into a world of crime that he can\'t seem to escape.'
  },
  {
    id: 20,
    title: 'Zootopia',
    poster: '/poster/zoo.jpg',
    releaseDate: '2016',
    genre: ['Animation', 'Adventure', 'Comedy'],
    director: 'Byron Howard, Rich Moore',
    description: 'In a city of anthropomorphic animals, rookie bunny cop Judy Hopps and cynical con artist fox Nick Wilde must work together to uncover a conspiracy.'
  },
  {
    id: 21,
    title: "Spider-Man: Across the Spider-Verse",
    poster: "/poster/spider-verse.jpg",
    releaseDate: "2023",
    genre: ["Animation", "Action", "Adventure"],
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    description: "Miles Morales returns for the next chapter of the Spider-Verse saga, where he encounters new allies and villains across different universes."
  },
  {
    id: 22,
    title: "Oppenheimer",
    poster: "/poster/oppenheimer.jpg",
    releaseDate: "2023",
    genre: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II."
  },
  {
    id: 23,
    title: "Barbie",
    poster: "/poster/barbie.jpg",
    releaseDate: "2023",
    genre: ["Adventure", "Comedy", "Fantasy"],
    director: "Greta Gerwig",
    description: "Barbie and Ken leave the comfort of Barbie Land and venture into the real world, exploring the complexities of life and identity."
  },
  {
    id: 24,
    title: "Guardians of the Galaxy Vol. 3",
    poster: "/poster/guardians3.jpg",
    releaseDate: "2023",
    genre: ["Action", "Adventure", "Comedy"],
    director: "James Gunn",
    description: "The Guardians embark on a mission to protect Rocket, which leads to a deeper understanding of their past and their bonds as a family."
  },
  {
    id: 25,
    title: "The Marvels",
    poster: "/poster/marvels.jpg",
    releaseDate: "2023",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "Nia DaCosta",
    description: "Captain Marvel, Ms. Marvel, and Monica Rambeau team up to save the universe from a new threat, discovering their interconnected powers."
  },
  {
    id: 26,
    title: "Killers of the Flower Moon",
    poster: "/poster/killers.jpg",
    releaseDate: "2023",
    genre: ["Crime", "Drama", "History"],
    director: "Martin Scorsese",
    description: "A historical crime drama about the Osage murders in the 1920s, investigating the systematic killing of wealthy Native Americans."
  },
  {
    id: 27,
    title: "Mission: Impossible – Dead Reckoning Part One",
    poster: "/poster/mission-impossible.jpg",
    releaseDate: "2023",
    genre: ["Action", "Adventure", "Thriller"],
    director: "Christopher McQuarrie",
    description: "Ethan Hunt and his team embark on their most dangerous mission yet, as they race against time to retrieve a weapon of mass destruction."
  },
  {
    id: 28,
    title: "Fast X",
    poster: "/poster/fast-x.jpg",
    releaseDate: "2023",
    genre: ["Action", "Crime", "Drama"],
    director: "Louis Leterrier",
    description: "The Fast family faces their biggest threat yet as an old foe returns, and they must team up to protect their loved ones."
  },
  {
    id: 29,
    title: "Nimona",
    poster: "/poster/nimona.jpg",
    releaseDate: "2023",
    genre: ["Animation", "Action", "Adventure"],
    director: "Doin B. Rosenthal",
    description: "A young shapeshifter named Nimona teams up with a knight who has been framed for a crime he didn't commit, embarking on a quest to prove his innocence."
  },
  {
  
      id: 30,
      title: "Elemental",
      poster: "/poster/elemental.jpg",
      releaseDate: "2023",
      genre: ["Animation", "Family", "Fantasy"],
      director: "Peter Sohn",
      description: "In a vibrant city where fire, water, land, and air residents live together in harmony, a fiery young woman and a mellow, go-with-the-flow guy meet by chance. Despite their elemental differences, they discover they can be stronger together, sparking an adventure of friendship and self-discovery. They face challenges that test their bond and encourage them to rethink what it means to truly connect with others in a world where being different is both a strength and a vulnerability."
    },
    {
      id: 31,
      title: "The Haunting of Bly Manor",
      poster: "/poster/blymanor.jpg",
      releaseDate: "2021",
      genre: ["Horror", "Mystery", "Thriller"],
      director: "Mike Flanagan",
      description: "When a young au pair arrives at Bly Manor to care for two orphaned children, she quickly realizes that the estate harbors dark secrets. Unseen forces roam the halls, and ghostly figures lurk in the shadows, slowly driving her into a psychological spiral. As she delves deeper into the manor's tragic past, she uncovers the eerie connections between the spirits and the living, culminating in a chilling revelation that blurs the lines between memory, love, and loss."
    },
    {
      id: 32,
      title: "La La Land",
      poster: "/poster/lalaland.jpg",
      releaseDate: "2016",
      genre: ["Romance", "Drama"],
      director: "Damien Chazelle",
      description: "In the vibrant city of Los Angeles, aspiring actress Mia and dedicated jazz musician Sebastian are drawn together by their love for art and their dreams of success. As they navigate the highs and lows of their ambitions, their romance blossoms against the backdrop of a stunning musical landscape. However, as they achieve their dreams, they must confront the sacrifices and challenges that come with their ambitions. This poignant tale of love and perseverance celebrates the magic of following one's dreams while navigating the complexities of relationships."
    
    },
    {
      id: 33,
      title: "Our Planet",
      poster: "/poster/ourplanet.jpg",
      releaseDate: "2019",
      genre: ["Documentary", "Nature"],
      director: "David Attenborough",
      description: "This breathtaking documentary series explores the delicate and often unseen wonders of Earth. With awe-inspiring visuals and narrated by David Attenborough, it journeys through rainforests, arctic tundras, ocean depths, and sun-drenched deserts, showcasing how various ecosystems are interlinked and vulnerable. Alongside its beauty, 'Our Planet' delivers an urgent message about the impact of human activities on these fragile environments, reminding us of the critical need to protect and preserve our natural world for future generations."
    },
    {
      id: 34,
      title: "Fantastic Beasts: The Secrets of Dumbledore",
      poster: "/poster/fantasticbeasts.jpg",
      releaseDate: "2022",
      genre: ["Fantasy", "Adventure"],
      director: "David Yates",
      description: "In this thrilling installment of the 'Fantastic Beasts' series, Professor Albus Dumbledore enlists magizoologist Newt Scamander to thwart the dark wizard Grindelwald's plans. As tensions rise in the wizarding world, Newt and his friends embark on an adventurous quest across magical landscapes, encountering fantastical creatures and new allies. This captivating film delves into themes of loyalty, friendship, and the fight against tyranny, all set within the enchanting universe created by J.K. Rowling. With dazzling visuals and rich storytelling, it explores the power of unity against dark forces."
    },
    {
      id: 35,
      title: "Knives Out",
      poster: "/poster/knivesout.jpg",
      releaseDate: "2019",
      genre: ["Mystery", "Thriller"],
      director: "Rian Johnson",
      description: "After the death of renowned crime novelist Harlan Thrombey, Detective Benoit Blanc is enlisted to investigate the circumstances surrounding his mysterious demise. As he interviews the eccentric family members, secrets are unveiled, and hidden motives come to light. This modern whodunit masterfully blends humor and suspense, keeping viewers guessing until the very end. With a stellar ensemble cast and sharp writing, 'Knives Out' pays homage to classic mystery stories while delivering a fresh take on the genre, exploring themes of family dynamics, greed, and deception."
    },
    {
      id: 36,
      title: "John Wick: Chapter 4",
      poster: "/poster/johnwick4.jpg",
      releaseDate: "2023",
      genre: ["Thriller", "Action"],
      director: "Chad Stahelski",
      description: "In the latest chapter of the iconic action franchise, John Wick finds himself facing off against the world's deadliest assassins. As he uncovers a path to defeating the High Table, he must confront powerful enemies and navigate a web of deceit. Packed with breathtaking fight choreography and relentless action sequences, this installment takes viewers on a global journey filled with stunning visuals and emotional stakes. John's quest for vengeance intertwines with themes of loyalty and sacrifice, leaving audiences on the edge of their seats until the explosive conclusion."
    },
    {
      id: 37,
      title: "Leave the World Behind",
      poster: "/poster/leavetheworldbehind.jpg",
      releaseDate: "2023",
      genre: ["Thriller"],
      director: "Sam Esmail",
      description: "A tense thriller about two families forced together during a mysterious crisis."
  },
  {
      id: 38,
      title: "Fair Play",
      poster: "/poster/fairplay.jpg",
      releaseDate: "2023",
      genre: ["Thriller", "Drama"],
      director: "Chloe Domont",
      description: "A psychological thriller set in the high-stakes world of finance."
  },
  {
    id: 39,
    title: "Missing",
    poster: "/poster/missing.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Mystery"],
    director: "Nicholas D. Johnson, Will Merrick",
    description: "In this riveting digital-age thriller, a teenage girl uses technology to track down her mother who mysteriously disappears during their vacation. As she navigates through social media, video calls, and digital clues, she uncovers unsettling truths about her mother's past and the people surrounding her. This gripping narrative explores themes of connectivity, isolation, and the dark side of technology, leading to a heart-pounding conclusion that keeps audiences guessing until the very end."
  },
  {
    id: 40,
    title: "The Covenant",
    poster: "/poster/thecovenant.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "War"],
    director: "Guy Ritchie",
    description: "In this military thriller, a former soldier is drawn back into action when a mission to rescue an ally turns deadly. As he navigates the treacherous landscape of conflict and betrayal, he must confront his own loyalties and the harsh realities of war. The film combines intense action sequences with a gripping narrative that examines the costs of loyalty and redemption, ultimately posing questions about the sacrifices made in the name of duty and friendship."
  },
  {
    id: 41,
    title: "Luther: The Fallen Sun",
    poster: "/poster/lutherfallen.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Crime"],
    director: "Jamie Payne",
    description: "Following the gritty detective John Luther, this film sees him on the run after being falsely accused of a crime. As he seeks to prove his innocence, he dives deep into the criminal underworld, uncovering a serial killer's dark secrets. The narrative blends suspense and psychological drama, showcasing Luther's relentless pursuit of justice and the toll it takes on his personal life. 'Luther: The Fallen Sun' promises a thrilling experience filled with moral dilemmas and the quest for redemption."
  },
  {
    id: 42,
    title: "65",
    poster: "/poster/65.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Sci-Fi"],
    director: "Scott Beck, Bryan Woods",
    description: "In this thrilling sci-fi adventure, a pilot crash-lands on a prehistoric Earth and must navigate a landscape filled with dangerous creatures while searching for a way back home. Facing relentless threats and battling for survival, he encounters a young girl who becomes his ally in this harsh new world. The film explores themes of survival, courage, and the bond formed in adversity, delivering a visually stunning experience that immerses viewers in a forgotten era of Earth's history."
  },
  {
    id: 43,
    title: "True Spirit",
    poster: "/poster/truespirit.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Adventure"],
    director: "Sarah Spillane",
    description: "Based on the inspiring true story of Jessica Watson, a young sailor who set out to become the youngest person to sail solo around the world. As she faces the challenges of the open sea, including fierce storms and self-doubt, Jessica's journey becomes a testament to resilience and determination. 'True Spirit' captures the spirit of adventure and the power of dreams, emphasizing the importance of following one's passion despite the odds."
  },
  {
    id: 44,
    title: "Heart of Stone",
    poster: "/poster/heartofstone.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Action"],
    director: "Tom Harper",
    description: "In this gripping action thriller, an intelligence operative must protect a valuable asset from a dangerous enemy organization. As she navigates a web of betrayal and high-stakes intrigue, she is forced to confront her own demons while racing against time. The film delivers heart-pounding action sequences, complex characters, and a narrative that examines the moral implications of espionage and loyalty in a world fraught with danger."
  },
  {
    id: 45,
    title: "Ghosted",
    poster: "/poster/ghosted.jpg",
    releaseDate: "2023",
    genre: ["Romantic", "Comedy"],
    director: "Dexter Fletcher",
    description: "In this charming romantic comedy, a man falls for a mysterious woman he meets on a trip, only to discover she is a secret agent. As their relationship unfolds amidst espionage and danger, he must navigate the complexities of love in a world of secrets. With a blend of humor and heart, 'Ghosted' explores the unpredictability of romance while delivering laugh-out-loud moments and thrilling escapades."
  },
  {
    id: 46,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    poster: "/poster/hungergamesballad.jpg",
    releaseDate: "2023",
    genre: ["Action", "Drama"],
    director: "Francis Lawrence",
    description: "Set years before the events of the original 'Hunger Games' trilogy, this prequel follows a young Coriolanus Snow as he mentors a tribute from District 12 during the 10th Hunger Games. As he navigates the brutal competition and his own ambitions, the film delves into the origins of the tyrannical president of Panem. With powerful themes of power, morality, and sacrifice, 'The Hunger Games: The Ballad of Songbirds & Snakes' offers a fresh perspective on the beloved franchise, highlighting the complexities of human nature."
  },
  {
        id: 47,
        title: "Inception",
        poster: "/poster/inception.jpg",
        releaseDate: "2010",
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Christopher Nolan",
        description: "'Inception' follows Dom Cobb, a skilled thief who specializes in corporate espionage by infiltrating the dreams of others. Tasked with planting an idea in a target's subconscious, Cobb assembles a team for the most challenging job of their careers. As they navigate the complexities of dreams within dreams, they face unexpected dangers that blur the line between reality and illusion. This mind-bending thriller is a visual masterpiece that explores themes of memory, loss, and the nature of reality."
    },
    {
        id: 48,
        title: "A Haunting in Venice",
        poster: "/poster/hauntinginvenice.jpg",
        releaseDate: "2023",
        genre: ["Mystery", "Horror"],
        director: "Kenneth Branagh",
        description: "In this atmospheric mystery, renowned detective Hercule Poirot is invited to a haunted mansion in Venice for a séance. When a guest is found dead, Poirot must unravel the mystery among the supernatural elements surrounding him. This adaptation of Agatha Christie's novel combines suspense and horror, delivering a chilling narrative that keeps audiences on the edge of their seats while exploring themes of grief and the unknown."
    },

{
        id: 49,
        title: "The Equalizer 3",
        poster: "/poster/equalizer3.jpg",
        releaseDate: "2023",
        genre: ["Action", "Thriller"],
        director: "Antoine Fuqua",
        description: "In this explosive third installment, Robert McCall finds himself in Southern Italy, where he discovers a local crime syndicate threatening the lives of innocent people. Using his unique skills to protect the vulnerable, McCall confronts the dangers of his past while seeking justice. The film delivers intense action sequences, character-driven storytelling, and a reflection on morality and redemption, solidifying McCall's legacy as a relentless force for good."
    },

     {
        id: 50,
        title: "The Social Network",
        poster: "/poster/thesocialnetwork.jpg",
        releaseDate: "2010",
        genre: ["Biography", "Drama"],
        director: "David Fincher",
        description: "'The Social Network' chronicles the rise of Facebook and its co-founder, Mark Zuckerberg. Starting from his days at Harvard University, the film delves into the legal battles and personal conflicts that arise as Zuckerberg creates the groundbreaking social media platform. With sharp writing and compelling performances, this drama highlights themes of ambition, betrayal, and the complexities of friendship in the age of technology."
    },
    
      {
          id: 51,
          title: "Get Out",
          poster: "/poster/getout.jpg",
          releaseDate: "2017",
          genre: ["Horror", "Thriller"],
          director: "Jordan Peele",
          description: "'Get Out' is a groundbreaking horror-thriller that intricately weaves social commentary with suspense. The film follows Chris Washington, a young African-American man who visits the family estate of his white girlfriend, Rose. Initially, he is welcomed with open arms, but as the weekend progresses, he begins to feel increasingly uncomfortable. Unsettling interactions with Rose's family and their friends reveal an underlying menace. Chris soon uncovers a horrifying secret that connects the family to a series of sinister events. With sharp writing and a tense atmosphere, the film addresses themes of racism, identity, and the horror of being seen as an object rather than a person. It leaves the audience questioning the societal dynamics at play and the hidden dangers lurking beneath seemingly benign facades."
      },
      {
          id: 52,
          title: "The Notebook",
          poster: "/poster/thenotebook.jpg",
          releaseDate: "2004",
          genre: ["Romance", "Drama"],
          director: "Nick Cassavetes",
          description: "'The Notebook' is an emotionally charged romantic drama based on Nicholas Sparks' bestselling novel. The film chronicles the sweeping love story of Noah Calhoun and Allie Hamilton, whose romance blossoms one summer in the 1940s in South Carolina. Despite their deep connection, they come from different social classes, leading to heartbreak and separation. Years later, Noah, still in love, restores their old house, hoping to win Allie's heart again. As Allie prepares to marry another man, she discovers Noah's letters, which rekindle their past. The film beautifully captures the essence of first love, the complexities of relationships, and the impact of choices made over time. Through its poignant storytelling and powerful performances, 'The Notebook' explores the themes of love, memory, and the enduring bond that transcends time and circumstance."
      },
      {
          id: 53,
          title: "13th",
          poster: "/poster/13th.jpg",
          releaseDate: "2016",
          genre: ["Documentary", "Politics"],
          director: "Ava DuVernay",
          description: "'13th' is a compelling documentary that delves into the historical roots of racial inequality in the United States, examining how the 13th Amendment—while abolishing slavery—contains a loophole that allows for the mass incarceration of African Americans. Director Ava DuVernay masterfully combines archival footage, interviews, and statistics to illustrate how the prison industrial complex has disproportionately targeted Black communities. The film features insights from scholars, activists, and politicians who dissect the systemic racism embedded in the American legal system. Through its incisive analysis and powerful storytelling, '13th' encourages viewers to confront uncomfortable truths about race, justice, and the ongoing struggle for civil rights. It serves as a rallying cry for change and a call to action against institutional oppression."
      },
      {
          id: 54,
          title: "Hereditary",
          poster: "/poster/hereditary.jpg",
          releaseDate: "2018",
          genre: ["Horror", "Drama"],
          director: "Ari Aster",
          description: "'Hereditary' is a haunting psychological horror film that delves into the complexities of grief and family dynamics. After the death of her secretive mother, Annie Graham, an artist struggling with her own trauma, uncovers dark secrets about her family’s ancestry. As Annie and her family grapple with their loss, they are haunted by disturbing occurrences and a sinister presence that threatens to unravel their lives. The film skillfully blends supernatural elements with emotional depth, exploring themes of inherited trauma, mental illness, and the ties that bind families together. With its chilling atmosphere and unsettling imagery, 'Hereditary' invites audiences into a nightmarish world where the past looms large, and the line between sanity and madness blurs."
      },
      {
          id: 55,
          title: "P.S. I Love You",
          poster: "/poster/psiloveyou.jpg",
          releaseDate: "2007",
          genre: ["Romance", "Drama"],
          director: "Richard LaGravenese",
          description: "'P.S. I Love You' is a heartfelt romantic drama that tells the story of Holly Kennedy, a young widow grappling with the loss of her husband, Gerry. As Holly navigates her grief, she discovers that Gerry has left her a series of letters, each containing messages of love, hope, and encouragement to help her move on with her life. Each letter leads her on a journey of self-discovery and healing, pushing her to embrace new experiences and the possibilities of life after loss. The film explores themes of love, loss, and the enduring power of memories, beautifully illustrating how love can transcend even death. Through its poignant storytelling and touching performances, 'P.S. I Love You' resonates with anyone who has experienced the depths of love and the pain of goodbye."
      },
      {
          id: 56,
          title: "Won't You Be My Neighbor?",
          poster: "/poster/wontyoubemyneighbor.jpg",
          releaseDate: "2018",
          genre: ["Documentary", "Biography"],
          director: "Morgan Neville",
          description: "'Won't You Be My Neighbor?' is an insightful documentary that celebrates the life and legacy of Fred Rogers, the beloved host of the iconic children's television show 'Mister Rogers' Neighborhood.' Through a blend of interviews, archival footage, and personal anecdotes, the film explores Rogers' philosophy of kindness, empathy, and respect, highlighting his unwavering dedication to children's emotional well-being. The documentary sheds light on how Rogers addressed complex topics like grief, disability, and race with honesty and sensitivity, making him a cherished figure in American culture. As the film unfolds, it poignantly captures the essence of what it means to be a good neighbor and the importance of compassion in a world often filled with divisiveness. It serves as a reminder of the impact one person can have on the lives of many."
      },
      {
          id: 57,
          title: "A Quiet Place",
          poster: "/poster/aquietplace.jpg",
          releaseDate: "2018",
          genre: ["Horror", "Sci-Fi"],
          director: "John Krasinski",
          description: "'A Quiet Place' is a masterfully crafted horror film set in a post-apocalyptic world where sound-sensitive creatures hunt humans. The story follows the Abbott family, who live in silence to survive, using sign language to communicate and developing strategies to evade the lethal beings that react violently to any noise. The family's daily routine is filled with tension as they navigate their environment, which is fraught with danger at every turn. When a tragic accident disrupts their fragile existence, the family must confront their deepest fears and fight for survival. This gripping narrative explores themes of family, sacrifice, and the lengths one will go to protect loved ones. With its innovative storytelling and minimal dialogue, 'A Quiet Place' immerses viewers in a world of suspense and emotion, leaving them on the edge of their seats."
      },
      {
          id: 58,
          title: "Crazy, Stupid, Love",
          poster: "/poster/crazystupidlove.jpg",
          releaseDate: "2011",
          genre: ["Romance", "Comedy"],
          director: "Glenn Ficarra, John Requa",
          description: "'Crazy, Stupid, Love' is a refreshing romantic comedy that intertwines the lives of multiple characters as they navigate love, heartbreak, and self-discovery. The film begins with Cal Weaver, who is devastated to learn that his wife Emily wants a divorce. Struggling with his new single life, he meets Jacob Palmer, a smooth-talking bachelor who takes him under his wing and teaches him the art of dating. Meanwhile, Emily grapples with her feelings for Cal and their teenage son, who is infatuated with his babysitter. As these stories unfold, the film explores the ups and downs of relationships, revealing that love can be found in unexpected places. With its blend of humor and heartfelt moments, 'Crazy, Stupid, Love' offers a relatable and entertaining look at the complexities of modern romance."
      },
      {
          id: 59,
          title: "The Act of Killing",
          poster: "/poster/theactofkilling.jpg",
          releaseDate: "2012",
          genre: ["Documentary", "History"],
          director: "Joshua Oppenheimer",
          description: "'The Act of Killing' is a groundbreaking documentary that challenges the traditional narrative of historical atrocities by focusing on the Indonesian mass killings of 1965-66. The film invites former death squad leaders to reenact their real-life killings in a variety of cinematic styles, including musicals and westerns, blurring the lines between reality and fiction. As they relive their past actions, the film reveals the psychological impact of their deeds and the culture of impunity that allows them to boast about their actions without remorse. Through this unorthodox approach, 'The Act of Killing' forces viewers to confront the moral complexities of violence and the haunting legacy of trauma, making it a powerful exploration of humanity's darkest impulses."
      },
      {
          id: 60,
          title: "It Follows",
          poster: "/poster/itfollows.jpg",
          releaseDate: "2014",
          genre: ["Horror", "Mystery"],
          director: "David Robert Mitchell",
          description: "'It Follows' is a unique horror film that introduces a haunting premise centered on a supernatural entity that relentlessly pursues its victims after they have a sexual encounter. The story follows Jay, a teenager who, after a date with her new boyfriend, finds herself targeted by this mysterious force. As she learns more about the curse, Jay and her friends must confront their fears and navigate their relationships while trying to evade the relentless threat. The film is distinguished by its unsettling atmosphere, clever use of tension, and haunting cinematography, making it a standout in the horror genre. It delves into themes of vulnerability, sexuality, and the anxieties of adolescence, leaving viewers with an unsettling sense of dread that lingers long after the credits roll."
      },
      {
          id: 61,
          title: "Jiro Dreams of Sushi",
          poster: "/poster/jirodreamsofsushi.jpg",
          releaseDate: "2011",
          genre: ["Documentary", "Food"],
          director: "David Gelb",
          description: "'Jiro Dreams of Sushi' is a captivating documentary that profiles Jiro Ono, an esteemed sushi chef and owner of a renowned Tokyo restaurant. The film chronicles Jiro's lifelong dedication to his craft, showcasing the meticulous techniques and rigorous standards that have earned him three Michelin stars. Through intimate interviews and stunning visuals, the documentary highlights Jiro's philosophy of pursuing perfection in every aspect of sushi-making, from selecting the finest ingredients to mastering the art of presentation. It also explores the dynamics of Jiro's relationship with his sons, particularly his elder son Yoshikazu, who is set to inherit the family business. The film is not only a celebration of culinary artistry but also a meditation on ambition, tradition, and the pursuit of excellence, leaving audiences inspired by Jiro's unwavering commitment to his craft."
      }
    
   ];
const Home = () => {
  
  
  const categories = {
    action: movies.filter(movie => movie.genre?.includes('Action')),
    sciFi: movies.filter(movie => movie.genre?.includes('Science Fiction')),
    drama: movies.filter(movie => movie.genre?.includes('Drama')),
    comedy: movies.filter(movie => movie.genre?.includes('Comedy')),
    animation: movies.filter(movie => movie.genre?.includes('Animation')),
    horror: movies.filter(movie => movie.genre?.includes('Horror')),
    romance: movies.filter(movie => movie.genre?.includes('Romance')),
    documentary: movies.filter(movie => movie.genre?.includes('Documentary')),
    fantasy: movies.filter(movie => movie.genre?.includes('Fantasy')),
    mystery: movies.filter(movie => movie.genre?.includes('Mystery')),
    thriller: movies.filter(movie => movie.genre?.includes('Thriller')), // Added closing parenthesis and comma
    latest: [...movies].sort((a, b) => parseInt(b.releaseDate) - parseInt(a.releaseDate || '0')).slice(0, 5) // Ensure correct placement of the closing brace
  };
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjusted for a more prominent display
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', // Creates a padding effect around the centered item
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home">
      <Navbar />
      <Hero featuredMovie={movies[0]} /> {/* Pass Avatar as featured movie */}
      
      <div className="movie-sections">
        <section className="movie-list">
          <h2>Popular Movies</h2>
          <Slider {...settings}>
            {movies.map(movie => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        
        <section className="movie-list">
          <h2>Latest Releases</h2>
          <Slider {...settings}>
            {categories.latest.map(movie => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Action Movies</h2>
          <Slider {...settings}>
            {categories.action.map(movie => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Sci-Fi Adventures</h2>
          <Slider {...settings}>
          {categories.sciFi.map(movie => (
            <div className="movies">
              <MovieCard key={movie.id} movie={movie} />
            
          </div>
          ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Drama</h2>
          <Slider {...settings}>
            {categories.drama.map(movie => (
              <div className="movies">
                <MovieCard key={movie.id} movie={movie} />
            
          </div>
          ))}
          </Slider>
        </section>
        
        <section className="movie-list">
          <h2>Comedy</h2>
          <Slider {...settings}>
            {categories.comedy.map(movie => (
              <div className="movies">
                <MovieCard key={movie.id} movie={movie} />
           
          </div>
           ))}
          </Slider>
        </section>
        
        <section className="movie-list">
          <h2>Animation</h2>
          <Slider {...settings}>
            {categories.animation.map(movie => (
              <div className="movies">
                 <MovieCard key={movie.id} movie={movie} />
           
            
          </div>
        ))}
          </Slider>
        </section>
        <section className="movie-list">
  <h2>Horror</h2>
  <Slider {...settings}>
    {categories.horror.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>

<section className="movie-list">
  <h2>Romance</h2>
  <Slider {...settings}>
    {categories.romance.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>

<section className="movie-list">
  <h2>Documentaries</h2>
  <Slider {...settings}>
    {categories.documentary.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>

<section className="movie-list">
  <h2>Fantasy</h2>
  <Slider {...settings}>
    {categories.fantasy.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>

<section className="movie-list">
  <h2>Mystery</h2>
  <Slider {...settings}>
    {categories.mystery.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>

<section className="movie-list">
  <h2>Thriller</h2>
  <Slider {...settings}>
    {categories.thriller.map(movie => (
      <div key={movie.id} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </Slider>
</section>
      </div>
    </div>
  );
};

export default Home;
