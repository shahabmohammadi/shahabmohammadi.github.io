
function removeClasses() {
    var tags_id_list = ["#home-nav", "#cv-nav", "#playlist-nav", "#game-nav", "#contact-nav"]
    tags_id_list.forEach(
        function (item, index) {
            $(item).removeClass("active");
        }
    );
}
var os = new OnScreen();
os.on('enter', '#home', (element, event) => {
    removeClasses();
    $("#home-nav").addClass("active");
});
os.on('enter', '#cv', (element, event) => {
    removeClasses();
    $("#cv-nav").addClass("active");
});
os.on('enter', '#playlist', (element, event) => {
    removeClasses();
    $("#playlist-nav").addClass("active");
});
os.on('enter', '#game', (element, event) => {
    removeClasses();
    $("#game-nav").addClass("active");
});
os.on('enter', '#contact', (element, event) => {
    removeClasses();
    $("#contact-nav").addClass("active");
});
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});