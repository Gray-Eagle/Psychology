$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.index_block').height($(window).height() - $('.header_block').height());
});