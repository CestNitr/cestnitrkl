var maincontent2012= {
    "content" : [
        {
            "title" : "BUILD YOUR BROBDIGNAGIAN",
            "date" : "06.10.2012",
            "description" : "Skyscrapers, bridges, dams, what else engineers have build in the world’s If you’re one who  wanted to build something new and stand distinct, here’s a challenge for you! A giant like Kumbhakarna or King Kong can’t even stand if it were to have the same  structural properties as a human. With size come challenges, with challenge comes ingenuity.  Are you ingenious? Design your own giant (of a height of 60 feet and corresponding width) and present the  technical details, illustrations and justifications for the design. Evaluation will be based on  • Stability and mobility ( necessary characteristics) • Other physiological features like temperature balance, required Heart size etc.(  Bonus) • Aesthetics of the creature.(Bonus) Submit your design to cest@outlook.com by October 31st, 2012. Best three designs will  participate in the finals (to be held in November). In addition to prizes and certificates, support will also be provided to  implement the winning  design.",
            "eventname" : "club activity",
            "eventclass" : "club",
            "Modaltitle" : "BUILD YOUR BROBDIGNAGIAN",
            "year" : "2012",
            "image" : "assets/Images/cestlogo.png",
            "color" : "Deep-Orange"
        },
        {
            "title" : "Book Review",
            "date" : "06.10.2012",
            "description" : "Review any one among the following books. All the books are available in the Web. The first two are available in Institute’s Central Library. The review should be of maximum 500 words. 1. History of strength of materials by S. Timoshenko. 2. The World of mathematics (Vol.2) by J. Newman 3. How to study by J.F. Swain. Submit your review to cest@outlook.com by October 31st, 2012. Winning reviews would be published in the CEST’s website and magazine. And you’ll get a prize too!!!",
            "eventname" : "club activity",
            "eventclass" : "club",
            "Modaltitle" : "Book Review",
            "year" : "2012",
            "image" : "assets/Images/cestlogo.png",
            "color" : "Deep-Orange"
        },
        {
            "title" : "Shakes-pier",
            "date" : "06.10.2012",
            "description" : "Write a short story, poem, play or any literary piece on a theme related to a fundamental civil  engineering term or topic. The literary piece should have considerable technical concepts  blended into it. Evaluation will be based on both technical and literary quality of the work.  The winning work(s) will be published in the magazine or/and website. And you’ll get a prize  too!!!",
            "eventname" : "club activity",
            "eventclass" : "club",
            "Modaltitle" : "Shakes-pier",
            "year" : "2012",
            "image" : "assets/Images/cestlogo.png",
            "color" : "Deep-Orange"
        },
        {
            "title" : "CEST Lecture Series.",
            "date" : "06.10.2012",
            "description" : "CEST Club is hosting a lecture on Design of Nuclear Structure, as the Third Lecture in the CEST Lecture Series. Topic: Design of Nuclear Structure Speaker: Mr. Sourav Acharya, Scientist, Atomic Energy Regulatory Board, Government of India",
            "eventname" : "club activity",
            "eventclass" : "club",
            "Modaltitle" : "CEST Lecture Series.",
            "year" : "2012",
            "image" : "assets/Images/cestlogo.png",
            "color" : "Deep-Orange"
        },
        {
            "title" : "1st Edition Of Assray",
            "date" : "03.03.2013",
            "description" : "",
            "eventname" : "Magazine",
            "eventclass" : "club",
            "Modaltitle" : "",
            "year" : "2012",
            "image" : "assets/Images/cestlogo.png",
            "color" : "Deep-Orange"
        },
    ]
}

$(function () {

    var contenthtml = $('#eventcontent').html();
    
    var compiledtemplate = Handlebars.compile(contenthtml);
    
    $('.2012Events .CardsContainer').html(compiledtemplate(maincontent2012));
  
});