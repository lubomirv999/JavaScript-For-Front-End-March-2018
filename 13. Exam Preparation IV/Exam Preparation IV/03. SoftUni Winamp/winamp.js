function renderDataInHTML() {
    let heading = $('<h1>')
        .text('Front-End-Player')
        .addClass('heading')
        .appendTo('form');

    let imgCtrDiv = $('<div>')
        .addClass('img-ctr')
        .appendTo('form');

    let img = $('<img>')
        .attr('src', 'love-music.png')
        .attr('alt', 'music')
        .appendTo(imgCtrDiv);

    let containerDiv = $('<div>')
        .addClass('container')
        .appendTo('form');

    let backwardIcon = $('<i>')
        .addClass('fa fa-step-backward')
        .attr('id', 'prev')
        .attr('aria-hidden', 'true')
        .appendTo(containerDiv);

    let circleIcon = $('<i>')
        .addClass('fa fa-play-circle')
        .attr('id', 'play')
        .attr('aria-hidden', 'true')
        .appendTo(containerDiv);

    let pauseIcon = $('<i>')
        .addClass('fa fa-pause-circle hidden')
        .attr('id', 'pause')
        .attr('aria-hidden', 'true')
        .appendTo(containerDiv);

    let nextIcon = $('<i>')
        .addClass('fa fa-step-forward')
        .attr('id', 'next')
        .attr('aria-hidden', 'true')
        .appendTo(containerDiv);

    let inputDivCtr = $('<div>')
        .addClass('input-ctr')
        .appendTo('form');

    let input = $('<input>')
        .val('Play me !')
        .addClass('result')
        .attr('type', 'text')
        .attr('disabled', 'disabled')
        .appendTo(inputDivCtr);
}

function playAndPauseBtnClick() {
    let playBtn = $('#play');
    let pauseBtn = $('#pause');
    let result = $('.result');

    playBtn.on('click', function () {
        playBtn.addClass('hidden');
        pauseBtn.removeClass('hidden');
        result.val('Music Playing');
    });
    
    pauseBtn.on('click', function () {
        playBtn.removeClass('hidden');
        pauseBtn.addClass('hidden');
        result.val('Music Paused');
    })
}

function prevAndNextBtnClick() {
    let prevBtn = $('#prev');
    let nextBtn = $('#next');
    let result = $('.result');

    prevBtn.on('click', function () {
        result.val('Previous song');
    });

    nextBtn.on('click', function () {
        result.val('Next song');
    })
}

function fullProgram() {
    renderDataInHTML();
    playAndPauseBtnClick();
    prevAndNextBtnClick();
}

$(document).ready(fullProgram);