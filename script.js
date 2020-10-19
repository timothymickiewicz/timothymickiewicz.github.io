const projects = 
[
    {
        title: "Dine-or-Dash",
        text: "A team developed food finding application! Users can create accounts and browse nearby restaurants which they can then save for later. Users can also leave reviews which are seen by others as they browse.",
        src: "./images/dineordash.png",
        github: "https://github.com/timothymickiewicz/dine-or-dash",
        live: "https://agile-beyond-76515.herokuapp.com/"
     },
     {
         title: "Fit To Failure",
         text: "A solo developed full-stack application that keeps track of the user's workouts throughout the week. The last workout started can be added onto and everything is displayed on the dashboard for easy viewing!",
         src: "./images/fittofailure.png",
         github: "https://github.com/timothymickiewicz/FitToFailure",
         live: "https://fast-stream-10384.herokuapp.com/"
     },
     {
         title: "Quick Notes",
         text: "A solo developed full stack application that allows a user to create notes. Notes are saved and the user can revisit past notes by accessing the sidebar.",
         src: "./images/quicknotes.png",
         github: "https://github.com/timothymickiewicz/QuickNotes",
         live: "https://quick-notes-tm.herokuapp.com/"
     },
     {
         title: "Manpower",
         text: "A solo developed full stack application that uses React to dynamically display employee information. The results are filtered as you type into the search bar, or sorted alphabetically/numerically.",
         src: "./images/manpower.png",
         github: "https://github.com/timothymickiewicz/Manpower",
         live: "https://timothymickiewicz.github.io/Manpower/"
     },
     {
         title: "Branch Manager",
         text: "A solo Node.js CLI application to generate team member information. You are able to create a team consisting of managers, engineers, and interns with information such as: emails, employee IDs, names, github accounts, schools, and office numbers. The result is compiled into an HTML page.",
         src: "./images/branchmanager.png",
         github: "https://github.com/timothymickiewicz/BranchManager"
     },
     {
         title: "Weather Dashboard",
         text: "A solo developed full stack application to show the current weather of a city of the user's choice, as well as a 5 day forecast. The last entered location will be displayed first when the page loads. Previous entered cities will be stored on the side as buttons for future reference.",
         src: "./images/weatherdashboard.png",
         github: "https://github.com/timothymickiewicz/WeatherDashboard",
         live: "https://timothymickiewicz.github.io/WeatherDashboard/"
     }
];

const skills = 
{
    languages: ["HTML5", "CSS3", "JavaScript/Node", "MySQL", "MongoDB", "CoffeeScript"],
    frameworks: ["React", "Handlebars", "Ionic", "Express"],
    libraries: ["Passport", "Bootstrap", "jQuery", "Sequelize", "Mongoose", "Moment", "Morgan"],
    extras: ["Google API Libraries", "Geolocation", "User Authentication", "Bcrypt Encryption", "Dynamic Rendering", "Responsive Design", "Database Design"]
 }

let setCols = () => {
    for (let i=1;i<12;i++) {
        $(`.col-${i}`).css(`width`, `calc(100% * (${i}/12))`).css(`box-sizing`, `border-box`).css(`float`, `left`).css(`padding`, `1vw`);
    }
};

let renderProjects = () => {
    projects.map((project, index) => {
        let runTemplate = () => {
            let currentProject = 
            `
            <div class="col-4 project"> 
                <a href="${project.github}" class="projectGitHub">See Code</a>
                <a href="${project.live}" class="projectLive">See Live</a>
                <h1 class="projectTitle">${project.title}</h1>
                <div class="projectText">${project.text}</div>
                <img class="projectImages" src="${project.src}" />
            </div>
            `;
            $(currentProject).appendTo(`#projectsField`);
        }

        if (index<3) {
            runTemplate();
        }

        else if (index>=3) {
            runTemplate();
        }

    });
}

$( document ).ready(function() {
    renderProjects();
    setCols();
});
