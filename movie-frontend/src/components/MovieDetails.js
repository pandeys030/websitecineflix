// src/components/MovieDetails.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const moviesData = {
    '1': {
        id: 1,
        title: 'Avatar',
        poster: '/poster/avatar.jpg',
        releaseDate: '2009',
        genre: ['Science Fiction', 'Action', 'Adventure'],
        rating: '7.9/10',
        director: 'James Cameron',
        description: 'Set in the year 2154, Avatar follows Jake Sully, a paraplegic former Marine who is given a chance to inhabit an "avatar," a hybrid body that allows him to walk again. Sent to the alien moon Pandora by a corporate-driven mission, Jake’s task is to gain the trust of the native Na’vi people and gather intelligence for Earth’s mining operation. However, as he grows close to a Na’vi warrior named Neytiri, Jake begins to understand the Navis deep spiritual connection to their land. He faces a profound choice: help the corporation exploit Pandora or defend the Navi from destruction. This immersive sci-fi tale explores themes of loyalty, environmentalism, and self-discovery.'},
      '2':{
        id: 2,
        title: 'Avengers: Endgame',
        poster: '/poster/avengere.jpg',
        releaseDate: '2019',
        genre: ['Action', 'Superhero', 'Science Fiction'],
        rating: '8.4/10',
        director: 'Anthony and Joe Russo',
        description: 'After Thanos’s infamous snap eradicates half of all life, the Avengers are left reeling, desperate for a way to reverse the damage. Five years later, a sudden breakthrough inspires a daring plan: a time-traveling mission to retrieve the Infinity Stones from the past and restore everyone who was lost. As the heroes face their own fears and failures, they join forces one last time for an epic battle against Thanos, who will stop at nothing to fulfill his vision. This culmination of Marvel’s decade-long saga is a story of resilience, sacrifice, and redemption, bringing closure to beloved characters while delivering unforgettable moments of heroism.'
      },
      '3':{
        id: 3,
        title: 'Titanic',
        poster: '/poster/titanic.jpg',
        releaseDate: '1997',
        genre: ['Romance', 'Drama', 'Historical'],
        rating: '7.9/10',
        director: 'James Cameron',
        description: 'Titanic unfolds as a flashback, narrated by Rose, an elderly woman recounting her experience aboard the RMS Titanic as a young girl in 1912. Rose, a young aristocrat, falls in love with Jack, a free-spirited artist from a poor background. Despite their social differences, the two share a powerful bond and dream of a life together. But their happiness is shattered when the Titanic strikes an iceberg and begins to sink. In the chaos that follows, Jack and Rose fight to survive amid heartbreak and tragedy. This sweeping romance, set against one of history\'s deadliest maritime disasters, explores themes of love, freedom, and the human spirit.'},
      '4':{
        id: 4,
        title: 'Star Wars: The Force Awakens',
        poster: '/poster/starwars.jpg',
        releaseDate: '2015',
        genre: ['Science Fiction', 'Action', 'Adventure'],
        rating: '7.8/10',
        director: 'J.J. Abrams',
        description: 'In The Force Awakens, the galaxy is once again threatened by a powerful dark force known as the First Order, led by the mysterious Kylo Ren. Amidst this turmoil, a young scavenger named Rey discovers her latent Force abilities. She teams up with Finn, a former stormtrooper, and the Resistance in their quest to find Luke Skywalker, the last Jedi who has vanished. Along the way, Rey, Finn, and their allies confront old and new adversaries, facing questions of loyalty, family, and destiny. This revival of the Star Wars saga combines action with a rich legacy, setting the stage for an epic intergalactic struggle.'
      },
      '5':{
        id: 5,
        title: 'Jurassic World',
        poster: '/poster/jurassic.jpg',
        releaseDate: '2015',
        genre: ['Science Fiction', 'Action', 'Adventure'],
        rating: '6.9/10',
        director: 'Colin Trevorrow',
        description: 'In Jurassic World, a theme park set on Isla Nublar offers visitors a chance to experience genetically resurrected dinosaurs up close. To boost declining attendance, the park’s scientists create a terrifying new hybrid dinosaur, the Indominus rex. However, the creature proves far more intelligent and dangerous than anticipated, ultimately escaping its enclosure and threatening everyone on the island. As chaos unfolds, park staff and guests struggle to survive the Indominus rex’s rampage while realizing the ethical consequences of their actions. This thrilling installment in the Jurassic Park franchise explores themes of scientific responsibility and humanity’s fascination with nature’s power.'
      },
      '6':{
        id: 6,
        title: 'The Lion King',
        poster: '/poster/thelionking.jpg',
        releaseDate: '2019',
        genre: ['Drama', 'Adventure', 'Animation'],
        rating: '8.3/10',
        director: 'Jon Favreau',
        description: 'The Lion King follows Simba, a young lion cub who idolizes his father, Mufasa, the wise king of the Pride Lands. But when Mufasa is betrayed and killed by Simba\'s scheming uncle, Scar, Simba is driven into exile. As he grows up, Simba learns valuable life lessons from unlikely friends and eventually returns to reclaim his place as king. Along the way, he must overcome his guilt, fear, and the pain of loss to confront Scar and bring harmony back to the Pride Lands. This classic tale, inspired by Shakespeare’s Hamlet, is a powerful story about family, redemption, and the cycle of life.'},
      '7':{
        id: 7,
        title: 'Spider-Man: No Way Home',
        poster: '/poster/spiderman.jpg',
        releaseDate: '2021',
        genre: ['Action', 'Adventure', 'Fantasy'],
        rating: '8.3/10',
        director: 'Jon Watts',
        description: 'Peter Parker’s secret identity is exposed, and he turns to Doctor Strange for help, unleashing chaos in the multiverse. Heroes and villains from past Spider-Man films converge, creating an epic showdown across worlds.'
      },
     '8': {
        id: 8,
        title: 'Top Gun: Maverick',
        poster: '/poster/top.jpg',
        releaseDate: '2022',
        genre: ['Action', 'Drama'],
        rating: '7.1/10',
        director: 'Joseph Kosinski',
        description: 'Returning to the Top Gun program, Maverick is tasked with training elite pilots for a high-stakes mission. With thrilling aerial sequences and emotional depth, this action-packed sequel takes audiences on an unforgettable ride.'
      },
      '9':{
        id: 9,
        title: 'Furious 7',
        poster: '/poster/f7.jpg',
        releaseDate: '2015',
        genre: ['Action', 'Crime', 'Thriller'],
        rating: '8.4/10',
        director: 'James Wan',
        description: 'Dominic Toretto and his crew face a new threat as they protect a powerful surveillance device. Filled with high-octane action, emotional farewells, and unforgettable stunts, this chapter honors Paul Walker’s legacy.'
      },
      '10':{
        id: 10,
        title: 'Avengers: Infinity War',
        poster: '/poster/avengerinfinity.jpg',
        releaseDate: '2018',
        genre: ['Action', 'Superhero', 'Science Fiction'],
        rating: '4.7',
        director: 'Anthony and Joe Russo',
        description: 'The Avengers rally to prevent the ruthless Thanos from collecting all six Infinity Stones, risking everything to prevent his plan to reshape reality. This massive crossover delivers explosive action and sets the stage for an epic showdown.'
      },
      '11':{
        id: 11,
        title: 'Star Wars: Episode VIII - The Last Jedi',
        poster: '/poster/starwars.jpg',
        releaseDate: '2017',
        genre: ['Science Fiction', 'Action', 'Adventure'],
        rating: '6.9/10',
        director: 'Rian Johnson',
        description: 'As Rey continues her journey in the Force, she seeks guidance from Luke Skywalker, the reclusive Jedi Master living in exile. Meanwhile, the Resistance, led by General Leia Organa, struggles to survive against relentless attacks from the First Order. Rey’s training challenges her beliefs as she forms a mysterious connection with Kylo Ren, the troubled leader of the First Order. Loyalties are tested, and shocking revelations come to light, leading to a climactic showdown that alters the balance of power in the galaxy.'
      },
      '12':{
        id: 12,
        title: 'Jurassic World: Fallen Kingdom',
        poster: '/poster/jurassic.jpg',
        releaseDate: '2018',
        genre: ['Science Fiction', 'Action', 'Adventure'],
        rating: '6.1/10',
        director: 'J.A. Bayona',
        description: 'The once-thriving dinosaur theme park, Jurassic World, has been abandoned, but a new crisis draws Owen Grady and Claire Dearing back to Isla Nublar. With a volcanic eruption threatening to wipe out the island’s remaining dinosaurs, they must mount a daring rescue operation. However, as they uncover a dark conspiracy, they realize that saving the dinosaurs could unleash terrifying consequences on the world. This high-stakes adventure explores the dangers of human interference in nature’s most primal creatures.'
      },
      '13':{
        id: 13,
        title: 'Frozen II',
        poster: '/poster/frozen.jpg',
        releaseDate: '2019',
        genre: ['Animation', 'Adventure', 'Comedy'],
        rating: '6.8/10',
        director: 'Chris Buck, Jennifer Lee',
        description: 'In this heartwarming sequel to Disney’s beloved Frozen, Elsa, Anna, Kristoff, Olaf, and Sven set off on an extraordinary journey to uncover the origins of Elsa’s powers. Drawn to the enchanted forest by a mysterious voice, Elsa and her friends discover ancient secrets that threaten their kingdom. As they navigate perilous landscapes and encounter mythical creatures, they must confront the truth about their past to save the future. Filled with enchanting songs and breathtaking visuals, Frozen II is a tale of courage, family, and self-discovery.'
      },
     '14': {
        id: 14,
        title: 'Black Panther',
        poster: '/poster/black.jpg',
        releaseDate: '2018',
        genre: ['Action', 'Adventure', 'Superhero'],
        rating: '7.3/10',
        director: 'Ryan Coogler',
        description: 'After the death of his father, T’Challa returns to Wakanda, an isolated yet technologically advanced African nation. As he ascends the throne and dons the mantle of the Black Panther, T’Challa faces a powerful adversary who threatens to disrupt Wakanda’s peace and reveal its secrets to the world. Caught between his role as a king and a hero, T’Challa must navigate loyalty, tradition, and destiny. Black Panther explores themes of identity, heritage, and social justice, making it a groundbreaking addition to the superhero genre.'
      },
      '15':{
        id: 15,
        title: 'Harry Potter and the Deathly Hallows – Part 2',
        poster: '/poster/harry.jpg',
        releaseDate: '2011',
        genre: ['Fantasy', 'Adventure', 'Action'],
        rating: '8.1/10',
        director: 'David Yates',
        description: 'In the epic conclusion to the Harry Potter saga, Harry, Ron, and Hermione make a final stand against the dark forces of Voldemort. With the fate of the wizarding world hanging in the balance, Harry confronts Voldemort in a climactic battle at Hogwarts. As secrets from the past are revealed, Harry’s true destiny unfolds, leading to an emotional and action-packed finale. This thrilling end to J.K. Rowling’s magical series is a powerful story of friendship, sacrifice, and the enduring power of good over evil.'
      },
      '16':{
        id: 16,
        title: 'The Lord of the Rings: The Return of the King',
<<<<<<< HEAD
        poster:'/poster/find.jpg',
=======
        poster: '/poster/lord.jpg',
>>>>>>> e77613493a6534bc1290554463a47c719c4fd178
        releaseDate: '2003',
        genre: ['Fantasy', 'Adventure', 'Action'],
        rating: '9.0/10',
        director: 'Peter Jackson',
        description: 'In the final chapter of J.R.R. Tolkien’s legendary saga, the forces of Middle-earth prepare for an all-out battle against Sauron’s dark army. As Aragorn steps into his rightful role as king, Frodo and Sam struggle to reach Mount Doom to destroy the One Ring. With allies gathered and enemies closing in, the fate of Middle-earth rests on a single act of courage. An epic tale of friendship and resilience, this film combines breathtaking battles and heartfelt moments to deliver a grand conclusion.'
      },
     '17': {
        id: 17,
        title: 'Finding Dory',
        poster: '/poster/find.jpg',
        releaseDate: '2016',
        genre: ['Animation', 'Adventure', 'Comedy'],
        rating: '7.3/10',
        director: 'Andrew Stanton, Angus MacLane',
        description: 'Dory, the endearing blue tang with short-term memory loss, embarks on an unforgettable quest to find her family. Accompanied by Marlin and Nemo, Dory ventures across the ocean and encounters a host of new friends, including Hank the octopus and Bailey the beluga whale. As she pieces together memories of her past, Dory discovers the true meaning of family. This charming and hilarious adventure dives deep into the importance of belonging, acceptance, and never giving up.'
      },
      '18':{
        id: 18,
        title: 'The Incredibles 2',
        poster: '/poster/incr.jpg',
        releaseDate: '2018',
        genre: ['Animation', 'Action', 'Adventure'],
        rating: '7.6/10',
        director: 'Brad Bird',
        description: 'The superpowered Parr family is back and facing new challenges as Elastigirl takes on a high-profile mission to improve the public’s view of superheroes. Meanwhile, Mr. Incredible tackles the role of stay-at-home dad, juggling parenting with saving the world. But when a new villain, the ScreenSlaver, threatens to undermine public trust in superheroes, the family teams up to stop him. This action-packed, heartfelt sequel explores family dynamics and the courage to stand up for what’s right.'
      },
      '19':{
        id: 19,
        title: 'The Fate of the Furious',
        poster: '/poster/fate.jpg',
        releaseDate: '2017',
        genre: ['Action', 'Crime', 'Thriller'],
        rating: '6.6/10',
        director: 'F. Gary Gray',
        description: 'After settling into a quiet life with Letty, Dom is pulled back into the world of crime when a mysterious woman blackmails him into betraying his team. With tensions rising, the crew must come together to stop a global threat. Packed with thrilling car chases, explosive stunts, and unexpected twists, this high-octane installment in the Fast & Furious series tests the bonds of loyalty, family, and the lengths one will go to protect their own.'
      },
      '20': {
    id: 20,
    title: 'Zootopia',
    poster: '/poster/zoo.jpg',
    releaseDate: '2016',
    genre: ['Animation', 'Adventure', 'Comedy'],
    rating: '8.0/10',
    director: 'Byron Howard, Rich Moore',
    description: 'In a world where anthropomorphic animals coexist, rookie bunny cop Judy Hopps dreams of becoming the first of her kind in the police force of Zootopia. However, her aspirations are met with skepticism and prejudice from her fellow officers. Determined to prove herself, Judy finds herself unwittingly teaming up with cunning con artist Nick Wilde, a fox with his own troubled past. Together, they delve into a labyrinth of crime that threatens the very fabric of their city. As they uncover a conspiracy involving missing predator animals, they must race against time to unravel the mystery before chaos reigns, all while confronting their own biases and forming an unlikely friendship that could change their lives forever.'
  },
  '21': {
    id: 21,
    title: 'Spider-Man: Across the Spider-Verse',
    poster: '/poster/spider-verse.jpg',
    releaseDate: '2023',
    genre: ['Animation', 'Action', 'Adventure'],
    rating: '8.8/10',
    director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
    description: 'Miles Morales is back in this thrilling sequel as he faces the daunting challenges of being Spider-Man across multiple dimensions. When a new threat emerges that endangers the very fabric of the multiverse, Miles must team up with other Spider-People from different realities. Each Spider-Person brings unique abilities and perspectives, but their conflicting approaches to heroism create tension and mistrust among them. As they battle formidable foes and navigate the complexities of their interconnected destinies, Miles discovers the true meaning of sacrifice and what it means to be a hero. Will he rise to the occasion and save not only his universe but all of existence?'
  },
  '22': {
    id: 22,
    title: 'Oppenheimer',
    poster: '/poster/oppenheimer.jpg',
    releaseDate: '2023',
    genre: ['Biography', 'Drama', 'History'],
    rating: '8.4/10',
    director: 'Christopher Nolan',
    description: 'In the shadow of World War II, brilliant physicist J. Robert Oppenheimer is entrusted with leading the Manhattan Project to develop the first atomic bomb. As he assembles a team of the brightest minds in science, the weight of his responsibility begins to bear down on him. Behind the scenes, political intrigue and ethical dilemmas mount as Oppenheimer grapples with the consequences of his groundbreaking work. The film intricately weaves his personal relationships and moral conflicts against the backdrop of a nation on the brink of destruction. As the test of the bomb approaches, Oppenheimer must confront the chilling realization that he is about to unleash a force that could alter the course of humanity. Will he be able to live with the repercussions of his actions?'
  },
  '23': {
    id: 23,
    title: 'Barbie',
    poster: '/poster/barbie.jpg',
    releaseDate: '2023',
    genre: ['Adventure', 'Comedy', 'Fantasy'],
    rating: '7.2/10',
    director: 'Greta Gerwig',
    description: 'In Barbie Land, everything is perfect, and everyone has their role, but when Barbie and Ken leave their idyllic world to explore the real one, they quickly realize that life outside their pink paradise is anything but simple. As they face challenges that test their beliefs and relationships, Barbie grapples with her identity and the societal expectations placed upon her. Meanwhile, Ken discovers the meaning of true partnership and the importance of self-worth. Their journey leads them to unexpected allies and eye-opening experiences, ultimately culminating in a showdown against forces that seek to maintain the status quo. Can Barbie and Ken change their destinies, or will they succumb to the pressures of a world that demands conformity?'
  },
  '24': {
    id: 24,
    title: 'Guardians of the Galaxy Vol. 3',
    poster: '/poster/guardians3.jpg',
    releaseDate: '2023',
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: '8.1/10',
    director: 'James Gunn',
    description: 'As the Guardians embark on a new adventure, the team finds themselves in a race against time to save Rocket from a mysterious and powerful enemy. Past secrets and heart-wrenching truths come to light, forcing each Guardian to confront their history and their role within the team. While navigating hostile territories and evading relentless foes, they must work together to unravel a plot that threatens not only their lives but the galaxy itself. With humor and heart at its core, the film explores themes of friendship, loyalty, and redemption, leaving audiences on the edge of their seats as the Guardians face their most personal challenge yet.'
  },
  '25': {
    id: 25,
    title: 'The Marvels',
    poster: '/poster/marvels.jpg',
    releaseDate: '2023',
    genre: ['Action', 'Adventure', 'Fantasy'],
    rating: '7.3/10',
    director: 'Nia DaCosta',
    description: 'When a cosmic anomaly causes Captain Marvel, Ms. Marvel, and Monica Rambeau’s powers to intertwine, the three must learn to work together to confront a formidable new threat to the universe. As they are pulled into various interstellar conflicts, their personalities clash, leading to unexpected revelations about themselves and each other. With time running out and the fate of worlds hanging in the balance, the trio must overcome their differences and harness their unique strengths. The film offers a suspenseful blend of action, humor, and emotional depth as these heroes grapple with their identities and the responsibilities that come with their powers.'
  },
  '26': {
    id: 26,
    title: 'Killers of the Flower Moon',
    poster: '/poster/killers.jpg',
    releaseDate: '2023',
    genre: ['Crime', 'Drama', 'History'],
    rating: '8.0/10',
    director: 'Martin Scorsese',
    description: 'In the 1920s, the Osage Nation is rocked by a series of mysterious murders targeting its wealthy members. As FBI agent Tom White delves into the case, he uncovers a conspiracy that runs deep within the community and the government. The investigation reveals the dark side of American history and the systemic injustices faced by the Osage people. As the body count rises and the truth becomes increasingly elusive, White must navigate a treacherous landscape filled with deceit and betrayal. Can he bring the killers to justice before more lives are lost, or will the forces of corruption silence him?'
  },
  '27': {
    id: 27,
    title: 'Mission: Impossible – Dead Reckoning Part One',
    poster: '/poster/mission-impossible.jpg',
    releaseDate: '2023',
    genre: ['Action', 'Adventure', 'Thriller'],
    rating: '7.9/10',
    director: 'Christopher McQuarrie',
    description: 'Ethan Hunt and his team are tasked with retrieving a deadly weapon that could change the course of history. As they embark on this high-stakes mission, they find themselves facing old enemies and new challenges that test their loyalty to each other. The tension escalates as betrayals come to light, forcing Ethan to confront the shadows of his past. With breathtaking stunts and a gripping narrative, the film keeps viewers on the edge of their seats as the clock ticks down to a potential global catastrophe. Can Ethan and his team navigate the treachery and complete their mission before time runs out?'
  },
  '28': {
    id: 28,
    title: 'Fast X',
    poster: '/poster/fast-x.jpg',
    releaseDate: '2023',
    genre: ['Action', 'Crime', 'Drama'],
    rating: '6.9/10',
    director: 'Louis Leterrier',
    description: 'In the latest chapter of the Fast & Furious saga, Dom Toretto is faced with a shadow from his past that threatens to dismantle everything he has built. As new foes emerge and old rivalries resurface, the stakes have never been higher. Racing against time, Dom and his crew must come together to protect their family and their legacy from a powerful adversary. The film delivers exhilarating car chases, intense confrontations, and emotional moments that highlight the importance of family and loyalty. Will Dom’s strength and determination be enough to overcome the challenges ahead, or will the past come back to haunt him?'
  },
  '29': {
    id: 29,
    title: 'Nimona',
    poster: '/poster/nimona.jpg',
    releaseDate: '2023',
    genre: ['Animation', 'Action', 'Adventure'],
    rating: '7.8/10',
    director: 'Doin B. Rosenthal',
    description: 'In a futuristic world where knights and shapeshifters collide, a young shapeshifter named Nimona becomes an unlikely ally to a knight accused of a crime he didn’t commit. As they evade capture, Nimona’s mischievous nature leads to a series of unpredictable adventures that challenge the norms of their society. As they uncover a conspiracy that threatens both their worlds, they must rely on each other to survive. The film blends humor, action, and heartfelt moments, as Nimona learns about friendship, acceptance, and the power of being true to oneself. Will they be able to expose the truth before it’s too late?'
  },
  '30': {
    id: 30,
    title: 'Napoleon',
    poster: '/poster/napoleon.jpg',
    releaseDate: '2023',
    genre: ['Biography', 'Drama', 'History'],
    rating: '7.5/10',
    director: 'Ridley Scott',
    description: 'From his humble beginnings to his rise as one of history’s most powerful leaders, Napoleon Bonaparte’s life is a turbulent tale of ambition, war, and betrayal. As the young general navigates the political and social upheaval of the French Revolution, his strategic brilliance becomes evident. However, his relentless pursuit of power comes at a cost, leading to personal and political conflicts that shape the course of Europe. The film portrays his complex relationships, particularly with his wife, Josephine, revealing the sacrifices made for love and glory. As battles rage and alliances shift, viewers are drawn into the suspenseful world of a man whose ambition knows no bounds.'
  },
  '31': {
    id: 31,
    title: "The Haunting of Bly Manor",
    poster: "/poster/blymanor.jpg",
    releaseDate: "2021",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: "8.4/10",
    director: "Mike Flanagan",
    description: "When a young au pair arrives at Bly Manor to care for two orphaned children, she quickly realizes that the estate harbors dark secrets. Unseen forces roam the halls, and ghostly figures lurk in the shadows, slowly driving her into a psychological spiral. As she delves deeper into the manor's tragic past, she uncovers the eerie connections between the spirits and the living, culminating in a chilling revelation that blurs the lines between memory, love, and loss."
},
'32': {
    id: 32,
    title: "La La Land",
    poster: "/poster/lalaland.jpg",
    releaseDate: "2016",
    genre: ["Romance", "Drama"],
    rating: "8.0/10",
    director: "Damien Chazelle",
    description: "In the vibrant city of Los Angeles, aspiring actress Mia and dedicated jazz musician Sebastian are drawn together by their love for art and their dreams of success. As they navigate the highs and lows of their ambitions, their romance blossoms against the backdrop of a stunning musical landscape. However, as they achieve their dreams, they must confront the sacrifices and challenges that come with their ambitions. This poignant tale of love and perseverance celebrates the magic of following one's dreams while navigating the complexities of relationships."
},
'33': {
    id: 33,
    title: "Our Planet",
    poster: "/poster/ourplanet.jpg",
    releaseDate: "2019",
    genre: ["Documentary", "Nature"],
    rating: "9.3/10",
    director: "David Attenborough",
    description: "This breathtaking documentary series explores the delicate and often unseen wonders of Earth. With awe-inspiring visuals and narrated by David Attenborough, it journeys through rainforests, arctic tundras, ocean depths, and sun-drenched deserts, showcasing how various ecosystems are interlinked and vulnerable. Alongside its beauty, 'Our Planet' delivers an urgent message about the impact of human activities on these fragile environments, reminding us of the critical need to protect and preserve our natural world for future generations."
},
'34': {
    id: 34,
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    poster: "/poster/fantasticbeasts.jpg",
    releaseDate: "2022",
    genre: ["Fantasy", "Adventure"],
    rating: "6.6/10",
    director: "David Yates",
    description: "In this thrilling installment of the 'Fantastic Beasts' series, Professor Albus Dumbledore enlists magizoologist Newt Scamander to thwart the dark wizard Grindelwald's plans. As tensions rise in the wizarding world, Newt and his friends embark on an adventurous quest across magical landscapes, encountering fantastical creatures and new allies. This captivating film delves into themes of loyalty, friendship, and the fight against tyranny, all set within the enchanting universe created by J.K. Rowling. With dazzling visuals and rich storytelling, it explores the power of unity against dark forces."
},
'35': {
    id: 35,
    title: "Knives Out",
    poster: "/poster/knivesout.jpg",
    releaseDate: "2019",
    genre: ["Mystery", "Thriller"],
    rating: "7.9/10",
    director: "Rian Johnson",
    description: "After the death of renowned crime novelist Harlan Thrombey, Detective Benoit Blanc is enlisted to investigate the circumstances surrounding his mysterious demise. As he interviews the eccentric family members, secrets are unveiled, and hidden motives come to light. This modern whodunit masterfully blends humor and suspense, keeping viewers guessing until the very end. With a stellar ensemble cast and sharp writing, 'Knives Out' pays homage to classic mystery stories while delivering a fresh take on the genre, exploring themes of family dynamics, greed, and deception."
},
'36': {
    id: 36,
    title: "John Wick: Chapter 4",
    poster: "/poster/johnwick4.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Action"],
    rating: "8.5/10",
    director: "Chad Stahelski",
    description: "In the latest chapter of the iconic action franchise, John Wick finds himself facing off against the world's deadliest assassins. As he uncovers a path to defeating the High Table, he must confront powerful enemies and navigate a web of deceit. Packed with breathtaking fight choreography and relentless action sequences, this installment takes viewers on a global journey filled with stunning visuals and emotional stakes. John's quest for vengeance intertwines with themes of loyalty and sacrifice, leaving audiences on the edge of their seats until the explosive conclusion."
},
'37': {
    id: 37,
    title: "Leave the World Behind",
    poster: "/poster/leavetheworldbehind.jpg",
    releaseDate: "2023",
    genre: ["Thriller"],
    rating: "6.0/10",
    director: "Sam Esmail",
    description: "A tense thriller about two families forced together during a mysterious crisis."
},
'38': {
    id: 38,
    title: "Fair Play",
    poster: "/poster/fairplay.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Drama"],
    rating: "7.2/10",
    director: "Chloe Domont",
    description: "A psychological thriller set in the high-stakes world of finance."
},
'39': {
    id: 39,
    title: "Missing",
    poster: "/poster/missing.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Mystery"],
    rating: "7.1/10",
    director: "Nicholas D. Johnson, Will Merrick",
    description: "In this riveting digital-age thriller, a teenage girl uses technology to track down her mother who mysteriously disappears during their vacation. As she navigates through social media, video calls, and digital clues, she uncovers unsettling truths about her mother's past and the people surrounding her. This gripping narrative explores themes of connectivity, isolation, and the dark side of technology, leading to a heart-pounding conclusion that keeps audiences guessing until the very end."
},
'40': {
    id: 40,
    title: "The Covenant",
    poster: "/poster/thecovenant.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "War"],
    rating: "7.3/10",
    director: "Guy Ritchie",
    description: "In this military thriller, a former soldier is drawn back into action when a mission to rescue an ally turns deadly. As he navigates the treacherous landscape of conflict and betrayal, he must confront his own loyalties and the harsh realities of war. The film combines intense action sequences with a gripping narrative that examines the costs of loyalty and redemption, ultimately posing questions about the sacrifices made in the name of duty and friendship."
},
'41': {
    id: 41,
    title: "Luther: The Fallen Sun",
    poster: "/poster/lutherfallen.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Crime"],
    rating: "7.5/10",
    director: "Jamie Payne",
    description: "Following the gritty detective John Luther, this film sees him on the run after being falsely accused of a crime. As he seeks to prove his innocence, he dives deep into the criminal underworld, uncovering a serial killer's dark secrets. The narrative blends suspense and psychological drama, showcasing Luther's relentless pursuit of justice and the toll it takes on his personal life. 'Luther: The Fallen Sun' promises a thrilling experience filled with moral dilemmas and the quest for redemption."
},

