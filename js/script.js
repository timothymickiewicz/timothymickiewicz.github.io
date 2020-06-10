var count = 0;

var info = {
    dineordash: {
        projectTitle: "Dine-or-Dash",
        description: "A team developed application that lets the user browse restaurants based on their location or by entering a city. Restaurants can be liked or disliked as they come up. Liked restaurants will display on the `liked` page with more restaurant information and can be favorited or removed. `Favorited` restaurants are kept on the favorites page. Users must create an account and log in to use the application.",
        technologies: "HTML5, CSS3, JavaScript, jQuery, Node.js, Geolocation, Sequelize, AJAX, Express, Handlebars, Passport.js, BCrypt, SemanticUI, CoffeeScript, EsLint, MySQL, Jaws_DB, Local Storage",
        githubJumbo: "https://github.com/rwilliamsIII/dine-or-dash",
        live: "https://agile-beyond-76515.herokuapp.com/"
    },
    space: {
        projectTitle: "Space",
        description: "A team developed educational application to show users a range of information about the planets in our solar system. Planets can be compared side by side as well as by themselves.",
        technologies: "HTML5, CSS3, JavaScript, jQuery, Materialize, SymanticUI, Moment.js, AJAX",
        githubJumbo: "https://github.com/timothymickiewicz/space",
        live: "https://ryanhun7er.github.io/space/"
    },
    weatherdashboard: {
        projectTitle: "WeatherDashboard",
        description: "A solo developed full stack application to show the current weather of a city of the user's choice, as well as a 5 day forecast",
        technologies: "HTML5, CSS3, JavaScript, jQuery, Node.js, Moment.js, AJAX",
        githubJumbo: "https://github.com/timothymickiewicz/WeatherDashboard",
        live: "https://timothymickiewicz.github.io/WeatherDashboard/"
    },
    branchmanager: {
        projectTitle: "BranchManager",
        description: "A solo Node.js CLI application to generate team member information for your company. You are able to create a team consisting of a manager/managers, engineers, and interns with information such as: email addresses, employee IDs, names, github accounts, schools, and office numbers. The result is compiled into an HTML page to be viewed.",
        technologies: "HTML5, CSS3, JavaScript, Node.js, Jest, Inquirer",
        githubJumbo: "https://github.com/timothymickiewicz/BranchManager",
        live: ""
    },
    fittofailure: {
        projectTitle: "FitToFailure",
        description: "A solo developed full-stack application that keeps track of the user's workouts throughout the week. The last workout started can be added onto and everything is displaying on the dashboard for easy viewing!",
        technologies: "HTML5, CSS3, JavaScript, Node.js, MongoDB, Mongoose, Heroku, Express.js, EsLint, Moment.js, Path.js",
        githubJumbo: "https://github.com/timothymickiewicz/FitToFailure",
        live: "https://fast-stream-10384.herokuapp.com/"
    },
    workday: {
        projectTitle: "WorkDay",
        description: "A solo developed application that enables a user to create tasks throughout their day. Tasks move to the top of the list as time progresses throughout the day.",
        technologies: "HTML5, CSS3, JavaScript, jQuery, Moment.js, Bootstrap",
        githubJumbo: "https://github.com/timothymickiewicz/WorkDay",
        live: "https://timothymickiewicz.github.io/WorkDay/"
    }
};

function countDown() {
    count --;
    if (count === -1) {
        count = 5;
    }
}

function countUp() {
    count ++;
    if (count === 6) {
        count = 0;
    }
}

function checkInfo() {
    switch(count) {
        case 0:
            $("#project-title").text(info.dineordash.projectTitle);
            $("#description").text(info.dineordash.description);
            $("#technologies").text(info.dineordash.technologies);
            $("#github-jumbo").attr("href", info.dineordash.githubJumbo);
            $("#live").attr("href", info.dineordash.live).attr("target", "_blank").removeClass("disabled").css("color", "#20C20E").html("See Live");
          break;
        case 1:
            $("#project-title").text(info.space.projectTitle);
            $("#description").text(info.space.description);
            $("#technologies").text(info.space.technologies);
            $("#github-jumbo").attr("href", info.space.githubJumbo);
            $("#live").attr("href", info.space.live).attr("target", "_blank").removeClass("disabled").css("color", "#20C20E").html("See Live");
          break;
        case 2:
            $("#project-title").text(info.weatherdashboard.projectTitle);
            $("#description").text(info.weatherdashboard.description);
            $("#technologies").text(info.weatherdashboard.technologies);
            $("#github-jumbo").attr("href", info.weatherdashboard.githubJumbo);
            $("#live").attr("href", info.weatherdashboard.live).attr("target", "_blank").removeClass("disabled").css("color", "#20C20E").html("See Live");
            break;
        case 3:
            $("#project-title").text(info.branchmanager.projectTitle);
            $("#description").text(info.branchmanager.description);
            $("#technologies").text(info.branchmanager.technologies);
            $("#github-jumbo").attr("href", info.branchmanager.githubJumbo);
            $("#live").addClass("disabled").css("color", "red").html("CLI only").attr("href", "");
            break;
        case 4:
            $("#project-title").text(info.fittofailure.projectTitle);
            $("#description").text(info.fittofailure.description);
            $("#technologies").text(info.fittofailure.technologies);
            $("#github-jumbo").attr("href", info.fittofailure.githubJumbo);
            $("#live").attr("href", info.fittofailure.live).attr("target", "_blank").removeClass("disabled").css("color", "#20C20E").html("See Live");
            break;
        case 5:
            $("#project-title").text(info.workday.projectTitle);
            $("#description").text(info.workday.description);
            $("#technologies").text(info.workday.technologies);
            $("#github-jumbo").attr("href", info.workday.githubJumbo);
            $("#live").attr("href", info.workday.live).attr("target", "_blank").removeClass("disabled").css("color", "#20C20E").html("See Live");
            break;
        default:
          break;
      }
}

$( document ).ready(function() {

    checkInfo();
    
    $(".carousel-control-next").click(function() {
        // Corrects the potential of the carousel running slower than the click events, offsetting text from project image
        $(".carousel-control-prev").css("display", "none");
        $(".carousel-control-next").css("display", "none");
        setTimeout(function() {
            $(".carousel-control-prev").css("display", "");
            $(".carousel-control-next").css("display", "");
        }, 1050);
        countUp();
        checkInfo();
    });
    $(".carousel-control-prev").click(function() {
        // Corrects the potential of the carousel running slower than the click events, offsetting text from project image
        $(".carousel-control-prev").css("display", "none");
        $(".carousel-control-next").css("display", "none");
        setTimeout(function() {
            $(".carousel-control-prev").css("display", "");
            $(".carousel-control-next").css("display", "");
        }, 1050);
        countDown();
        checkInfo();
    });

    $('.carousel').carousel({
        interval: false
    });

})