function renderDataInHTML(){
    // Heading
    let heading = $('<h1>')
        .text('Basic calculated fields sample.')
        .appendTo('#header-ctr');

    let horizontalLine = $('<hr/>')
        .appendTo('#header-ctr');

    // Form
    // FirstInput
    let one = $('<label>')
        .addClass('one')
        .appendTo('form');

    let distanceSpan = $('<span>')
        .text('Distance (mi) *')
        .appendTo(one);

    let distanceInput = $('<input>')
        .attr('type', 'text')
        .attr('placeholder', 'Enter Distance')
        .appendTo(one);

    // Second Input
    let two = $('<label>')
        .addClass('two')
        .appendTo('form');

    let weightSpan = $('<span>')
        .text('Weight (lb)')
        .appendTo(two);

    let weightInput = $('<input>')
        .attr('type', 'text')
        .attr('placeholder', 'Enter Weight')
        .attr('required', 'required')
        .appendTo(two);

    let fragileSpan = $('<span>')
        .addClass('fragile')
        .text('Fragile')
        .appendTo(two);

    let fragileSection = $('<select>')
        .attr('name', 'fragile-menu')
        .appendTo(two);

    let firstOption = $('<option>')
        .attr('value', 'Value 0')
        .attr('disabled', 'disabled')
        .attr('selected', 'selected')
        .text('Select Something')
        .appendTo(fragileSection);

    let secondOption = $('<option>')
        .attr('value', 'Value 1')
        .text('No')
        .appendTo(fragileSection);

    let thirdOption = $('<option>')
        .attr('value', 'Value 2')
        .text('Yes')
        .appendTo(fragileSection);

    // Third Input
    let three = $('<label>')
        .addClass('three')
        .appendTo('form');

    let lengthSpan = $('<span>')
        .text('Length (in)')
        .appendTo(three);

    let heightSpan = $('<span>')
        .addClass('height')
        .text('height (in)')
        .appendTo(three);

    let widthSpan = $('<span>')
        .addClass('width')
        .text('width (in)')
        .appendTo(three);

    let lengthInput = $('<input>')
        .attr('type', 'number')
        .attr('placeholder', 'Length')
        .appendTo(three);

    let heightInput = $('<input>')
        .attr('type', 'number')
        .attr('placeholder', 'Height')
        .appendTo(three);

    let widthInput = $('<input>')
        .attr('type', 'number')
        .attr('placeholder', '10')
        .attr('min', '1')
        .attr('max', '1000')
        .appendTo(three);

    // Fourth Input
    let four = $('<label>')
        .addClass('four')
        .appendTo('form');

    let headingExtraServices = $('<h3>')
        .text('Extra services:')
        .appendTo(four);

    let insuranceParagraph = $('<p>')
        .text('Insurance')
        .appendTo(four);

    let insuranceInput = $('<input>')
        .attr('type', 'checkbox')
        .appendTo(insuranceParagraph);

    let expressDeliveryParagraph = $('<p>')
        .text('Express Delivery')
        .appendTo(four);

    let expressDeliveryInput = $('<input>')
        .attr('type', 'checkbox')
        .appendTo(expressDeliveryParagraph);

    // Price
    let price = $('<label>')
        .addClass('price')
        .appendTo('form');

    let priceSpan = $('<span>')
        .text('total:')
        .appendTo(price);

    let priceParagraph = $('<p>')
        .addClass('total-price')
        .text('$ 00.00')
        .appendTo(price);

    // Submit
    let submit = $('<p>')
        .addClass('submit')
        .text('Im Ready')
        .appendTo('form');
}

function renderSuccessfulMessage() {
    let section = $('.after-success')
        .removeClass('hidden');

    let heading = $('<h1>')
        .text('Good Job!')
        .appendTo(section);

    let img = $('<img>')
        .attr('src', 'register_success.png')
        .attr('alt', 'success')
        .appendTo(section);
}

function hideData() {
    let header = $('#header-ctr')
        .hide();

    let form = $('form')
        .hide();
}

function fullProgram() {
    renderDataInHTML();

    let button = $('.submit');

    button.on('click', function () {
        hideData();
        renderSuccessfulMessage();
    })
}

$(document).ready(fullProgram);