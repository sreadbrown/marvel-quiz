$(document).ready(function() {
  $("form#match").submit(function(event) {
    var gender = $("select#gender").val();
    var morals = $("select#morals").val();
    var power = $("select#power").val();

    if (gender === "Female") {
      if (morals === "Good") {
        if (power === "Flight") {
        $('#storm').show();
        }
      }
      if (morals === "Good") {
        if (power === "Strength") {
        $('#jubilee').show();
        }
      }
      if (morals === "Good") {
        if (power === "Mind") {
        $('#jeangrey').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Flight") {
        $('#polaris').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Strength") {
        $('#frost').show();
        }
      }
      if (morals === "Evil") {
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
      }
      if (morals === "Good") {
        if (power === "Strength") {
        $('#profx').show();
        }
      }
      if (morals === "Good") {
        if (power === "Mind") {
        $('#wolverine').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Flight") {
        $('#magneto').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Strength") {
        $('#juggernaut').show();
        }
      }
      if (morals === "Evil") {
        if (power === "Mind") {
        $('#sinister').show();
        }
      }
    }

    //
    // if (gender === "Male") {
    //   if (age < 35) {
    //   $('#lily').show();
    //   }
    //   if ((36 < age) && (age < 50)) {
    //   $('#pike').show();
    //   }
    //   if (age > 50) {
    //   $('#doris').show();
    //   }
    // }


     event.preventDefault();
  });
});
