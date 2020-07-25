import React from 'react';
import './AboutContent.css';
import { IonHeader, IonToolbar, IonAvatar, IonTitle } from '@ionic/react';
import LinksBtn from './LinksBtn'
import Img from '../assets/images/portfolio.png'

const AboutContent: React.FC = () => (
    <IonHeader>
        <IonToolbar style={{"textAlign": "center"}}>
            <IonAvatar style={{"float": "left", "margin": "3px", "background": "transparent", "position": "absolute"}}>
            <img alt="me" src={Img} />
            </IonAvatar>
        <IonTitle style={{'lineHeight': "70px", "fontSize": "20px"}}>Timothy Mickiewicz</IonTitle>
        </IonToolbar>
        <LinksBtn/>
    </IonHeader>
);

export default AboutContent;