'42': {
    id: 42,
    title: "65",
    poster: "/poster/65.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Sci-Fi"],
    rating: "6.0/10",
    director: "Scott Beck, Bryan Woods",
    description: "In this thrilling sci-fi adventure, a pilot crash-lands on a prehistoric Earth and must navigate a landscape filled with dangerous creatures while searching for a way back home. Facing relentless threats and battling for survival, he encounters a young girl who becomes his ally in this harsh new world. The film explores themes of survival, courage, and the bond formed in adversity, delivering a visually stunning experience that immerses viewers in a forgotten era of Earth's history."
},

'43': {
    id: 43,
    title: "True Spirit",
    poster: "/poster/truespirit.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Adventure"],
    rating: "7.0/10",
    director: "Sarah Spillane",
    description: "Based on the inspiring true story of Jessica Watson, a young sailor who set out to become the youngest person to sail solo around the world. As she faces the challenges of the open sea, including fierce storms and self-doubt, Jessica's journey becomes a testament to resilience and determination. 'True Spirit' captures the spirit of adventure and the power of dreams, emphasizing the importance of following one's passion despite the odds."
},

'44': {
    id: 44,
    title: "Heart of Stone",
    poster: "/poster/heartofstone.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Action"],
    rating: "5.5/10",
    director: "Tom Harper",
    description: "In this gripping action thriller, an intelligence operative must protect a valuable asset from a dangerous enemy organization. As she navigates a web of betrayal and high-stakes intrigue, she is forced to confront her own demons while racing against time. The film delivers heart-pounding action sequences, complex characters, and a narrative that examines the moral implications of espionage and loyalty in a world fraught with danger."
},

