export const data = [
  {
    title: "Nomi",
    url: "movie-database",
    tools: "Next · SASS · Adobe XD · Adobe Photoshop",
    description:
      "Nomi is an interactive web application that allows users to browse and track their favourite movies based on ratings, popularity or release date.",
    overview:
      "Nomi is an interactive web application that allows users to browse any movie and view its relevant information. The user can sort movies by popularity, top rated, currently playing and upcoming. This was built using Next.js and Sass by a team of four, and draws from TMdB's built in API to gather all of the data in relation to whichever movie is being searched (e.g., Movie Backdrops, The Cast, Rating, etc.).",
    id: "1",
    image: "/assets/nomi-mockup.png",
    alt: "An interactive Movie Database built with Next.js and Sass",
    github: "https://github.com/JedBorseth/movie-database",
    liveSite: "https://nomi.jalencameron.com",
    timeline: "5 Weeks",
    roles: "UI Designer · Developer · Debugger",
    designParagraph1:
      "These mockups were created using Adobe Photoshop and XD, keeping a mobile-first approach in mind. I wanted to maintain well documented folder groups as well to show UI changes in response to various user interactions",
    designParagraph2:
      "As for the design of this project, I approached it with the idea that I wanted a clean and uncluttered interface that only displays the movie poster at first. Hovering over the poster itself on Desktop would provide some movie information, while clicking on the poster would take you to the individual movie page with additional info.",
    devParagraph1:
      "After completion of the high fidelity mockups, my teammates and I split up the workload and decided to begin working on the development of the app itself. Two focused mainly on functionality and two focused on design (fortunately there was still some overlap in between). For this particular assignment I was tasked with styling the App’s UI, but did keep an eye on the development of certain features as well in case of any bugs or errors. ",
    takeaway1:
      "This was the first project where I had to work in a team environment and use React.js as the main framework. I was able to see the in’s and out’s of making API calls, as well as using components to provide extra functionality for a better interactive website. Personally, it was quite interesting seeing how the data was fetched for both the movie information and cast list, and then implemented in combination with styling and conditional rendering (e.g., &&).",
    takeaway2:
      "Communication between the team is also something I would like to highlight. Overall we did a good job discussing issues and how we could better optimize the site, yet we still came across a few merge conflicts and functional issues throughout the process. I think it’s definitely something we could have improved upon over time. It was also good to get used to using GitHub in general, as well as communication platforms such as Slack.",
    designImage1: "/assets/nomi-folders.png",
    desAlt1:
      "The folder structure I used when building a Mockup for my Movie Database in Photoshop",
    designImage2: "/assets/nomi-hover.png",
    desAlt2: "Movie List displaying the hover effect I wanted to use",
    codeblock: ` {/* Banner section with the movie title and basic stats  */}
    {movie.title && (
      <section className="hero">
        <div className="movie-banner">
          {/* Dark filter on it during tablet/desktop media query  */}

          <Image
            src={imgPath + "w780/" + movie.backdrop_path}
            alt={movie.title}
            width="1920"
            height="700"
            objectFit="cover"
            objectPosition="10% 10%"
          />
        </div>
        <div className="movie-rating">
          <h1>{movie.title}</h1>
          <div>
            <p className="high">
              {Math.floor(movie.vote_average * 10) / 10}
            </p>
            <p>{movie.release_date}</p>
            {favorites && (
              <LikeBtn id={id} favList={favorites[0].favorites} />
            )}
          </div>

        </div>
      </section>
    )}`,
    figcaption:
      "For example, understanding what this conditional statement was rendering allowed me to apply appropriate styling (e.g., width & height, where to place the ratings).",
  },
  {
    title: "Weather App",
    url: "weather-app",
    tools: "Next · Tailwind · Adobe XD",
    description:
      "A Weather Application that utilizes an API Key to fetch short-term forecasts for over 200,000 known cities in the world.",
    overview:
      "This Weather Application utilizes an API Key (from openweathermap.com) to fetch short-term forecasts for over 200,000 known cities in the world. The user can search for a city and be provided with the current temperature and description, as well as the sunrise and sunset in Pacific Standard Time. The background images, taken from Unsplash, are dynamically generated based on what the weather is like for the day.",
    id: "2",
    image: "/assets/weather-mockup.png",
    alt: "A Weather Application that pulls data from an API and provides realtime forecasts",
    github: "https://github.com/JalenCameron/Weather-Application",
    liveSite: "https://weatherapp.jalencameron.com",
    timeline: "1 Week",
    roles: "UI Designer · Front-End Developer",
    designParagraph1:
      "My goal for this website was to maintain a simple layout, and utilize Unsplash’s free image library in order to provide backdrops in relation to the current weather. I actually needed a bit more time than I initially anticipated to find images that worked. This was due to how many different sub-categories there are that describe the weather aside from the sun, rain, cloudy, etc. I also had to take into account that some images could be distorted due to screen size, so it was a very 'trial and error' type of process.",
    devParagraph1:
      "After creating the Movie Database Project I wanted to explore making API calls on my own. This project in particular was created following a tutorial online, although I did modify the code to make it my own. To start, it did involve researching some of the terms used and the syntax involved. This allowed me to understand what I was writing out, and where I could look for improvements. For instance, I wrote out a conditional statement to change the background depending on which weather icon was displayed, and I also applied those same principles towards displaying a greeting when there was no information currently rendered.",
    takeaway1:
      "This was a very fun project to bring to life, and it was also a great way for me to familiarize myself with Next.js and Tailwind. I was able to practice how to access data from props (which was initially a tricky concept for me to grasp having had very limited knowledge of React prior to this project). I actually found out that using Axios to make HTTP requests was more useful than just a regular Fetch API. It was a lot less work writing out .get() or .then(), and there was no need to convert my request to a JSON string either. I was also able to get a handle on the syntax for a new styling framework called Tailwind. ",
    designImage1: "/assets/weather-bg.png",
    desAlt1:
      "A dynamic background is generated depending on the Weather Code provided when you search for a city",
    takeawayImage: "/assets/weather-axios.png",
    takeawayAlt: "Making use of axios instead of a regular Fetch API",
    codeblock: `if(weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
    // If the weather indicates that it's a thunderstorm:
    return (
        <Image
            src="https://images.unsplash.com/photo-1504123010103-b1f3fe484a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A thunderstorm in the clouds"
            layout="fill"
            className="object-cover"
        />
    )
    }`,
    figcaption:
      "A conditional statement to display a certain background image depending on weather conditions",
  },
  {
    title: "Tic Tac Toe",
    url: "tic-tac-toe",
    tools: "React · CSS",
    description:
      "An interactive game built with JavaScript and basic CSS styling",
    overview:
      "For those that may not be familiar with the game, Tic Tac Toe is a two-player game in which the players fill up nine empty rectangles in a table with either an X or an O when it is their turn. If someone gets three in a row (either vertically, horizontally or diagonally) that player wins. Honestly, I figured this would be a good way to familiarize myself with the basics of JavaScript while creating a simple and interesting project.",
    id: "3",
    image: "/assets/game-mockup.png",
    alt: "A fun game of Tic Tac Toe built with React.js and CSS",
    github: "https://github.com/JalenCameron/Vanilla-JavaScript-Tic-Tac-Toe",
    liveSite: "https://tictactoe.jalencameron.com",
    timeline: "2 Days",
    roles: "UI Designer · Front-End Developer",
    designParagraph1:
      "To maintain the theme of the game, I wanted to implement a grid container and have three rows of three. The grid needed to be clickable to allow for players to place down their associated piece (either X or O).  As for the players themselves, I simply applied a font and colour scheme to give them their own unique style",
    devParagraph1:
      "This game was built with some basic front-end syntax, and uses simple logic to complete some validation checks. The For Loop will look through each square and check whether the gameState matches with an array of Winning Conditions I set up ealier, while the roundDraw variable simply checks whether the board is filled or not.",
    takeaway1:
      "This project was a lot of fun to build. I had to think of each step that a player would take, and the functions that would allow the game to flow from one step to another. Initially I figured it would be easy to create this project, but I found out fairly quickly that that was not the case. The handleResults() function was not easy to do and required some extra logic (and help online) in order to come up with the best solution. I think if I were to revisit this game in the future I’d want to try again without the help of outside resources. I’d also want to add a bit more functionality, for example an Input for Player names. Or a scoreboard.",
    designImage1: "/assets/game-grid.png",
    desAlt1: "A photo displaying the grid and styling I used for the game",
    devImage1: "",
    devAlt1: "",
    codeblock: `function handleResults() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    displayStatus.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  // Also checking whether there are any cells that haven't been chosen yet
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    displayStatus.innerHTML = tieMessage();
    gameActive = false;
    return;
  }
}`,
    figcaption:
      "A function that checks if there are 3 matches across the board",
  },
  {
    danial:
      "Thanks for all your help Danial! Wish you all the best in the future!",
    reilly:
      "Reilly! Thanks for helping me out with my designs, you're a rockstar!",
    title: "Portfolio Project",
    url: "portfolio",
    tools: "Next · Tailwind · Figma",
    description:
      "A portfolio website that was designed and developed as a platform to showcase my skills in UI/UX Design and Front-End Web Development.",
    overview:
      "My portfolio was created with the intention to showcase my work as a developer so far. Utilizing an agile approach, I continuously implemented and revised my designs and some development features. I took it upon myself to study Next.js (and coupled that with Tailwind CSS) to build this site, with the intention that it would allow for future expansion and greater interactivity.",
    id: "4",
    image: "/assets/portfolio-mockup.png",
    alt: "Jalen Cameron's Portfolio Project",
    github: "https://github.com/JalenCameron/next.js-portfolio",
    liveSite: "/",
    timeline: "2 Weeks",
    roles: "Front-End Developer · UI Designer",
    designParagraph1:
      "I started off looking up other portfolios to draw inspiration from, which allowed me to make use of InVision’s Mood Board to come up with a style I liked. I then created a style guide to reflect the kinds of standards and consistency I wanted to display across each page of this project. It also helped to serve as a reminder for myself as to the kind of theme I wanted to have.",
    designParagraph2:
      "I found it was a lot easier to create a content plan and information architecture to determine what I wanted my portfolio to have. I then followed up with a low-fidelity mockup of my design on Figma, where I focused on a mobile-first approach before moving on to desktop.",
    devParagraph1:
      "To make my Works section more manageable, I decided to create a data file that would contain a list of each project's information. I could then call upon that file using a dynamic route to output the content onto my individual projects page. Essentially this will make adding/deleting projects really efficient and convenient whenever I decide to update my portfolio.",
    devParagraph2:
      "I also wanted more practice with React components and Tailwind, as I knew these would make things easier for the overall build time of my portfolio. For example, having my Navigation Bar built as a component let me maintain consistency across each page I created on my site. Using Tailwind CSS I could also style every element accordingly within that component, as opposed to attaching a className and adding styles to a stylesheet. ",
    takeaway1:
      "This portfolio was a great way for me to see how far I’ve come in terms of both design and development. As someone who had very little knowledge of website creation in general, it was very satisfying being able to look at what I came up with and say “I know how to build that now.” While I still have room for improvement, overall my journey has been very fulfilling. I’m also grateful for having come up with a style guide, content plan and information architecture, because initially I struggled to decide on how I wanted to represent myself and the work I’ve done but having that structure allowed me to focus more on the work and not backtrack on my decisions.",
    takeaway2:
      "As for the development itself, I really enjoyed trying to figure out dynamic routing and linking that page to the data file I created. It’s something I definitely want to improve on, as I had to look online and get help from my colleagues on the best way to approach it. I've always been one to keep looking for ways to better myself, and this experience has been no different. I hope I can continue to grow and expand my portfolio in the years to come.",
    designImage1: "/assets/style-guide.png",
    desAlt1:
      "A section of my style guide, where I determined my primary and secondary colours",
    designImage2: "/assets/low-fidelity.png",
    desAlt2:
      "A low-fidelity mockup of my portfolio. Based on a Content Plan and Information Architecture.",
    devImage1: "/assets/data-file.png",
    devAlt1: "",
    codeblock2: `<h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8 mb-4">
    Get in Touch.
</h2>`,
    figcaption:
      "Utilizing Tailwind CSS in the header to generate a left-sided border and proper font-sizing",
  },
  {
    title: "Summer Panda Cafe",
    url: "capstone",
    tools: "WordPress · PHP · WooCommerce · Figma",
    description:
      "A fully customized Website built for a cafe that offers online ordering and other vendor application features. The site was developed using WordPress and WooCommerce plugins in a collaborative team environment",
    overview:
      "Summer Panda Cafe is a restaurant that has opened its second location in Burnaby, BC. Their main specialty is Bingsu, although they do offer an assortment of drinks and other desserts, as well as Seasonal Products. Currently they're promoting their new Online Ordering feature, which would allow customers to order ahead of time and pickup in store.",
    id: "5",
    image: "/assets/coming-soon-mockup.png",
    alt: "A Cafe website built through PHP, WordPress and Sass",
    github: "https://github.com/htpwebdesign/panda-cafe",
    liveSite: "https://summerpandacafe.bcitwebdeveloper.ca/",
    timeline: "4 Weeks",
    roles: "Front-End Developer · Debugger",
    designParagraph1:
      "Currently in progress and will be updated when finished!",
    devParagraph1: "Currently in progress and will be updated when finished!",
    takeaway1: "Currently in progress and will be updated when finished!",
    designImage1: "",
    desAlt1: "Currently in progress and will be updated when finished!",
    devImage1: "",
    devAlt1: "Currently in progress and will be updated when finished!",
    codeblock: ``,
    figcaption: "Currently in progress and will be updated when finished!",
  },
];
