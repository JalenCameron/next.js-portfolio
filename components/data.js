export const data = [
  {
    title: "Nomi",
    url: "movie-database",
    tools: "Next · Sass · Adobe XD · Adobe Photoshop",
    description:
      "Nomi is an interactive web application that allows users to browse and track their favourite movies based on ratings, popularity or release date.",
    overview:
      "Nomi is an interactive web application that allows users to browse any movie and view its relevant information. The user can sort movies by popularity, top rated, currently playing and upcoming. This was built using Next.js and Sass by a team of four, and draws from TMdB's built in API to gather all of the data in relation to whichever movie is being searched (e.g., Movie Backdrops, The Cast, Rating, etc.).",
    id: "1",
    image: "/assets/nomi-mockup.png",
    alt: "An interactive Movie Database built with Next.js and Sass",
    github: "https://github.com/JedBorseth/movie-database",
    liveSite: "https://nomi.jalencameron.com",
    mockups: "/assets/xd-mockup.xd",
    timeline: "5 Weeks",
    roles: "UI Designer · Developer · Debugger",
    designBrandParagraph1:
      "When designing the app I wanted it to have a minimal amount of additional elements and colour to avoid any potential clashes in style with the more colourful posters. The Nomi logo ended up taking heavy inspiration from this ideal as well.",
    designBrandImage: "/assets/nomi_design-brand-image.svg",
    designBrandImageAlt: "Nomi Logo",
    designBrandParagraph2:
      "In terms of Typography, I carefully chose fonts that enhance the overall aesthetic of the web application. For headers and descriptive text I utilized Inter, a versatile and modern typeface that adds a touch of sophistication and readability to the content. For everything else I went for Source Sans Pro. I find that its clean and legible nature allows visitors to focus on the content itself without drawing their attention elsewhere.",
    productFeatures1:
      "For the application my team and I felt that adding user accounts and authentication would greatly improve the UX of the site. With personalized settings, easy access, and added security, users could enjoy a tailored and hassle-free experience. They would be able pick up where they left off, access their preferences on any device, and stay engaged with relevant updates. We believe that this would make the website feel more personalized and convenient, leading to increased satisfaction and loyalty.",
    productFeaturesImage1: "/assets/nomi_productFeatures1.png",
    productFeaturesImageAlt: "Sign In CTA",
    productFeaturesImage2: "/assets/nomi_productFeatures2.png",
    productFeaturesImageAlt2: "Sign in with Google or GitHub",
    userInterface1:
      "One of the things I wanted to add to the movie application was a search bar, which would make it easy to find specific movies, discover new ones, and access content effortlessly. Users would have control over their searches, making the experience personalized and engaging. With a search bar, navigating through a large movie database would be a breeze, ensuring a user-friendly and enjoyable experience.",
    userInterfaceImage: "/assets/nomi_userInterface.png",
    userInterfaceImageAlt: "Searching for a movie in the search bar",
    devFrameworks1:
      "For this project I worked on a team with a few others to implement my design. After careful consideration, we decided that Next.js would be a great framework for our team to work with. Some of its best features, such as server-side rendering and static site generation, would ensure fast page loads and improved SEO. It's also integrated with React, which allows for building interactive and responsive user interfaces. Additionally, Next.js's scalability and ability to handle large databases made it the perfect fit for a movie database website.",
    devProblems1:
      "Initially in my mockups for the website I had a reviews section that would allow users to post reviews of their favourite movies. As this was our first time collaborating on a large project, this unfortunately lead to increased project complexity and a longer anticipated timeline. That was because the implementation process to build a reviews section was quite complex for our skill level and thus resulted in our first experience with scope creep.",
    devProblems2:
      "Having been given a certain deadline to meet, we wanted to avoid scope creep wherever possible. We knew it would hamper project efficiency and strain our resources, making it challenging to deliver the project within the defined constraints and objectives. In the end we didn't build this feature, but we learned a valuable lesson in project management.",
    devProblemsImage: "/assets/nomi_devProblemsImage.png",
    devProblemsImageAlt: "An Adobe XD mockup for a reviews section for Nomi",
    takeaway1:
      "This was my first experience with drafting a mockup and then building a high-fidelity prototype out of it, and it was great to be able to bring my creations to life and see what worked and what didn't. Designing isn't just about making something look 'nice,' it's about trying to give the user a positive experience. By working with both design and development tools I was able to see both sides to this and it really was a fascinating experience.",
    takeaway2:
      "This was also the first project where I had to work in a team environment and use Next.js as the main framework. I was able to see the in’s and out’s of making API calls, as well as using components to provide extra functionality for a better interactive website. Personally, it was quite interesting seeing how the data was fetched for both the movie information and cast list, and then implemented in combination with styling and conditional rendering (e.g., &&).",
    codeblock: ``,
    figcaption: "",
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
    productFeatures1:
      "While I didn't put too much focus into the design of this project, I did enjoy some of the features I was able to incorporate into it. One of those features was having the background images update depending on what the current weather is. By providing images that dynamically update based on the current weather, this would add visual appeal (and hopefully enhance the user's experience). In other words, it provides an intuitive and immersive way for users to quickly grasp the current weather conditions at a glance.",
    productFeaturesImage1: "/assets/weather_productFeatures1.png",
    productFeaturesImageAlt:
      "Current Tokyo weather showcasing a cloudy background",
    productFeaturesImage2: "/assets/weather_productFeatures2.png",
    productFeaturesImageAlt2:
      "Current Manchester weather showcasing a sunny background",
    devFrameworks1:
      "Having used Next.js in a team environment a few times already, I wanted to try using it on my own. I figured it would be a suitable framework for a weather app due to its server-side rendering capabilities, which  would allow for efficient retrieval and display of real-time weather data. It also works well with API's, simplifying the process of fetching and rendering weather data in real time.",
    devProblems1:
      "One of my main issues with this project was configuring the Sunrise and Sunset times. To show the correct sunrise and sunset for the user's chosen city, I needed to take into account the city's time zone and do the right conversions. Dealing with the logic and calculations to convert UTC times to the local time zone of each city was tricky and would have needed careful handling to make sure the formatting was accurate and consistent across different places. On top of that, I would've had to subscribe to OpenWeatherMap's API to access the necessary information. In the end I decided the simplest solution was to indicate that the current time was converted to PST, rather than have the user assume the information was incorrect.",
    takeaway1:
      "This was a very fun project to bring to life, and it was also a great way for me to familiarize myself with Next.js and Tailwind. I was able to practice how to access data from props (which was initially a tricky concept for me to grasp, and still could be going forward haha). I actually found out that using Axios to make HTTP requests was more useful than just a regular Fetch API. It was a lot less work writing out .get() or .then(), and there was no need to convert my request to a JSON string either. I was also able to get a handle on the syntax for a new styling framework called Tailwind.",
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
    codeblockParagraph:
      "Honestly the main purpose of this project was to explore making API calls on my own. I was inspired by a tutorial I came across, which in turn led me to explore new languages . To start, it involved researching some of the terms used and the syntax involved. This helped me to understand what I was writing out, and where I could look for improvements. For instance, I wrote out a conditional statement to change the background depending on which weather icon was displayed, and I also applied those same principles towards error handling when there was no information currently rendered (or it was entered incorrectly).",
  },
  {
    title: "Client Portfolio",
    url: "chef-mcgehee",
    tools: "Adobe XD · Tailwind · Next · Sanity",
    description:
      "A portfolio website designed and developed to showcase the clients expertise at cooking.",
    overview:
      "The objective of this portfolio was to showcase the clients food to be able to market them for future jobs. We didn't want it to feel too much like an advertisement though, so we had to be careful with finding the balance between having them stand out and illustrating their work in an interesting way.",
    id: "3",
    image: "/assets/coming-soon-mockup.png",
    alt: "A construction photo to show that the current site is still being constructed.",
    github: "https://github.com/Dandazine/ChefWesMcgehee",
    liveSite: "https://chef.jalencameron.com",
    timeline: "N/A",
    roles: "UI Designer · Front-End Developer",
    designBrandParagraph1:
      "As the designer entrusted with creating a logo for the client, I aimed to create a visually striking and memorable logo that immediately communicates the chef's professionalism and culinary prowess. I wanted the logo to serve as a powerful branding tool, distinguishing the chef from competitors and capturing the attention of their target audience. Through the consistent use of this logo across their website and marketing materials, I sought to create a cohesive and impactful visual identity that resonates with viewers and reinforces their association with the clients exceptional culinary skills.",
    designBrandImage: "/assets/chef-logo.svg",
    designBrandImageAlt: "Chef McGehee Logo",
    productFeatures1: "Will be updated when the project goes live.",
    userInterface1:
      "Having consulted the developer for this project, we came to the conclusion that a single page layout would be best applied to the clients portfolio. This was done for a few reasons: it offers simplicity, easy navigation, improved storytelling, mobile-friendly design, enhanced visual impact, quick access to information, time efficiency, and encourages focused presentation. By consolidating all of the content onto a single page, it provides a streamlined and cohesive experience for visitors, allowing for quick browsing, impactful visuals, and a clear narrative flow. By being mobile-friendly it can also save time in maintenance and updates, and ensures only the strongest projects are showcased.",
    devFrameworks1: "Will be updated when the project goes live.",
    devProblems1: "Will be updated when the project goes live.",
    takeaway1: "Will be updated when the project goes live.",
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
      "My portfolio was created with the intention to showcase my work as a designer and developer so far. Utilizing an agile approach, I continuously implemented and revised my designs and updated development features. I took it upon myself to study Next.js (and coupled that with Tailwind CSS) to build this site, with the intention that it would allow for future expansion and greater interactivity.",
    id: "4",
    image: "/assets/portfolio-mockup.png",
    alt: "Jalen Cameron's Portfolio Project",
    github: "https://github.com/JalenCameron/next.js-portfolio",
    liveSite: "/",
    timeline: "2 Weeks",
    roles: "Front-End Developer · UI Designer",
    designBrandParagraph1:
      "I started off looking up other portfolios to draw inspiration from, and even built out a mood board to come up with a style I liked. I then created a style guide to reflect the kinds of standards and consistency I wanted to display across each page of this project. It also helped to serve as a reminder for myself as to the kind of theme I wanted to have.",
    designBrandImage: "/assets/style-guide.png",
    designBrandImageAlt:
      "A section of my style guide, where I determined my primary and secondary colours",
    designBrandParagraph2:
      "For instance, by making use of these primary colours I could add a clean and minimalistic look, making the content stand out. By incorporating my secondary palette I could add a subtle pop of color, bringing vibrancy and highlighting specific areas or elements. Overall I think this helps create a visual interest and can even guide the user's attention throughout the website.",
    productFeatures1:
      "Responsive design is something I always try to incorporate into my designs no matter what project I'm working on. I personally believe it is crucial for providing a great user experience as it ensures that the users website adapts seamlessly to different screen sizes and devices. By optimizing the layout, content, and functionality across mobile, tablet and desktop devices, I am able to enable users to access and navigate my portfolio with ease, regardless of the device they are using, leading to improved usability, accessibility, and overall satisfaction. That's why I initially approached this project with a mixture of both low-fidelity and high-fidelity mockups.",
    productFeaturesImage1: "/assets/low-fidelity.png",
    productFeaturesImageAlt:
      "Wireframes for both my desktop and mobile versions of my portfolio",
    productFeaturesImage2: "/assets/portfolio_productFeatures2.png",
    productFeaturesImageAlt2: "My mobile high-fidelity mockup of my portfolio",
    userInterface1:
      "A nice UI element I would like to highlight is each individual project card. I wanted to try and capture the users attention while also making a strong first impression, and hopefully fostering a positive user experience in doing so. My expectation is that visitors will quickly scan through multiple projects and make informed decisions about which projects to explore further, ultimately resulting in a streamlined and efficient project selection process.",
    userInterfaceImage: "/assets/portfolio_userInterface.png",
    userInterfaceImageAlt: "Two of my project portfolio calling cards",
    devFrameworks1:
      "Having already worked with Next.js on a few other projects, I decided it was perfect for my own personal portfolio as well. Going into this project I knew that using Next would be beneficial in the long run, as the framework allows me to load my pages quicker (and it's also much simpler to deploy!). The framework's user-friendly routing system also helps to ensure smooth navigation, making it a cinch for visitors to explore my work. Plus, I can tap into a wide range of components and libraries to level up both the functionality and visual appeal of my portfolio in the future as I continue to gain more experience in both designing and developing.",
    devProblems1:
      "One problem I wanted to avoid when building my portfolio was the need to use separate pages for each project. I personally believe that maintaining and updating individual pages would be pretty cumbersome, and also would potentially lead to inconsistencies and outdated information from page to page. Having separate pages can cause slower load times as well, as each page requires a new server request. This could negatively impact the user experience, as navigating between projects would be less fluid, requiring users to wait for page reloads.",
    devProblems2:
      "In order to address this concern I built a json file so I could utilize Next's dynamic routing features. This would allow for easier maintenance and scalability, as adding or updating projects could be done dynamically without the need to create new pages. This in turn would provide a smoother user experience by enabling seamless navigation between projects without page reloads. By minimizing these server requests, users will experience faster loading times and improved overall efficiency, something that I'm keen to incorporate into my portfolio.",
    devProblemsImage: "/assets/data-file.png",
    devProblemsImageAlt: "A json file containing all of my dynamic information",
    takeaway1:
      "This portfolio was a great way for me to see how far I’ve come in terms of both design and development. As someone who had very little knowledge of website creation in general, it was very satisfying being able to look at what I came up with and say “I know how to build that now.” While I still have room for improvement, overall my journey has been very fulfilling. I’m also grateful for having come up with a style guide, content plan and information architecture, because initially I struggled to decide on how I wanted to represent myself and the work I’ve done but having that structure allowed me to focus more on the work and not backtrack on my decisions.",
    takeaway2:
      "As for the development itself, I really enjoyed trying to figure out dynamic routing and linking that page to the data file I created. It’s something I definitely want to improve on, as I had to look online and get help from my colleagues on the best way to approach it. I've always been one to keep looking for ways to better myself, and this experience has been no different. I hope I can continue to grow and expand my portfolio in the years to come.",
    codeblock: `<h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8 mb-4">
    Get in Touch.
</h2>`,
    figcaption:
      "Here I'm utilizing Tailwind CSS in the header to generate a left-sided border and proper font-sizing all within the element itself",
    codeblockParagraph:
      "I wanted to decrease the build time of my portfolio as well, so I decided to use Tailwind CSS for styling. The best part about Tailwind in my opinion is that it eliminates the need to write custom CSS from scratch, significantly speeding up the styling and layout process. This allowed me to focus more on building functionality and iterating on my mockups rather than spending excessive time on repetitive CSS coding.",
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
    designBrandParagraph1:
      "When we originally started forming the idea for this project, my team and I wanted to try and encapsulate the joy and indulgence of savoring a good dessert. We believed that by making use of pastel colours and playful drawings it would foster an engaging and memorable experience.",
    designBrandImage: "/assets/spc_brandImage.png",
    designBrandImageAlt: "Summer Panda Cafe's pastel colour palette",
    designBrandParagraph2:
      "Utilizing a font such as Baloo Tammudu 2 (which could be seen as playful and expressive with its rounded shapes and friendly curves) made it great for designs that would require a fun and energetic vibe. We coupled this with Roboto, which is usually seen as modern and clean with a balanced and straightforward design that suits a wide range of applications.",
    productFeatures1:
      "One of the features we felt we absolutely needed was online ordering. By having this readily available it would provide a seamless and convenient ordering process, providing customers with the chance to add their desired desserts to the cart, review their selections, and proceed to checkout. This would allow customers to enjoy the convenience of placing their dessert orders from anywhere whenever they want, saving them valuable time and effort.",
    productFeaturesImage1: "/assets/spc_productFeatures1.png",
    productFeaturesImageAlt: "Wireframes of the online ordering menu",
    productFeaturesImage2: "/assets/spc_productFeatures2.png",
    productFeaturesImageAlt2:
      "Wireframe of the popup modal for a more convenient ordering process",
    userInterface1:
      "Something my team and I felt we would be important for the cafe was the use of cartoonish drawings for menu items, which could add a playful and whimsical vibe while maintaining a consistent aesthetic across the platform. These unique and stylized representations would help to create a memorable and distinctive brand identity, setting the dessert cafe apart and enhancing its visual appeal.",
    userInterfaceImage: "/assets/spc_userInterface.png",
    userInterfaceImageAlt: "Dessert menu cards with cartoonish drawings",
    devProblems1:
      "One of the problems my team and I faced while building this project was utilizing the Advanced Custom Fields plugin. This was our first time using a CMS, so we wanted to experiment with a couple of different plugins that were available for use. We felt it could prove valuable for displaying dynamic information that would help the administrator in the future. To be able to use the ACF plugin, it would require careful planning and potentially more customizations to handle complex data structures effectively. In addition to that, determining what fields to build and where to iterate the custom field code was a challenge itself.",
    devProblems2:
      "Fortunately we dedicated enough time and effort to reading the documentation provided in the resources section of the plugin, and were able to fully build out some dynamic templates. This can be seen on our Careers page, where the Title, Job Description and Location can all be dynamically generated via the Custom Fields found on the backend of the WordPress site.",
    devProblemsImage: "/assets/spc_devProblemsImage.png",
    devProblemsImageAlt:
      "Screenshot of the Careers page showcasing various Custom Fields",
    takeaway1:
      "Honestly this project allowed me to get hands on experience with project planning and working collaboratively as a web designer and developer. Unlike individual projects, planning became important before prototyping and development began. Knowing how to split up the tasks into smaller tickets and assigning the person for the right job was the key takeaway for me from this project. We used Asana to manage and monitor our progress and Slack for general communication. Overall, every planned feature was implemented to the expected specification and the project was delivered to the best of our ability.",
    takeaway2:
      "I would also like to highlight that familiarizing myself with WordPress functions and templates was also fairly important. It was great being able to understand PHP and implement it in ways that benefitted the creation of the site, and it really helped flesh out my understanding of JavaScript concepts as well.",
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
    codeblockParagraph:
      "Due to this website being created with WordPress, we built custom post types and taxonomies, as well as custom fields to allow the site owner to update their content dynamically whenever they needed to. We also configured tax queries and loops to ensure the appropriate content was displayed accurately on each page.",
  },
  {
    title: "Quizipedia",
    url: "trivia-game",
    tools: "TypeScript · React · CSS",
    description:
      "A Web Application that utilizes an API Key to fetch free to use, user-contributed trivia questions from a database",
    overview:
      "This Web Application fetches data from The Open Trivia Database (opentdb.com) and provides over 9,000 questions to draw from. All the user has to do is click start and they will be given 10 randomized questions with multiple answers that they can select. The user's selection will be highlighted either green (correct) or red (incorrect). For each correctly guessed answer they will receive a point.",
    id: "6",
    image: "/assets/trivia-mockup.png",
    alt: "An interactive trivia game built with TypeScript and React",
    github: "https://github.com/JalenCameron/Quiz-Application",
    liveSite: "https://trivia.jalencameron.com/",
    timeline: "2 Days",
    roles: "Front-End Developer · UI Designer · Debugger",
    designParagraph1:
      "This project was mostly to focus on TypeScript and the benefits of type safety. So with that in mind, I didn't really go crazy with a mockup for how I wanted the web application to look. I knew I wanted a simplistic design, and building an almost cartoonish aesthetic really brought that ideal to life. Essentially I rounded all the corners so they weren't sharp, used a sans-serif font to essentially to create a 'fun' design (for lack of a better term), and in the initial production I used a lighter colour for borders and containers. Basing my design off of these mockups I whipped up actually made the process very seamless so I'm grateful for that.",
    devParagraph1:
      "The point of this web application was to familiarize myself with TypeScript and what it has to offer. It was great practice for me to make use of Enum's and Type's, as I find Type Safety to be fairly important while I continue to grow as a Web Developer.",
    takeaway1:
      "It was pretty fun getting to work with TypeScript. For example, I got to learn what the question mark (?:) represented in relation to TS syntax. For those unfamiliar, it simply means that the property that it's attached to is now optional. Another way of looking at it is that it's similar to defining two types to a property, where one is defined and the other option is 'undefined.' It was also great to be able to clearly define the types for each prop I was passing through, as that made error handling a lot more easier as I got closer to build time.",
    designImage1: "/assets/trivia-wireframe.png",
    desAlt1: "A low-fidelity wireframe built in Adobe XD",
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
  {
    title: "Tic Tac Toe",
    url: "tic-tac-toe",
    tools: "JavaScript · CSS",
    description:
      "An interactive game built with JavaScript and basic CSS styling",
    overview:
      "For those that may not be familiar with the game, Tic Tac Toe is a two-player game in which the players fill up nine empty rectangles in a table with either an X or an O when it is their turn. If someone gets three in a row (either vertically, horizontally or diagonally) that player wins. Honestly, I figured this would be a good way to familiarize myself with the basics of JavaScript while creating a simple and interesting project.",
    id: "7",
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
    title: "EDealer",
    url: "edealer",
    tools: "WordPress · PHP · Sass · Adobe XD",
    description:
      "EDealer is a Toronto-based company specializing in automotive digital marketing solutions. This 'project' is merely used to showcase what I've had the pleasure of working on during my time with this company.",
    overview:
      "EDealer is a Toronto-based company specializing in automotive digital marketing solutions. With a focus on driving sales and enhancing customer engagement, EDealer offers a range of services including website design, search engine optimization, social media marketing, and inventory management tools, tailored to meet the unique needs of automotive dealerships in the digital age.",
    id: "8",
    image: "/assets/edealer-mockup.png",
    alt: "Edealer Logo",
    liveSite: "https://www.edealer.ca/",
    timeline: "Ongoing",
    roles: "Intermediate Web Developer · Debugger",
    userInterface1:
      "My job does not involve much design itself, but I did want to highlight its use in my development and implementation process. Whenever I receive a Design mockup I like to ensure that I'm making use of our teams responsive components, which function like adaptive tools and dynamically adjust layouts to suit various devices. This adaptability ensures that the visual and functional aspects remain consistent, whether accessed on a smartphone, tablet, or computer. The benefits of responsive design cannot be understated, especially when they're needed in tandem with strict brand guidelines. By following these designs I am able to enhance usability, reduce friction, and deliver a cohesive experience.",
    userInterfaceImage: "/assets/edealer_ui.png",
    userInterfaceImageAlt: "Desktop and Mobile Showroom Components",
    takeaway1:
      "Honestly I feel like there isn't much I can say that hasn't already been said before. My key takeaways from my time at this company so far have been the Team Collaboration and User Experience. Working in a tech role within a larger industry involves collaboration with professionals from various domains, such as marketing, sales, and product management. I've been able to enhance my ability to communicate effectively with cross-functional teams thanks to this, as I am constantly dealing with a rotating cast of users and teammates.",
    takeaway2:
      "Developing for an industry that targets consumers often emphasizes the importance of user experience, and this company has been no different. Learning to create interfaces that are user-friendly, aesthetically pleasing, and aligned with the brand's image has become a crucial skill for me. Especially in regards to some of the dealership brands, as they have strict guidelines that must be adhered to when dealing with design and development.",
    codeblock: `let customLabels = {
    0: "Label 1",
    1: "Label 2",
    2: "Label 3",
    3: "Label 4",
    4: "Label 5",
    5: "Label 6",
    6: "Label 7",
    7: "Label 8",
};

onStepChanged: function (event, currentIndex, priorIndex) {
    let labelName = customLabels[currentIndex] || "Label Default";
    
    gtag('event', 'form_step', {
        step_name: labelName,
        step_index: currentIndex + 1,
        event_category: 'Form',
        event_label: 'Multi-Step Form',
        non_interaction: true,
    });
},
`,
    figcaption:
      "This code assigns custom labels to each step in a multi-step form. Whenever a user moves to a new step, it finds the matching label and sends a tracking event to Google Analytics. This helps track how users move through the form.",
    codeblockParagraph:
      "One of my most recent development examples was utilizing jQuery Steps on a multi-step credit form. For those that don't know what jQueryz Steps is, it simplifies the creation of multi-step forms by providing a structured, step-by-step navigation experience. Essentially it enhances usability by breaking down long forms into manageable sections. Within this jQuery I also implemented Google Tag Manager (gtag) event tracking to capture step-by-step conversions. Every time the user proceeds to the next step this event fires and provides valuable insights into user behavior (and helps optimize marketing performance in the long run).",
  },
];
