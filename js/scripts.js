$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransporationMode = $(this).val();
      $('#work-responses').append(workTransporationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
