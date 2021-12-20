$(function(){


AOS.init({
  duration: 500,
  easing: 'ease-out-quart'
//  once: true
});



$('#myRange, #employeRange').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #52b74b), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
});






}); //---Main Function Close




//---Range Slider Values displey in mention ID
/*
var slider = document.getElementById("myRange");
var output = document.getElementById("investValue");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

var employe = document.getElementById("employeRange");
var empoutput = document.getElementById("employeRangeValue");
empoutput.innerHTML = employe.value;
employe.oninput = function() {
  empoutput.innerHTML = this.value;
}
*/