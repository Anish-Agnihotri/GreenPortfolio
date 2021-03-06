//Import fullpapge libraries. 
$(document).ready(function () {
    $('#fullpage').fullpage();
});
//Assign fullpaper anchors to sections. 
$('#fullpage').fullpage({
    anchors: ['someanchor', 'landinganchor', 'servicesanchor', 'workanchor', 'contactanchor']
});
//Add hovering (with colour changes) to images in the workanchor. 
$(document).ready(function () {
    $(".WorkOne").hover(
        function () {
            $(this).attr("src", "images/docker_light.svg");
        },
        function () {
            $(this).attr("src", "images/docker_dark.svg");
        });
    $(".WorkTwo").hover(
        function () {
            $(this).attr("src", "images/namecheap_light.svg");
        },
        function () {
            $(this).attr("src", "images/namecheap_dark.svg");
        });
    $(".WorkThree").hover(
        function () {
            $(this).attr("src", "images/shopify_light.svg");
        },
        function () {
            $(this).attr("src", "images/shopify_dark.svg");
        });
    $(".WorkFour").hover(
        function () {
            $(this).attr("src", "images/wordpress_light.svg");
        },
        function () {
            $(this).attr("src", "images/wordpress_dark.svg");
        });
});