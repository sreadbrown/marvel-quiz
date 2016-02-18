$(document).ready(function() {
  $("form#match").submit(function(event) {
    var gender = $("select#gender").val();
    var morals = $("select#morals").val();
    var power = $("select#power").val();

    $('.results').hide();

    if (gender === "Female") {
      if (morals === "Good") {
        if (power === "Flight") {
        $('#storm').show();
        }
// move on to else if 
        if (power === "Strength") {
        $('#jubilee').show();
        }

        if (power === "Mind") {
        $('#jeangrey').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Flight") {
        $('#polaris').show();
        }

        if (power === "Strength") {
        $('#frost').show();
        }

        if (power === "Mind") {
        $('#mystique').show();
        }
      }
    }

    if (gender === "Male") {
      if (morals === "Good") {
        if (power === "Flight") {
        $('#angel').show();
        }

        if (power === "Strength") {
        $('#profx').show();
        }

        if (power === "Mind") {
        $('#wolverine').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Flight") {
        $('#magneto').show();
        }

        if (power === "Strength") {
        $('#juggernaut').show();
        }

        if (power === "Mind") {
        $('#sinister').show();
        }
      }
    }

   event.preventDefault();
  });
});
