function fullProgram() {
    renderHeader()
    renderMain();
}

function renderHeader() {
    // Nav
    let logoSpan = $('<span>')
        .text('Code Mesh')
        .attr('id', 'logo')
        .appendTo('nav');

    let list = $('<ul>')
        .appendTo('nav');

    let speakersItem = $('<li>')
        .addClass('list-item')
        .appendTo(list);
    let speakers = $('<a>')
        .text('speakers')
        .attr('href', '#')
        .appendTo(speakersItem);

    let scheduleItem = $('<li>')
        .addClass('list-item')
        .appendTo(list);
    let schedule = $('<a>')
        .text('schedule')
        .attr('href', '#')
        .appendTo(scheduleItem);

    let workshopsItem = $('<li>')
        .addClass('list-item')
        .appendTo(list);
    let workshops = $('<a>')
        .text('workshops')
        .attr('href', '#')
        .appendTo(workshopsItem);

    let loginItem = $('<li>')
        .addClass('list-item')
        .appendTo(list);
    let login = $('<a>')
        .text('login')
        .attr('href', '#')
        .appendTo(loginItem);
    // Nav

    // Center Header
    let centerParagraph = $('<p>')
        .text('The urge for coding innovations is the same as the urge to go on living')
        .appendTo('#center');

    let centerIcon = $('<i>')
        .addClass('fa fa-play-circle fa-4x')
        .appendTo('#center');
    // Center Header

    // First Article
    let firstHeaderArticle = $('<article>')
        .appendTo('.header-section');

    let codeIcon = $('<i>')
        .addClass('fa fa-code fa-2x')
        .attr('aria-hidden', 'true')
        .appendTo(firstHeaderArticle);

    let firstHeaderArticleParagraph = $('<p>')
        .text('CodeMesh returns to Sofia 11th вЂ“ 12th May, 2017. We promise you the very best developer content and ' +
            'awesome experiences.')
        .appendTo(firstHeaderArticle);
    // First Article

    // Second Article
    let secondHeaderArticle = $('<article>')
        .appendTo('.header-section');

    let chartIcon = $('<i>')
        .addClass('fa fa-area-chart fa-2x')
        .attr('aria-hidden', 'true')
        .appendTo(secondHeaderArticle);

    let secondHeaderArticleParagraph = $('<p>')
        .text('This year, CodeMesh is welcoming top speakers not only from the country, but Europe and even USA!')
        .appendTo(secondHeaderArticle);
    // Second Article

    // Third Article
    let thirdHeaderArticle = $('<article>')
        .appendTo('.header-section');

    let diamondIcon = $('<i>')
        .addClass('fa fa-diamond fa-2x')
        .attr('aria-hidden', 'true')
        .appendTo(thirdHeaderArticle);

    let thirdHeaderArticleParagraph = $('<p>')
        .text('We\'re also going to have a much bigger and cooler networking event after the conference!')
        .appendTo(thirdHeaderArticle);
    // Third Article

    // Fourth Article
    let fourthHeaderArticle = $('<article>')
        .appendTo('.header-section');

    let cubeIcon = $('<i>')
        .addClass('fa fa-cube fa-2x')
        .attr('aria-hidden', 'true')
        .appendTo(fourthHeaderArticle);

    let fourthHeaderArticleParagraph = $('<p>')
        .text('Join us and immerse yourself in all the different tracks and topics available to out attendees!')
        .appendTo(fourthHeaderArticle);
    // Fourth Article
    // Header Section
}

