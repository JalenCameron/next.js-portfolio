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
      "The mockups for this project were created using Adobe Photoshop and XD, keeping a mobile-first approach in mind. I decided to maintain well documented folder groups to show UI changes in response to various user interactions",
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
      "My goal for this website was to maintain a simple layout, and utilize Unsplash’s free image library in order to provide backdrops in relation to the current weather. I actually needed a bit more time than I initially anticipated to find images that worked. This was due to how many different sub-categories there are that describe the weather aside from the sun, rain and clouds. I also had to take into account that some images could be distorted due to screen size, so it was a very 'trial and error' type of process.",
    devParagraph1:
      "After creating the Movie Database Project I wanted to explore making API calls on my own. This project in particular was inspired by a tutorial I came across, which in turn allowed me to explore new languages. To start, it involved researching some of the terms used and the syntax involved. This helped me to understand what I was writing out, and where I could look for improvements. For instance, I wrote out a conditional statement to change the background depending on which weather icon was displayed, and I also applied those same principles towards error handling when there was no information currently rendered (or it was entered incorrectly).",
    takeaway1:
      "This was a very fun project to bring to life, and it was also a great way for me to familiarize myself with Next.js and Tailwind. I was able to practice how to access data from props (which was initially a tricky concept for me to grasp, and still could be going forward haha). I actually found out that using Axios to make HTTP requests was more useful than just a regular Fetch API. It was a lot less work writing out .get() or .then(), and there was no need to convert my request to a JSON string either. I was also able to get a handle on the syntax for a new styling framework called Tailwind.",
    designImage1: "/assets/weather-bg.png",
    desAlt1:
      "A dynamic background is generated depending on the Weather Code provided when you search for a city",
    takeawayImage: "/assets/weather-axios.png",
    takeawayAlt: "Making use of axios instead of a regular Fetch API",
    codeblock: `if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
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
      "Here is a conditional statement to display a certain background image depending on the weather conditions",
  },
  {
    title: "Tic Tac Toe",
    url: "tic-tac-toe",
    tools: "JavaScript · CSS",
    description:
      "An interactive game built with JavaScript and basic CSS styling",
    overview:
      "For those that may not be familiar with the game, Tic Tac Toe is a two-player game in which the players fill up nine empty rectangles in a table with either an X or an O when it is their turn. If someone gets three in a row (either vertically, horizontally or diagonally) that player wins. Honestly, I figured this would be a good way to familiarize myself with the basics of JavaScript while creating a simple and interesting project.",
    id: "3",
    image: "/assets/game-mockup.png",
    alt: "A fun game of Tic Tac Toe built with JavaScript and CSS",
    github: "https://github.com/JalenCameron/Vanilla-JavaScript-Tic-Tac-Toe",
    liveSite: "https://tictactoe.jalencameron.com",
    timeline: "2 Days",
    roles: "UI Designer · Front-End Developer",
    designParagraph1:
      "To maintain the theme of the game, I wanted to implement a grid container and have three rows of three. The grid needed to be clickable to allow for players to place down their associated piece (either X or O).  As for the players themselves, I simply applied a font and colour scheme to give them their own unique style",
    devParagraph1:
      "This game was built with some basic front-end syntax, and uses simple logic to complete some validation checks. The for loop will look through each square and check whether the gameState matches with an array of 'Winning Conditions' I set up earlier, while the roundDraw variable simply checks whether the board is filled or not.",
    takeaway1:
      "This project was a lot of fun to build. I had to think of each step that a player would take, and the functions that would allow the game to flow from one step to another. Initially I figured it would be easy to create this project, but I found out fairly quickly that that was not the case. The handleResults() function was not easy to do and required some extra logic (and help online) in order to come up with the best solution. I think if I were to revisit this game in the future I’d want to try again without the help of outside resources. I’d also want to add a bit more functionality, for example an Input for Player names. Or a scoreboard.",
    designImage1: "/assets/game-grid.png",
    desAlt1: "A photo displaying the grid and styling I used for the game",
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
      "Here my function is checking if there are 3 matches across the board, and if not then it checks for a potential tie",
  },
  {
    danial:
      "Thanks for all your help Danial! Wishing you all the best in the future buddy!",
    reilly:
      "Reilly! Thanks for helping me out with my designs, you're a rockstar and a great friend!",
    title: "Portfolio Project",
    url: "portfolio",
    tools: "Next · Tailwind · Figma",
    description:
      "A portfolio website that was designed and developed as a platform to showcase my skills in UI/UX Design and Front-End Web Development.",
    overview:
      "My portfolio was created with the intention to showcase my work as a developer so far. Utilizing an agile approach, I continuously implemented and revised my designs and updated development features. I took it upon myself to study Next.js (and coupled that with Tailwind CSS) to build this site, with the intention that it would allow for future expansion and greater interactivity.",
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
      "Here I'm utilizing Tailwind CSS in the header to generate a left-sided border and proper font-sizing all within the element itself",
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
    image: "/assets/spc-mockup.png",
    alt: "A Cafe website built through PHP, WordPress and Sass",
    github: "https://github.com/htpwebdesign/panda-cafe",
    liveSite: "https://summerpandacafe.bcitwebdeveloper.ca/",
    timeline: "4 Weeks",
    roles: "Front-End Developer · Debugger",
    designParagraph1:
      "Creation of a content plan was necessary for this project. My team determined each piece of information that would be required on the site, which then led to mapping out the layout of the page using low-fidelity wireframes. We then consulted with the WordPress template hierarchy in order to determine what pages corresponded with the correct template(s)",
    designParagraph2:
      "In terms of styling we also employed the Underscores Sass theme, which gave us a lot of extra creativity to work with. Having each section broken down into a sub-folder (e.g., typography, variables, etc.) was very beneficial in the long run when working on a huge site such as this.",
    devParagraph1:
      "Due to this website being created with WordPress, we built custom post types and taxonomies, as well as custom fields to allow the site owner to update their content dynamically whenever they needed to. We also configured tax queries and loops to ensure the appropriate content was displayed accurately on each page.",
    takeaway1:
      "Honestly this project allowed me to get hands on experience with project planning and working collaboratively as a web developer. Unlike individual projects, planning became important before prototyping and development began. Knowing how to split up the tasks into small tickets and assigning the person for the right job was the key takeaway for me from this project. We used Asana to manage and monitor the progress and Slack for general communication. Overall, every planned feature was implemented to the expected specification and the project was delivered to the best of our ability.",
    takeaway2:
      "I would also like to highlight that familiarizing myself with WordPress functions and templates was also fairly important. It was great being able to understand PHP and implement it in ways that benefitted the creation of the site, and it really helped flesh out my understanding of JavaScript concepts as well.",
    designImage1: "/assets/spc-wireframe.png",
    desAlt1:
      "A low-fidelity mockup of our Cafe home page, featuring template pages for the appropriate sections",
    designImage2: "/assets/low-fidelity.png",
    desAlt2:
      "Creatively adding pictures and aesthetic colours to each menu category we created",
    codeblock: `<article class="job">
    <?php
    if ( function_exists ( 'get_field' ) ) {
      if ( get_field( 'job_name' ) ) {
        echo "<h3>";
        the_field( 'job_name' );
        echo "</h3>";
      }
      if ( get_field( 'job_description' ) ) {
        the_field( 'job_description' );
      }
      echo "<div class='career-location'>";
      $terms = get_the_terms(get_the_ID(), 'spc-location-category');
      foreach($terms as $term){
        echo "<p><b>Location</b>: ".$term->name."</p>";
      }
      echo "</div>";
    }
    ?>