'45': {
    id: 45,
    title: "Ghosted",
    poster: "/poster/ghosted.jpg",
    releaseDate: "2023",
    genre: ["Romantic", "Comedy"],
    rating: "6.2/10",
    director: "Dexter Fletcher",
    description: "In this charming romantic comedy, a man falls for a mysterious woman he meets on a trip, only to discover she is a secret agent. As their relationship unfolds amidst espionage and danger, he must navigate the complexities of love in a world of secrets. With a blend of humor and heart, 'Ghosted' explores the unpredictability of romance while delivering laugh-out-loud moments and thrilling escapades."
},

'46': {
    id: 46,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    poster: "/poster/hungergames.jpg",
    releaseDate: "2023",
    genre: ["Thriller", "Adventure"],
    rating: "8.0/10",
    director: "Francis Lawrence",
    description: "Set decades before Katniss Everdeen’s story, this prequel delves into the origins of the Hunger Games. It follows a young Coriolanus Snow as he mentors a tribute in the 10th Hunger Games, exploring themes of ambition, power, and moral corruption. As he navigates the brutal competition, the film presents a captivating narrative that examines the dark roots of the dystopian world. With stunning visuals and intense storytelling, it redefines the saga while offering a fresh perspective on its iconic themes."
},

'47': {
    id: 47,
    title: "Inception",
    poster: "/poster/inception.jpg",
    releaseDate: "2010",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: "8.8/10",
    director: "Christopher Nolan",
    description: "'Inception' follows Dom Cobb, a skilled thief who specializes in corporate espionage by infiltrating the dreams of others. Tasked with planting an idea in a target's subconscious, Cobb assembles a team for the most challenging job of their careers. As they navigate the complexities of dreams within dreams, they face unexpected dangers that blur the line between reality and illusion. This mind-bending thriller is a visual masterpiece that explores themes of memory, loss, and the nature of reality."
},

