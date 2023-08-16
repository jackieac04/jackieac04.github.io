import React from 'react';

const pieces = [
    //GRAPHICS
    {title: 'BLT Lab Poster', genre: 'Graphic', media: 'Procreate, Illustrator', date: 'August 2023', size: '8.5" x 11"', awards: [], description: "Two version of a pster for BLT to display and attract potential study participants. One has rip off tabs and one does not.", mainImg: '/art/graphic/PosterNoTab.png', secondaryImgs: ['art/graphic/postertear.png']},

    {title: 'Animals for Biomes', genre: 'Graphic', media: 'Procreate', date: 'July 2023', size: '6000px x 9000px', awards: [], description: 'Created for the Brown Language and Thought Lab as cutouts for a poster board describing animal brain facts to children.', mainImg: '/art/graphic/Animals.png', secondaryImgs: []},

    {title: 'Fox Diagram', genre: 'Graphic', media: 'Procreate', date: 'July 2023', size: '2106px 1364px', awards: [], description: "Created for the Brown Language and Thought Lab, for Gabor Brody's studies in place of imagery of an animoji of a fox.", mainImg: '/art/graphic/foxdax.png', secondaryImgs: []},
    
    {title: 'Fox and Pig', genre: 'Graphic', media: 'Procreate', date: 'July 2023', size: '1122px x 604px', awards: [], description: "Created for the Brown Language and Thought Lab, for Gabor Brody's studies in place of imagery of Piglet and Tigger.", mainImg: '/art/graphic/carduck.png', secondaryImgs: ['/art/graphic/bicycles.png']},

    {title: 'Catch the Marble! (CU9)', genre: 'Graphic', media: 'Procreate, Illustrator', date: 'July 2023', size: '2048px x 2048px', awards: [], description: 'A Facebook ad advertising the CU9 study for the BLT Lab.', mainImg: '/art/graphic/cu9.gif', secondaryImgs: []},

    {title: 'BLT Logo and Coloring Page', genre: 'Graphic', media: 'Procreate, Illustrator', date: 'July 2023', size: '2688px x 2688px', awards: [], description: 'Created as a cuter version of the original BLT logo for use as social media, advertisement, and poster branding.', mainImg: '/art/graphic/IGlogo.png', secondaryImgs: ['/art/graphic/colorpage.png']},

    {title: "What's That?", genre: 'Graphic', media: 'Procreate, Illustrator', date: 'July 2023', size: '2627px x 2617px', awards: [], description: "A Facebook ad advertising a study for the BLT Lab.'", mainImg: '/art/graphic/whatsthat.png', secondaryImgs: []},

    {title: 'Which toy? (RGIG)', genre: 'Graphic', media: 'Procreate, Illustrator', date: 'July 2023', size: '1000px x 1000px', awards: [], description: "Two versions of a Facebook ad advertising the RGIG study for the BLT Lab.", mainImg: '/art/graphic/lucy.png', secondaryImgs: ['/art/graphic/pigfoxlucy.png']},

    {title: 'Hungry Bear', genre: 'Graphic', media: 'FireAlpaca', date: 'March 2023', size: '9600px x 5400px', awards: [], description: "A cute graphic of Cthulu Blueno hungry after monching on classic Brown student entrees the wrong way around.", mainImg: '/art/graphic/hungryblueno.PNG', secondaryImgs: []},

    {title: 'Chibi Cthulu Blueno', genre: "Graphic", media: 'FireAlpaca', date: 'March 2023', size: '696px x 700px', awards: [], description: 'A cuter, simpler version of Cthulu Blueno designed for the Brown 2023 puzzlehunt, created into pins to be given as prizes for participating teams after they solved the round 1 meta.', mainImg: '/art/graphic/chibicthulublueno.png', secondaryImgs: []},

    {title: 'Naked Donut Run Poster', genre: 'Graphic', media: 'FireAlpaca, Illustrator', date: 'November 2022', size: '8.5" x 11"', awards: [], description: "Designed with my friend and roommate Cassius Hall to be used as the main poster to attract participating runners for the winter 2022 Naked Donut Run.", mainImg: '/art/graphic/nakeddonut.PNG', secondaryImgs: []},

    {title: 'Painting Painting Album Cover', genre: 'Graphic', media: 'FireAlpaca', date: 'August 2022', size: '1500px x 1500px', awards: [], description: "Album cover for Painting Painting comissioned by Asher Pereira.", mainImg: '/art/graphic/paintingfront.png', secondaryImgs: ['/art/graphic/paintingback.png']},

    // ILLUSTRATION
    {title: 'Down a Well (Website Homepage)', genre: 'Illustration', media: 'Procreate, Photoshop, Illustrator', date:'August 2023',  size: '1920px x 3240px', awards: [], description: 'Created explicitly for use as the homepage of this site, this piece was created to feature many vibrant colors and dynamic elements including lush greenery, various animals, and a vertical composition encouraging the user to scroll down and discover more.', mainImg: '/Web.png', secondaryImgs: ['/ButterfliesE.gif', '/timelapse.gif']}, 

    {title: 'Miller, as seen from Mochamp', genre: 'Illustration', media: 'Procreate', date: 'July 2023', size: '834px x 626px', awards: [], description: "In my freshman year at Brown I spent a lot of time in my friends' dorms- those being Miller and Mochamp. My friend, Fanny, took the reference image that inspired this piece, and I painted it to commemorate all of the lovely moments we spent there.", mainImg: '/art/illustration/millermochamp.png', secondaryImgs: []},

    {title: 'Portraits of Nikolai and Maddie', genre: 'Illustration', media: 'Procreate', date: 'July 2023', size: '1507px x 2172px (Nikolai) 1640px x 2360px (Maddie)', awards:[], description: 'Portraits of two friends I met this summer.', mainImg: '/art/illustration/Nikolai.png', secondaryImgs: ['/art/illustration/Maddie.png']},

    {title: 'Self-portrait', genre: 'Illustration', media: 'Procreate', date: 'July 2023', size: '1640px x 2360px', awards: [], description: 'The first digital painting I made when I purchased my iPad and began to feel comfortable with Procreate.', mainImg: '/art/illustration/me.png', secondaryImgs: []},

    {title: 'Floating Down a River', genre: 'Illustration', media: 'Procreate', date: 'July 2023', size: '1563px x 1792px', awards: [], description: 'This painting was inspired by my friend Sylvia E, a student at UIUC and fellow research assistant at the Brown Language and Thought Lab during summer 2023.', mainImg: '/art/illustration/Sylvia.png', secondaryImgs: ['/art/illustration/Sylvia.gif', '/art/illustration/Sylvia_E.png']},

    {title: 'Cthulu Blueno', genre: 'Illustration', media: 'FireAlpaca', date: 'March 2023', size: '1170px x 1410px', awards: [], description: "Cthulu Blueno, designed for Brown Puzzlehunt 2023, to be used as the round one landing page.", mainImg: '/art/illustration/cthuluBlueno.png', secondaryImgs: []},

    {title: "Seeing Double (or Ten)", genre: 'Illustration', media: 'FireAlpaca', date: 'November 2022', size: '2500px x 3088px', awards: [], description: "Working with portraiture and color experiementation have always been some of my favorite artistic explorations, and the theme continues here. Though I have spent most of my artistic journey working primarily in physical materials, I'd gained a greater affinity for the ease and comfort of digital materials in the last year. This piece delves into that topic, starting with a base black-and-white self-portrait painting, and then creating various color variations to create an emotive quality.", mainImg: '/art/illustration/jackOG.PNG', secondaryImgs: ['/art/illustration/jack1.PNG', '/art/illustration/jack2.PNG', '/art/illustration/jack3.PNG', '/art/illustration/jack4.PNG', '/art/illustration/jack5.PNG']}, 

    {title: 'Leafysheepy', genre: 'Illustration', media: 'FireAlpaca', date: 'August 2022', size: '1024px x 1075px', awards: [], description: "Leafy Sheepy is the most quintessentially 'me' piece I have ever created. Representing my profile picture on all of my main social media platforms including Instagram, Discord, and Zulip, as well as my usernames, I created Leafy Sheepy with the intention of creating something that would simply make me happy, and ended up being so pleased with the results that it has essentially become my branding.", mainImg: '/art/illustration/leafysheepy.png', secondaryImgs: []},

    {title: "Portrait of Kyra", genre: 'Illustration', media: 'FireAlpaca', date: 'August 2022', size: '500px x 748px', awards: [], description: 'A portrait of my friend Kyra, who I met at the beginning of freshman year of high school. Simply, I think she is beautiful.', mainImg: '/art/illustration/kyraPortrait.jpg', secondaryImgs: []},

    //MIXEDDIGI
    {title: 'Little Things I love About Humans', genre: 'Mixdig', media: 'Illustrator, Masonite, Paper, Embroidery Floss, Watercolor, Ink, Lasercutter', date: 'May 2023', size: '12" x 10" x 6"', awards: [], description: "This piece is based on my notes app list of the same title. I started this list in February because I was having a lot of anxiety and I thought looking for good things would be helpful for my mental health. it didn’t necessarily make me happier but it was helpful in realizing how many good things / people there are out there, and how we are all actually very similar in the silly and cute ways that humans like to do things :) Each slip of paper has one thing from the list written on it which I then painted and sewed all of them together with embroidery floss. ", mainImg: '/art/mixedigi/heartclosefull.png', secondaryImgs: ['/art/mixeddigi/heartback.png', '/art/mixeddigi/heartfront.png', 'public/art/mixeddigi/heartfrontclose.png', '/art/mixeddigi/heartfrontopen1.png', '/art/mixeddigi/heartopenfull.png']},

    {title: 'For My Favorite People', genre: 'Mixdig', media: 'Photoshop, Illustrator, Indesign, Embroidery Floss, Gel Pen, Ink on Paper', date: 'April 2023', size: '2" x 5.75"', awards: [], description: "Each page contains stolen art, writing, and memes from various artists and poets that I reworked. The only parts of it that are really my own work are the title, dedication, and the little gel pen doodles. I made 20 of these to give to my friends, because as the title would suggest it is “For My Favorite People.” Each page contains several poems/posts/memes/artwork centered around the theme of platonic love and appreciation because I wanted my friends to know how much I care about them. Some of the writing is sideways/upsidedown/obscured so you have to turn it around a bit and spend some time getting all of it, but I know that can be visually inaccessible so I also printed a lil list of all the included content along with each book.", mainImg: '/art/mixeddigi/bookfront.png', secondaryImgs: ['/art/mixeddigi/book1.jpg', '/art/mixeddigi/book2.jpg', '/art/mixeddigi/bookpage1.png', '/art/mixeddigi/bookpage2.png', 'public/art/mixeddigi/bookpage3.png', 'public/art/mixeddigi/bookpage4.png']},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    //MIXEDTRAD
    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    //PUBLIC WORKS
    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},

    {title: '', genre: '', media: '', date: '', size: '', awards: [], description: "", mainImg: '', secondaryImgs: []},
]

export default pieces;