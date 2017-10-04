$(document).ready(function(){
  $("#search").keyup(function(){
    showHint(this.value);
            });
});

function showHint(searching_value) {
  $.post("search", { value: searching_value },
    function(result) {
      console.log(result);
  });
}
