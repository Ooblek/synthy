$(window).on('load', function () {
  jQuery("#load").fadeOut("slow");
});

$(document).ready(function() {
  $('#coll-but').click(function() {
    if(this.text == "See more"){
      this.text="See less";
    }
    else{
      this.text = "See more";
    }
  });

});
