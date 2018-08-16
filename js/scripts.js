$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    // First Example
    // $("input:checkbox[name=work-transportation]:checked").each(function(){
    //   // var workTransporationMode = $(this).val();
    //   // $('#work-responses').append(workTransporationMode + "<br>");

      // Array
      var userReversedResponses = [];
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        userReversedResponses.push("<br>" + workTransportationMode);
      });
      userReversedResponses.reverse();
      $('#work-responses').append(userReversedResponses);

    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    $('#transportation_survey').hide();
  });
});