function renderMain() {
    // Left Section
    let leftParagraph = $('<p>')
        .text(`"I think it's really important to think outside of the box when you're coding"`)
        .appendTo('.left');

    let leftSpan = $('<span>')
        .text('words by marc newson')
        .addClass('MarcNewson')
        .appendTo('.left');
    // Left Section

    // Center Section
    let centerParagraph = $('<p>')
        .text('When youвЂ™re busy leading a team, coding and maintaining ' +
            'standards, how do you find the time to stay ahead of ' +
            'new technologies and develop yourself as a technical lead?' +
            'Software continues to transform the world in remarkable' +
            'ways and developers are at the center of it. At CodeMesh 2017' +
            'latest new technologies and exciting plans on the horizon.' +
            'As always, CodeMesh is filled with strong technical sessions ' +
            'as well as opportunities to meet and learn from others in' +
            'the industry. WeвЂ™ll make sure the schedule is filled with' +
            'solid content, and will strive to deliver some fun surprises along the way.')
        .appendTo('.center');

    let centerSpan = $('<span>')
        .text('You can code and create, and build the most wonderful place in the world.')
        .addClass('bottom')
        .appendTo('.center');
    // Center Section

    // Image and Orange Div
    let rightImg = $('<img>')
        .attr('id', 'right-img')
        .attr('src', 'img/intro-img.png')
        .appendTo('.schedule');

    let orangeDiv = $('<div>')
        .attr('id', 'orange')
        .appendTo('.schedule');
    // Image and Orange Div

    // Schedule Section
    let heading = $('<h2>')
        .text('Schedule: Grab some coffee & donuts and take a seat')
        .appendTo('.schedule');

    // Registration Div
    let registrationDiv = $('<div>')
        .addClass('registration')
        .appendTo('.schedule');

    let addressIcon = $('<i>')
        .addClass('fa fa-address-book-o orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(registrationDiv);

    let timeSpan = $('<span>')
        .text('09:00 - 10:00 AM')
        .addClass('time')
        .appendTo(registrationDiv);

    let registrationParagraph = $('<p>')
        .text('registration')
        .appendTo(registrationDiv);
    // Registration Div

    // Mic Div
    let micDiv = $('<div>')
        .addClass('mic')
        .appendTo('.schedule');

    let micIcon = $('<i>')
        .addClass('fa fa-microphone orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(micDiv);

    let micSpan = $('<span>')
        .text('11:00 - 12:00 AM')
        .addClass('time')
        .appendTo(micDiv);

    let micParagraph = $('<p>')
        .text('the future of creative computing')
        .appendTo(micDiv);
    // Mic Div

    // Lunch Div
    let lunchDiv = $('<div>')
        .addClass('lunch')
        .appendTo('.schedule');

    let lunchIcon = $('<i>')
        .addClass('fa fa-cutlery orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(lunchDiv);

    let lunchSpan = $('<span>')
        .text('12:00 - 13:00 PM')
        .addClass('time')
        .appendTo(lunchDiv);

    let lunchParagraph = $('<p>')
        .text('lunch break')
        .appendTo(lunchDiv);
    // Lunch Div
    // Schedule Section

    // Right Section
    // Linux Div
    let linuxDiv = $('<div>')
        .addClass('linux')
        .appendTo('.position-right');

    let linuxIcon = $('<i>')
        .addClass('fa fa-microphone orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(linuxDiv);

    let linuxSpan = $('<span>')
        .text('13:00 - 14:00 AM')
        .addClass('time')
        .appendTo(linuxDiv);

    let linuxParagraph = $('<p>')
        .text('linux for developers')
        .appendTo(linuxDiv);
    // Linux Div

    // Wonderful Div
    let wonderfulDiv = $('<div>')
        .addClass('wonderful')
        .appendTo('.position-right');

    let wonderfulIcon = $('<i>')
        .addClass('fa fa-microphone orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(wonderfulDiv);

    let wonderfulSpan = $('<span>')
        .text('14:00 - 15:00 AM')
        .addClass('time')
        .appendTo(wonderfulDiv);

    let wonderfulParagraph = $('<p>')
        .text('the wonderful world of IOT')
        .appendTo(wonderfulDiv);
    // Wonderful Div

    // Do We Need Div
    let doWeNeedDiv = $('<div>')
        .addClass('do-we-need')
        .appendTo('.position-right');

    let doWeNeedIcon = $('<i>')
        .addClass('fa fa-microphone orange-icon')
        .attr('aria-hidden', 'true')
        .appendTo(doWeNeedDiv);

    let doWeNeedSpan = $('<span>')
        .text('15:00 - 16:00 AM')
        .addClass('time')
        .appendTo(doWeNeedDiv);

    let doWeNeedParagraph = $('<p>')
        .text('do we need to read coding books?')
        .appendTo(doWeNeedDiv);
    // Do We Need Div
    // Right Section
}

$(document).ready(fullProgram);