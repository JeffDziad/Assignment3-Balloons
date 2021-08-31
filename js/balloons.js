const animate_Seekers = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat', 'flip'];
const animate_Entrances = ['backInDown', 'backInLeft', 'backInRight', 'backInUp', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', 'flipInX', 'flipInY', 'lightSpeedInRight', 'lightSpeedInLeft', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'jackInTheBox', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'];
const animate_Exits = ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeInTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight', 'flipOutX', 'flipOutY', 'lightSpeedOutRight', 'lightSpeedOutLeft', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'backOutDown', 'hinge', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'];
const title = $('#main_title');
const autoCheck = $('#autoCheck');

function init() {
    //handlers
    handlers();
    //Random animate for h1
    titleAnimate();
}

function titleAnimate() {
    let animateIn;
    if(rand(1, 10) > 5) {
        animateIn = animate_Seekers[Math.floor(rand(0, animate_Seekers.length))];
    } else {
        animateIn = animate_Entrances[Math.floor(rand(0, animate_Entrances.length))];
    }
    title.addClass(`animate__animated animate__${animateIn}`);
}

function handlers() {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $('.form-check-input').on('change', updateBalloons);
    $('.form-check-label').hover(labelHoverIn, labelHoverOut);
    $('#submit').on('click', handleSubmit);
    $('#autoCheck').on('click', handleAutoCheck);
}

function labelHoverIn() {
    title.css('color', $(this).attr("for"));
}

function labelHoverOut() {
    title.css('color', 'black');
}

function updateBalloons() {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
}

function handleAutoCheck() {
    if(autoCheck.hasClass("btn-primary")) {
        $('.form-check-input').prop('checked', true).change();
        autoCheck.removeClass("btn-primary");
        autoCheck.addClass("btn-danger");
        autoCheck.html("Uncheck All");
    } else {
        $('.form-check-input').prop('checked', false).change();
        autoCheck.removeClass("btn-danger");
        autoCheck.addClass("btn-primary");
        autoCheck.html("Check All")
    }
    updateBalloons();
}

function handleSubmit() {
    if($("#form input:checkbox:checked").length <= 0) {
        console.log("Empty");
        $('.toast').toast('show');
    } else {
        console.log("Full");
    }
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

$(document).ready(init);