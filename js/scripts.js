$(document).ready(function(){
  $("form").submit(function(event){
    $("div").removeClass("has-error");
    //$(".help-block").text("");
    event.preventDefault();
    var name = $("#nameInput").val();
    var age = parseInt($("#ageInput").val());
    var date = parseInt($("input:radio[name=idealDate]:checked").val());
    alert(date);
    if(!name || !age || !date){
      if(!name){
        $("#nameBox").addClass("has-error");
        $("#nameHelp").text("Please enter your name");
      }
      if(!age){
        $("#ageBox").addClass("has-error");
      }
      if(!date) {
        $(".radio").addClass("has-error");
      }
    } else {
    if(age < 18){
      alert("Uhhh. Try again when you're 18, kid.")
    } else {
      if(date === 1 && age > 40){
        window.location.href = "gandalf.html";
      } else if(date===1 && age <=40){
        window.location.href = "harry.html";
      } else if(date===2 && age > 40){
        window.location.href = "sauron.html";
      } else {
        window.location.href = "draco.html";
      }
    }
    }

  });
});
