function renderElements(){
    renderElementsInHTML();
    renderSingleElement();
    showInfo();
    hideInfo();
}

renderElements();

function renderElementsInHTML() {
    let firstDivContainer = $('<div>')
        .addClass('containers')
        .appendTo('.container');

    let secondDivContainer = $('<div>')
        .addClass('containers')
        .appendTo('.container');

    let airDiv = $('<div>')
        .attr('id', 'air')
        .addClass('first clickable')
        .appendTo(firstDivContainer);

    let fireDiv = $('<div>')
        .attr('id', 'fire')
        .addClass('second clickable')
        .appendTo(firstDivContainer);

    let waterDiv = $('<div>')
        .attr('id', 'water')
        .addClass('third clickable')
        .appendTo(secondDivContainer);

    let earthDiv = $('<div>')
        .attr('id', 'earth')
        .addClass('fourth clickable')
        .appendTo(secondDivContainer);

    $('#elementInfo').addClass('no-display');
}

function renderSingleElement() {
    let list = $('<li>')
        .appendTo('.creatures');

    let firstRadioButton = $('<input>')
        .addClass('radio-button checked')
        .attr('name', 'selector')
        .attr('type', 'radio')
        .attr('value', 'Archangel')
        .appendTo(list);

    let firstRadioLabel = $('<label>')
        .text('Archangel')
        .appendTo(list);

    let secondListItem = $('<li>')
        .appendTo('.creatures');

    let secondRadioButton = $('<input>')
        .addClass('radio-button checked')
        .attr('name', 'selector')
        .attr('type', 'radio')
        .attr('value', 'Elemental')
        .appendTo(secondListItem);

    let secondRadioLabel = $('<label>')
        .text('Elemental')
        .appendTo(secondListItem);

    let imageTag = $('<img>')
        .attr('id', 'creature-image')
        .attr('src', 'images/archangel.jpg')
        .attr('alt', 'archangel')
        .appendTo('.center-after-click');

    let creatureNameParagraph = $('<p>')
        .attr('id', 'creature-name')
        .text('Archangel')
        .appendTo('#right-after-click');

    let creaturePowerParagraph = $('<p>')
        .attr('id', 'creature-power')
        .text('Power: 2000')
        .appendTo('#right-after-click');

    let creatureUltimateParagraph = $('<p>')
        .attr('id', 'creature-ultimae')
        .text('Ultimate: Wind Justice')
        .appendTo('#right-after-click');

    let creatureRegionParagraph = $('<p>')
        .attr('id', 'creature-region')
        .text('Region: Heaven’s Kingdom')
        .appendTo('#right-after-click');
}

function showInfo() {
    let mainContent = $('#elementsContainer');
    let secondContent = $('#elementInfo');

    $('div.clickable').on('click', function () {
        mainContent.addClass('no-display');
        secondContent.removeClass('no-display');
    })
}

function hideInfo() {
    let mainContent = $('#elementsContainer');
    let secondContent = $('#elementInfo');

    $('#backToElements').on('click', function () {
        mainContent.removeClass('no-display');
        secondContent.addClass('no-display');
    })
}