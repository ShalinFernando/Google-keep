$(document).ready(function () {
    $("#content").css("display", "none");
    $("#foot").css("display", "none");
    $("#packery").css("display", "none");
});

var i = 0;

$("#content").keyup(function () {
    $("#content").before("<div class='input-group-text' id='list'><input type='checkbox'><input type='text' class='form-control' id=text"+i+" placeholder='List Item'><i class='fas fa-skull-crossbones' id='deleteSkull'></i></div>");
    var text = $("#items").val();
    $("#items").val("");
    $("#text"+i).val(text);
    $("#text"+ i).focus();
    i++;
});

// external js: packery.pkgd.js, jquery-ui-draggable.js

// initialize Packery
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 100
});

// make all items draggable
var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
$grid.packery('bindUIDraggableEvents', $items);

$("#title").click(function () {
    $("#content").show()
    $("#foot").show();
});


$("#btnClose").click(function () {
    $("#packery").show();
    var title = $("#txtTitle").val();
    var list = $("#items").val();

    $("#packery").add("<div class='grid-item grid-item--width2' >" + title + "</div>");



});