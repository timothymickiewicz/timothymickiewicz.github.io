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
         title: "Fitness",
         text: "A solo developed full-stack application that keeps track of the user's workouts. The information entered is graphed out for each exercise and can be viewed to see progress or sticking points. A couple helpful tools have been built in as well, such as a barbell plate calculator and an estimation tool for how much weight the user should increase.",
         src: "./images/fitness.png",
         github: "https://github.com/timothymickiewicz/Fitness",
         live: "https://cryptic-thicket-72551.herokuapp.com/"
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
[
    {id: "languages", skills: ["HTML5", "CSS3", "JavaScript", "Node", "MySQL", "MongoDB", "CoffeeScript"]},
    {id: "frameworks", skills: ["React", "Handlebars", "Ionic", "Express"]},
    {id: "libraries", skills: ["Passport", "Bootstrap", "jQuery", "Sequelize", "Mongoose", "Moment", "Morgan, Recharts"]},
    {id: "extras", skills: ["Google API Libraries", "Geolocation", "User Authentication", "Bcrypt Encryption", "Dynamic Rendering", "Responsive Design", "Database Design", "Data Visualization"]}
]

// Iterates each col size and adjusts accordingly
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
                    <div id="linksWrap">
                        <a href="${project.github}" class="projectGitHub">See Code</a>
                    <a href="${project.live}" class="projectLive">See Live</a>
                    </div>
                    <h1 class="projectTitle">${project.title}</h1>
                    <div class="projectText">${project.text}</div>
                    <img class="projectImages" src="${project.src}" />
                </div>
            `;
            $(currentProject).appendTo(`#projectsField`);
        }
        runTemplate();
    });
}

let renderSkills = () => {
    skills.map(typeOfSkill => {
        // Counts to be used in row calculations
        let cardCount = rowCount = 0;

        // Generates fields for each skill grouping
        let generateSkillField = () => {
            let skillField = 
            `
                <div class="col-12 skillCardGroupHeader">
                    ${typeOfSkill.id[0].toUpperCase() + typeOfSkill.id.slice(1)}
                    <hr class="skillsHr"></hr>
                    <div class="col-12 skillTypeContainer${typeOfSkill.id}">
                        <div class="row">
                            <div class="col-12 skillCardGroup" id="${typeOfSkill.id+rowCount}">
                            </div>
                        </div>
                    </div>
                </div>
            `
            $(skillField).appendTo(`#skillsField`);
        }
        generateSkillField();
        // Generates each skill card to be added into the above sections according to their skill group, adding new rows when current is full
        typeOfSkill.skills.map((skill, index) => {
            let currentSkill =
            `
                <div class="col-3 skillCard">
                    ${skill}
                </div>
            `;
            let runTemplate = () => {
                cardCount ++;
                if (cardCount > 4) {
                    cardCount = 1;
                    rowCount ++;
                    let newRow =
                    `
                    <div class="row">
                        <div class="col-12 skillCardGroup" id="${typeOfSkill.id+rowCount}">
                            ${currentSkill}
                        </div>
                    </div>

                    `;
                    $(newRow).appendTo(`.skillTypeContainer${typeOfSkill.id}`);
                }
                else {
                    $(currentSkill).appendTo(`#${typeOfSkill.id+rowCount}`);
                }
            }
            runTemplate();
        })
    });
}

$( document ).ready(function() {
    renderProjects();
    renderSkills();
    setCols();
});