'48': {
    id: 48,
    title: "A Haunting in Venice",
    poster: "/poster/hauntinginvenice.jpg",
    releaseDate: "2023",
    genre: ["Mystery", "Horror"],
    rating: "7.3/10",
    director: "Kenneth Branagh",
    description: "In this atmospheric mystery, renowned detective Hercule Poirot is invited to a haunted mansion in Venice for a séance. When a guest is found dead, Poirot must unravel the mystery among the supernatural elements surrounding him. This adaptation of Agatha Christie's novel combines suspense and horror, delivering a chilling narrative that keeps audiences on the edge of their seats while exploring themes of grief and the unknown."
},

'49': {
    id: 49,
    title: "The Equalizer 3",
    poster: "/poster/equalizer3.jpg",
    releaseDate: "2023",
    genre: ["Action", "Thriller"],
    rating: "7.5/10",
    director: "Antoine Fuqua",
    description: "In this explosive third installment, Robert McCall finds himself in Southern Italy, where he discovers a local crime syndicate threatening the lives of innocent people. Using his unique skills to protect the vulnerable, McCall confronts the dangers of his past while seeking justice. The film delivers intense action sequences, character-driven storytelling, and a reflection on morality and redemption, solidifying McCall's legacy as a relentless force for good."
},

'50': {
    id: 50,
    title: "The Social Network",
    poster: "/poster/thesocialnetwork.jpg",
    releaseDate: "2010",
    genre: ["Biography", "Drama"],
    rating: "7.7/10",
    director: "David Fincher",
    description: "'The Social Network' chronicles the rise of Facebook and its co-founder, Mark Zuckerberg. Starting from his days at Harvard University, the film delves into the legal battles and personal conflicts that arise as Zuckerberg creates the groundbreaking social media platform. With sharp writing and compelling performances, this drama highlights themes of ambition, betrayal, and the complexities of friendship in the age of technology."
},

