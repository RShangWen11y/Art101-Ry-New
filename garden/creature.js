$("add-creature").click(
    function () {

        let crName = $("crName").val();
        //$("#creature-list").append(crName + ",",
        if (crName == "") {
        }
        else {
            $("#creature-list").append(crName + ",");
        }
    },



    $("#crName").val(""));

    


//$("add-creature").click(
    //function(){

   // let crName = $("crName").val();
  //  $("#creature-list").append(crName + ",");

    
//});




//$("add-creature").click(
 //   function(){

   // let crName = $("crName").val();
    //$("#creature-list").append(crName);
    
    
//});