</article>`,
    figcaption:
      "For example, in order to display each Job Posting, we first needed to check if a Custom Field was created. If all criteria was met we could then loop through each Job posted and display them in real time.",
  },
  {
    title: "Quizipedia",
    url: "trivia-game",
    tools: "TypeScript · React · CSS",
    description:
      "A Web Application that utilizes an API Key to fetch free to use, user-contributed trivia questions from a database",
    overview:
      "This Web Application fetches data from The Open Trivia Database (opentdb.com) and provides over 9,000 questions to draw from. All the user has to do is click start and they will be given 10 randomized questions with multiple answers that they can select. The user's selection will be highlighted either green (correct) or red (incorrect). For each correctly guessed answer they will receive a point.",
    id: 6,
    image: "/assets/trivia-mockup.png",
    alt: "An interactive trivia game built with TypeScript and React",
    github: "https://github.com/JalenCameron/Quiz-Application",
    liveSite: "https://trivia.jalencameron.com/",
    timeline: "2 Days",
    roles: "Front-End Developer · UI Designer · Debugger",
    designParagraph1:
      "Something I've been meaning to implement in all my projects was a nice spinning animation when loading data. The first thing I needed to do was build a conditional statement that would only allow it to run if the loading state I built was set to 'true'. If those conditions were met, the styling I made would appear on the screen. It was fairly straightforward to create, mostly through use of @keyframes and setting the animation styling to infinite.",
    devParagraph1:
      "The point of this web application was to familiarize myself with TypeScript and what it has to offer. It was great practice for me to make use of Enum's and Type's, as I find Type Safety to be fairly important while I continue to grow as a Web Developer.",
    takeaway1:
      "It was pretty fun getting to work with TypeScript. For example, I got to learn what the question mark (?:) represented in relation to TS syntax. For those unfamiliar, it simply means that the property that it's attached to is now optional. Another way of looking at it is that it's similar to defining two types to a property, where one is defined and the other option is 'undefined.' It was also great to be able to clearly define the types for each prop I was passing through, as that made error handling a lot more easier as I got closer to build time.",
    designImage1: "/assets/trivia-spinner.png",
    desAlt1:
      "A spinner animation that was created through CSS using Keyframes and Animations",
    codeblock: `type Question = {
    category: string; 
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}`,
    figcaption:
      "Here I've provided an example of a Type and an Enum I had to use while fetching the API data.",
  },
];