'51': {
    id: 51,
    title: "Get Out",
    poster: "/poster/getout.jpg",
    releaseDate: "2017",
    genre: ["Horror", "Thriller"],
    rating: "7.7/10",
    director: "Jordan Peele",
    description: "'Get Out' is a groundbreaking horror-thriller that intricately weaves social commentary with suspense. The film follows Chris Washington, a young African-American man who visits the family estate of his white girlfriend, where he uncovers a disturbing secret that turns into a fight for his survival."
}, 

'52': {
    id: 52,
    title: "The Notebook",
    poster: "/poster/thenotebook.jpg",
    releaseDate: "2004",
    genre: ["Romance", "Drama"],
    rating: "7.8/10",
    director: "Nick Cassavetes",
    description: "'The Notebook' is an emotionally charged romantic drama based on Nicholas Sparks' bestselling novel. The film chronicles the sweeping love story of Noah Calhoun and Allie Hamilton, whose romance blossoms one summer in the 1940s in South Carolina. Despite their deep connection, they come from different social classes, leading to heartbreak and separation. Years later, Noah, still in love, restores their old house, hoping to win Allie's heart again. As Allie prepares to marry another man, she discovers Noah's letters, which rekindle their past. The film beautifully captures the essence of first love, the complexities of relationships, and the impact of choices made over time. Through its poignant storytelling and powerful performances, 'The Notebook' explores the themes of love, memory, and the enduring bond that transcends time and circumstance."
},
'53': {
    id: 53,
    title: "13th",
    poster: "/poster/13th.jpg",
    releaseDate: "2016",
    genre: ["Documentary", "Politics"],
    rating: "8.2/10",
    director: "Ava DuVernay",
    description: "'13th' is a compelling documentary that delves into the historical roots of racial inequality in the United States, examining how the 13th Amendment—while abolishing slavery—contains a loophole that allows for the mass incarceration of African Americans. Director Ava DuVernay masterfully combines archival footage, interviews, and statistics to illustrate how the prison industrial complex has disproportionately targeted Black communities. The film features insights from scholars, activists, and politicians who dissect the systemic racism embedded in the American legal system. Through its incisive analysis and powerful storytelling, '13th' encourages viewers to confront uncomfortable truths about race, justice, and the ongoing struggle for civil rights. It serves as a rallying cry for change and a call to action against institutional oppression."
},
'54': {
    id: 54,
    title: "Hereditary",
    poster: "/poster/hereditary.jpg",
    releaseDate: "2018",
    genre: ["Horror", "Drama"],
    rating: "7.3/10",
    director: "Ari Aster",
    description: "'Hereditary' is a haunting psychological horror film that delves into the complexities of grief and family dynamics. After the death of her secretive mother, Annie Graham, an artist struggling with her own trauma, uncovers dark secrets about her family’s ancestry. As Annie and her family grapple with their loss, they are haunted by disturbing occurrences and a sinister presence that threatens to unravel their lives. The film skillfully blends supernatural elements with emotional depth, exploring themes of inherited trauma, mental illness, and the ties that bind families together. With its chilling atmosphere and unsettling imagery, 'Hereditary' invites audiences into a nightmarish world where the past looms large, and the line between sanity and madness blurs."
},
'55': {
    id: 55,
    title: "P.S. I Love You",
    poster: "/poster/psiloveyou.jpg",
    releaseDate: "2007",
    genre: ["Romance", "Drama"],
    rating: "7.0/10",
    director: "Richard LaGravenese",
    description: "'P.S. I Love You' is a heartfelt romantic drama that tells the story of Holly Kennedy, a young widow grappling with the loss of her husband, Gerry. As Holly navigates her grief, she discovers that Gerry has left her a series of letters, each containing messages of love, hope, and encouragement to help her move on with her life. Each letter leads her on a journey of self-discovery and healing, pushing her to embrace new experiences and the possibilities of life after loss. The film explores themes of love, loss, and the enduring power of memories, beautifully illustrating how love can transcend even death. Through its poignant storytelling and touching performances, 'P.S. I Love You' resonates with anyone who has experienced the depths of love and the pain of goodbye."
},
'56': {
    id: 56,
    title: "Won't You Be My Neighbor?",
    poster: "/poster/wontyoubemyneighbor.jpg",
    releaseDate: "2018",
    genre: ["Documentary", "Biography"],
    rating: "8.0/10",
    director: "Morgan Neville",
    description: "'Won't You Be My Neighbor?' is an insightful documentary that celebrates the life and legacy of Fred Rogers, the beloved host of the iconic children's television show 'Mister Rogers' Neighborhood.' Through a blend of interviews, archival footage, and personal anecdotes, the film explores Rogers' philosophy of kindness, empathy, and respect, highlighting his unwavering dedication to children's emotional well-being. The documentary sheds light on how Rogers addressed complex topics like grief, disability, and race with honesty and sensitivity, making him a cherished figure in American culture. As the film unfolds, it poignantly captures the essence of what it means to be a good neighbor and the importance of compassion in a world often filled with divisiveness. It serves as a reminder of the impact one person can have on the lives of many."
},
'57': {
    id: 57,
    title: "A Quiet Place",
    poster: "/poster/aquietplace.jpg",
    releaseDate: "2018",
    genre: ["Horror", "Sci-Fi"],
    rating: "7.5/10",
    director: "John Krasinski",
    description: "'A Quiet Place' is a masterfully crafted horror film set in a post-apocalyptic world where sound-sensitive creatures hunt humans. The story follows the Abbott family, who live in silence to survive, using sign language to communicate and developing strategies to evade the lethal beings that react violently to any noise. The family's daily routine is filled with tension as they navigate their environment, which is fraught with danger at every turn. When a tragic accident disrupts their fragile existence, the family must confront their deepest fears and fight for survival. This gripping narrative explores themes of family, sacrifice, and the lengths one will go to protect loved ones. With its innovative storytelling and minimal dialogue, 'A Quiet Place' immerses viewers in a world of suspense and emotion, leaving them on the edge of their seats."
},
'58': {
    id: 58,
    title: "Crazy, Stupid, Love",
    poster: "/poster/crazystupidlove.jpg",
    releaseDate: "2011",
    genre: ["Romance", "Comedy"],
    rating: "7.4/10",
    director: "Glenn Ficarra, John Requa",
    description: "'Crazy, Stupid, Love' is a refreshing romantic comedy that intertwines the lives of multiple characters as they navigate love, heartbreak, and self-discovery. The film begins with Cal Weaver, who is devastated to learn that his wife Emily wants a divorce. Struggling with his new single life, he meets Jacob Palmer, a smooth-talking bachelor who takes him under his wing and teaches him the art of dating. Meanwhile, Emily grapples with her feelings for Cal and their teenage son, who is infatuated with his babysitter. As these stories unfold, the film explores the ups and downs of relationships, revealing that love can be found in unexpected places. With its blend of humor and heartfelt moments, 'Crazy, Stupid, Love' offers a relatable and entertaining look at the complexities of modern romance."
},
'59': {
    id: 59,
    title: "The Act of Killing",
    poster: "/poster/theactofkilling.jpg",
    releaseDate: "2012",
    genre: ["Documentary", "History"],
    rating: "8.0/10",
    director: "Joshua Oppenheimer",
    description: "'The Act of Killing' is a groundbreaking documentary that challenges the traditional narrative of historical atrocities by focusing on the Indonesian mass killings of 1965-66. The film invites former death squad leaders to reenact their real-life killings in a variety of cinematic styles, including musicals and westerns, blurring the lines between reality and fiction. As they relive their past actions, the film reveals the psychological impact of their deeds and the culture of impunity that allows them to boast about their actions without remorse. Through this unorthodox approach, 'The Act of Killing' forces viewers to confront the moral complexities of violence and the haunting legacy of trauma, making it a powerful exploration of humanity's darkest impulses."
},
'60': {
    id: 60,
    title: "It Follows",
    poster: "/poster/itfollows.jpg",
    releaseDate: "2014",
    genre: ["Horror", "Mystery"],
    rating: "6.8/10",
    director: "David Robert Mitchell",
    description: "'It Follows' is a unique horror film that introduces a haunting premise centered on a supernatural entity that relentlessly pursues its victims after they have a sexual encounter. The story follows Jay, a teenager who, after a date with her new boyfriend, finds herself targeted by this mysterious force. As she learns more about the curse, Jay and her friends must confront their fears and navigate their relationships while trying to evade the relentless threat. The film is distinguished by its unsettling atmosphere, clever use of tension, and haunting cinematography, making it a standout in the horror genre. It delves into themes of vulnerability, sexuality, and the anxieties of adolescence, leaving viewers with an unsettling sense."
},
'61': {
    id: 61,
    title: "Jiro Dreams of Sushi",
    poster: "/poster/jirodreamsofsushi.jpg",
    releaseDate: "2011",
    genre: ["Documentary", "Food"],
    rating: "7.9/10",
    director: "David Gelb",
    description: "'Jiro Dreams of Sushi' is a captivating documentary that profiles Jiro Ono, an esteemed sushi chef and owner of a renowned Tokyo restaurant. The film chronicles Jiro's lifelong dedication to his craft, showcasing the meticulous techniques and rigorous standards that have earned him three Michelin stars. Through intimate interviews and stunning visuals, the documentary highlights Jiro's philosophy of pursuing perfection in every aspect of sushi-making, from selecting the finest ingredients to mastering the art of presentation. It also explores the dynamics of Jiro's relationship with his sons, particularly his elder son Yoshikazu, who is set to inherit the family business. The film is not only a celebration of culinary artistry but also a meditation on ambition, tradition, and the pursuit of excellence, leaving audiences inspired by Jiro's unwavering commitment to his craft."
}
};
  const movie = moviesData[movieId] || {
    id: 'not-found',
    title: 'Movie Not Found',
    description: 'The requested movie could not be found.',
    releaseDate: 'N/A',
    poster: '/api/placeholder/300/450'
  };

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <div className="details-content">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <p className="release-date">Release Date: {movie.releaseDate}</p>
            <p className="director">Director: {movie.director}</p>
          </div>
          <div className="genre-tags">
  {movie.genre && movie.genre.map(g => (
    <span key={g} className="genre-tag">{g}</span>
  ))}
</div>
<p className="description">{movie.description}</p>
<div className="rating">
  <h3>Rating</h3>
  <p>{movie.rating}</p>
</div>
<div className="action-buttons">
  <button className="play-button">Play</button>
  <button className="add-to-list">Add to List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
