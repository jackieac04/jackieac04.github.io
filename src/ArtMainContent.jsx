import React from 'react';

export default function ArtMainContent() {
  return (
    <div className='info'>
    <br />
    <div className='about'>
            <h1>About my Work</h1>
        <div className='text-video'>
            <div className='movie'>
                <iframe src="https://www.youtube.com/embed/7HZEJcnwbus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </div>
            <p className='about-text'>
                Before begininng my undergraduate degree at Brown University, I was a <a href='https://www.dreyfoosptso.org/visual-arts'>visual arts student at Alexander W. Dreyfoos School of the Arts in West Palm Beach, Florida. </a>
                It was at Dreyfoos and in the years preceeding that I began to take art seriously, both as a passion and potential career, surrounded by the enriching atmosphere of the students and teachers who frequented Building 9.
                <br/>
                <br/>
                Throughout my artistic journey I have experimented with a variety of media from watercolor to graphic design to mural painting, in an effort to best express my love for my subjects- people and nature that I find beautiful and often 
                underappreciated- in the most vibrant colors and atmospheres.
                I typically combine this love with a central figure in an expression of emotion turned literal, with the heart frequently placed outside of the body.
                <br/>
                <br/>
                In my art, I strive to recreate the wonder I feel every day by simply being alive, and I hope that as you look through my art, you're reminded of the things you cherish too :)
            </p>
        </div>
        
    </div>
    <div className='awards'>
        <h2>Awards</h2>
        <ul>
        <a href='https://billofrightsinstitute.org/people/jaclyn-cohen'>The Bill Of Rights Institute My Impact Challenge- Honorable Mention Scholarship, 2022</a> <br />
        <a href="https://armoryart.org/art-center-programs/scholastic/"> Scholastic Gold Key - 7 awards from 2020 to 2022</a> <br />
        <a href='https://armoryart.org/art-center-programs/scholastic/'>Scholastic American Visions Nominee - 1 of 5 nominnes from over 1000 submissions</a> <br />
        <a href='https://witva.org/scholarships'>Women In the Visual Arts Honorable Mention - 2022</a>
        </ul>
    </div>
    <div className='pubs'>
        <h2>Publications and Exhibitions</h2>
        <p>
            <a href="https://armoryart.org/art-center-programs/scholastic/">Armory Art Center Exhibition</a> <br />
            <a href='https://sites.google.com/palmbeachschools.org/vadmclassof2022/cohen'> Dreyfoos Class of 2022 Senior Exhibition</a> <br />
            <a href="https://www.dsoaseeds.com/surge">Surge Literary Arts Magazine</a>
        </p>
    </div>
    <div className='features'>
        <h2>Features</h2>
        <h5>'Love Comes Naturally' Mural Features (2021) </h5>
        <p>
            <a href='https://www.wptv.com/news/region-c-palm-beach-county/west-palm-beach/three-high-schoolers-paint-the-latest-mural-in-downtown-west-palm-beach?_amp=true'>WPTV</a> <br />
            <a href="https://www.wpbmagazine.com/love-comes-naturally-mural-downtown-wpb/">WPB Magazine</a> <br />
            <a href='https://m.facebook.com/WestPalmDDA/videos/werent-able-to-catch-dreyfoos-visual-arts-students-jaclyn-cohen-kyra-kramer-and-/460051435245858/?__so__=permalink&__rv__=related_videos&locale=hi_IN'>Facebook</a> <br />
            <a href='https://downtownwpb.com/dreyfoos-students-to-paint-love-comes-naturally-mural-in-downtownwpb/'>WPB Downtown Development Authority</a>
        </p>
    </div>
</div>
  );
}
