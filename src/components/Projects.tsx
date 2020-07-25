import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import dayr8 from '../assets/images/dayr8.png'
import manpower from '../assets/images/manpower.png'
import dineordash from '../assets/images/dineordash.png'
import fittofailure from '../assets/images/fittofailure.png'
import weatherdashboard from '../assets/images/weatherdashboard.png'
import branchmanager from '../assets/images/branchmanager.png'

const Projects: React.FC = () => {

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={dayr8} alt="dayr8 screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>React, MySQL, Node.js, User Auth, React-Charts, Predictive Analytics, Material UI, Express, Moment.js</IonCardSubtitle>
                                <IonCardTitle>DayR8</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            Team developed Full Stack application that takes user input about their daily emotions and provides visual and predictive data over time. Users can use this personal data to make informed decisions about their life, as well as detect trends in their emotional health on a daily, weekly, monthly, or yearly basis. 
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={dineordash} alt="dineordash screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>Handlebars, Node.js, jQuery, Semantic UI, CSS3, HTML5, Geolocation, MySQL, Express, User Auth</IonCardSubtitle>
                                <IonCardTitle>Dine-or-Dash</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            Team developed Full Stack application that finds nearby restaurants using the users geolocation and allows the user to see pictures and reviews before they like/dislike it. Liked restaurants are moved to the user's liked page and can be saved, deleted, or the user can leave a custom in-app review that other app users will see.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={manpower} alt="manpower screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>HTML5, CSS3, JavaScript, React.js, Axios, GitHub Pages</IonCardSubtitle>
                                <IonCardTitle>Manpower</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            Solo developed application that takes an object of employee information and displays it for easy access by management. Employees can be sorted forwards and backwards by first name, last name, and phone number. The user can also start typing to filter all matching information.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={weatherdashboard} alt="weatherdashboard screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>HTML5, CSS3, JavaScript, jQuery, Ajax, Moment.js, Bootstrap</IonCardSubtitle>
                                <IonCardTitle>Weather Dashboard</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            A solo developed application that uses the Open Weather Map API to get the current weather for a given city. The user enters a city and is presented with current weather conditions, as well as a 5 day forecast of temperature, wind speed, cloud conditions, UV index, and humidity.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={branchmanager} alt="branchmanager screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>HTML5, CSS3, JavaScript, Inquirer.js, RegEx validation, Path.js</IonCardSubtitle>
                                <IonCardTitle>Branch Manager</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            Solo developed CLI application that allows the user to build their development team into a templated HTML file output. The user is asked a series of questions when they start the program, such as what is the employees name, title, department, ID number, and other information.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size-sm="12" size-md="4">
                        <IonCard style={{"background": "#dee1e1"}}>
                            <img src={fittofailure} alt="fittofailure screenshot" />
                            <IonCardHeader>
                                <IonCardSubtitle>HTML5, CSS3, JavaScript, Node.js, MongoDB, Mongoose, Heroku, Express.js, EsLint, Moment.js, Path.js</IonCardSubtitle>
                                <IonCardTitle>Fit-to-Failure</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            Solo developed fitness application that allows a user to save information about their workout. The data is returned in graphs and allows the user to track their progress over time, as well as detect trends in their workout style that may need correction.
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
        );
    };
    
export default Projects;