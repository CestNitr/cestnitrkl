var civipedia = {
    "civisource": [
        {
            imagesrc:"1.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"2.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"3.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"4.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"5.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"6.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"7.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"8.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"9.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"10.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"11.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"12.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"13.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"14.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"15.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"16.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"17.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"18.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"19.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"20.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"21.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"22.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"23.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"24.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"25.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"26.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"27.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"28.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"29.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"30.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"31.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"32.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"33.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"34.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"35.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"36.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"37.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"38.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"39.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"40.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"41.jpg",
            imagedescription:""
        },       
        {
            imagesrc:"42.jpg",
            imagedescription:""
        },       
    ]
}


$(function () {

    var contenthtml = $('#civipediacontent').html();
    
    var compiledtemplate = Handlebars.compile(contenthtml);
    
    $('.civipedia_container').html(compiledtemplate(civipedia));
    
});

$(function () {
    
    var modalcontent = $('#civimodalcontent').html();
    
    var compiledmodal= Handlebars.compile(modalcontent);
    
    $('.civi_modal_content').html(compiledmodal(civipedia));
    
}); 
