import CSSubContent from "./CSSubContent.jsx";

/* Page descriptions */
//const posterdesc = "August - September 2023: I never knew how surrounded with visual imagery in the form of posters a person could be until I came to Brown. At the beginning of freshman year I had the vague idea that it could be fun to collect them, but I didn't turn it into a project until March 2023. Since then, I have been collecting posters with an intent to create an archive of the shifting events, ideas, and styles of the Brown student body, in the form of a large collection of physical posters stored temporarily in my dorm with long-term plans to donate it to the John Hay Library. While Brown does already have a digital repository, it is quite vast, contains few posters, and is somewhat difficult to access, search through, and contribute to in the ways that I am primarily interested in. This is why I've decided to make my own poster archive, where users can easily upload posters, and search and sort by tons of different factors like colors, organization, and style to analyze how the opinions and aesthetics of the Brown community have evolved over time. This is currently in progress, so check back later to see the finished result!";

const hyperdesc =
  "  November 2023 - December 2023: Dreamweaver is a personal sleep tracker/dream journal interface that allows users to record details about their sleep quality, dreams, and hours slept. The interface will keep track of statistics to do with this data (such as total hours tracked, average sleep hours per day, and frequency of different sleep quality tags) and present a visual analysis of the most frequent themes across every recorded dream in its database. This web application aims to present a cosy, cute environment where users can effortlessly document their sleeping lives. As such, it will be available exclusively in dark mode. The average user will likely access Dreamweaver very shortly after waking up, in order to record notes about their dream before forgetting all the details. They can choose whether to create a basic sleep node, an  editable text node or record audio (hopefully in the app?), if they’re still too sleepy to type. In all node types select a tag indicating the quality of their sleep, and enter the number of hours they slept. The date of the entry creation is recorded automatically. A text node will create a field in which they can add notes about any dreams they remember. If they choose an audio node, the app will automatically transcribe their speech and create a (non-editable) text caption, which enables the audio node to be added to the corpus for dream theme analysis. When the user wants to learn more about their sleep journey or their dreams, they can open the Statistics tab (a modal component), where they can view a bar chart showing frequency of each sleep quality tags, a bar or line chart showing the hours slept over time, and a word cloud that shows the relative frequency of words across all non-empty dream descriptions. Users can also perform their own meta-analysis of their sleep and dream records, creating links between entries and grouping dream transcripts by theme or time period (using folders and the tree view). Made with Cassius Hall and Wangdrak Dojri.";

const swedesc =
  "Note: This page is currently in progress! September 2023 - December 2023: This page is a series of projects I made for CSCI 0320: Intro to Software Engineering. Each project builds off each other: the first project was to build a CSV Parser and Searcher, while the second used that to handle incoming requests to a Server, and send its own request to the US Census API. The third creates a frontend for handling requests so that users can type in a command and visually see the output.";

const thisdesc =
  "July - August 2023: I created this website in 2023 partially as a means to host my portfolio, while learning new skills in both CS and art. In order to create a functional website made mostly of hand-drawn components, I knew I would need to create specifications that remained consistent for every page. The home page defines the size and positioning of all the other pages (3240px x 1920px) so that every element remains both visually consistent and functional across the pages. Each component was first designed visually before I determined what components would be necessary to create them, with the painting on the home page totaling in over 30 hours of work between painting and structure. ";

const mpdesc =
  " June - July 2023: Modal Perception is a study undertaken by Postdoctoral Researcher Gabor Brody at the Brown Language and Thought Lab, interested in exploring modal cognition and perception. The study is designed to investigate why people are quicker at identifying features that appear and reappear on the same object than those when the object is moved or changed. They are interested in determining whether this phenomena (called Object Specific Preview Benefit or OSPB) still occurs when there are multiple possibilites for where the feature could occur. There are currently 9 versions of the study and I was responsible for creating web apps for refaactoring version 7 and creating versions 8 and 9. Version 7 was originally over 1100 lines of code which I reduced to 700 while maintaining functionality. In this version, the two disks can be one of 5 randomly generated colors and each has a different shape. Both disks then move behind a centrally located occluder and respondents are tasked with determining if the shapes on the disks are the same when they reappear on the disks at the bottom of the screen. In version 8 and 9, the disks have only a white outline and no color, and in version 8, the shapes could reappear on either the original disks or the two on the bottom. In version 9 there is only one disk, but in the OSPB trials it clearly moves behind one of two occluders before being revealed either behind that one or the opposite one, and in the Modal trials the disk moves behind the middle of one occluder that then splits in two, revealing the disk behind either the top or bottom occluder.";

