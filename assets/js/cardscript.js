function Image (year) {
   
    var ActiveButtonYear = year + "button";
            
    $('.YearsButton').removeClass('active');
    $('.' + ActiveButtonYear).addClass(' active');

    $('.MainImageContainer').hide();
    
    $('.' + year).show();

    $('.' + year + " .buttonrow .ImageNavButton:first-of-type").click();
}

function Cards (year,attr) {

    var ActiveButton = attr + "Button";

    $('.ImageNavButton').removeClass('active');
    $('.' + ActiveButton ).addClass(' active');

    $('.FinalImageContainer').hide();
    
    $('.' + year + ' .' + attr).show();
        
}

$(document).ready(function() {
    
    $('.presentbutton').click();
    
});






    