const tetdesc =
  " October - December 2022: Clones of the popular games Tetris and PacMan, although PacMan comes with a twist- both the titular character and all of the ghosts are represented by characters from a different popular game, Among Us. Tetris has all the features of the original game- the ability to move, rotate, and drop pieces (and lines clear whenever they are filled), and the ability to pause the game. The game only ends when a new piece spawned can not be moved from its initial state. PacMan comes complete with all three modes- chase, scatter, and fright. Their movements are each defined by BFS with slightly different targets during Chase mode, while in Scstter mode they each target a different corner, and in fright they move randomly. Ghosts flash white and move in the opposite direction only when they change between modes. When a ghost and PacMan collide in chase or scatter mode, PacMan is reset to his initial position and loses a life, but when he collides with ghosts in fright mode the ghost returns to its initial position in the pen and PacMan earns points, displayed by the score counter. The game ends either when the player wins by eating all of the pellets or loses all three lives. ";

const dttpdesc =
  "February - March 2023: Decision Tree and Travel Planner are implementations of classic structures and alogrithms, the binary search tree and BFS and Dijkstra's respectively. Decision Tree, built collaboratively with Huda Abdulrasool, explores how a model can be used to determine the most likely outcomes for choices within large datasets. Travel Planner, built collaboratively with Chai Harsha, explores how BFS and Dijkstra can be used to determine routes between cities with specifications of looking for the shortest, fastest, or cheapest route.";

/* subpages defined by name, link to, tech used, images, ods fpr imgs and descritption, a description, and the enxt and previous pages */
const pages = [
  // { name: 'Poster Archive - Coming soon', to: '/cs/poster', tech: null, imgs: ['/cssub/posterdesign.png'], imgsid: 'poster', description: posterdesc, descid: 'posterdesc', next: '/cs/this', prev: '/cs/dttp'},
  {
    name: "Dreamweaver",
    to: "/cs/hyper",
    tech: "TypeScript/JavaScript, React, HTML, CSS, MongoDB",
    imgs: ["/cssub/dreamweaver.png"],
    imgsid: "hyper",
    link: "https://dreamweaver-ten.vercel.app/",
    description: hyperdesc,
    descid: "sweid",
    next: "/cs/32",
    prev: "/cs/dttp",
  },
  {
    name: "Intro to Software Engineering",
    to: "/cs/32",
    tech: "Java, TypeScript, React, HTML, CSS, Guava, Moshi, ACS API",
    imgs: ["/cssub/mock.gif"],
    imgsid: "32",
    description: swedesc,
    descid: "sweid",
    next: "/cs/this",
    prev: "/cs/hyper",
  },
  {
    name: "This site!",
    to: "/cs/this",
    tech: "JavaScript (React + SWC), HTML, CSS, VSCode, Procreate",
    imgs: [
      "/main/Web.png",
      "/main/timelapse.gif",
      "/main/ButterfliesE.gif",
      "/main/homesketch.png",
      "/main/artsketch.png",
    ],
    imgsid: "this",
    description: thisdesc,
    descid: "thisdesc",
    next: "/cs/mp",
    prev: "/cs/dttp",
  },
  {
    name: "Modal Perception",
    to: "/cs/mp",
    tech: "JavaScript (jQuery), HTML, CSS, PHP, VSCode",
    imgs: ["/cssub/MP7.gif", "/cssub/MP8.gif", "/cssub/MP9.gif"],
    imgsid: "mp",
    description: mpdesc,
    descid: "mpdesc",
    next: "/cs/tetrissus",
    prev: "/cs/this",
  },
  {
    name: "Tetris and PacMan",
    to: "/cs/tetrissus",
    tech: "Java (JavaFX), IntelliJ",
    imgs: ["/cssub/tetris.gif", "/cssub/susman.gif"],
    imgsid: "tetris",
    description: tetdesc,
    descid: "tetdesc",
    next: "/cs/dttp",
    prev: "/cs/mp",
  },
  {
    name: "Decision Tree, Travel Planner",
    to: "/cs/dttp",
    tech: "Java, IntelliJ",
    imgs: ["/cssub/dt.gif", "/cssub/tp.png"],
    imgsid: "dttp",
    description: dttpdesc,
    descid: "dttpdesc",
    next: "/cs/hyper",
    prev: "/cs/tetrissus",
  },
];

/* creates a list of options by mapping each page to the subcontent layout */
const options = pages.map((page) => ({
  name: page.name,
  to: page.to,
  component: (
    <CSSubContent
      name={page.name}
      imgs={page.imgs}
      imgsid={page.imgsid}
      link={page.link}
      tech={page.tech}
      desc={page.description}
      descid={page.descid}
      prev={page.prev}
      next={page.next}
    />
  ),
}));

export default options;
