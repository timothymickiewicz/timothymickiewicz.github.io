import React from 'react';
import { IonHeader, IonAvatar, IonPage, IonTitle, IonToolbar, IonContent } from '@ionic/react';
import LinksBtn from '../components/LinksBtn'
import AboutContent from "../components/AboutContent"
import './Tab1.css';
import Img from '../assets/images/portfolio.png'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{"textAlign": "center"}}>
            <IonAvatar style={{"float": "left", "margin": "3px", "background": "transparent", "position": "absolute"}}>
              <img alt="me" src={Img} />
            </IonAvatar>
          <IonTitle style={{'lineHeight': "70px", "fontSize": "20px"}}>Timothy Mickiewicz</IonTitle>
        </IonToolbar>
        <LinksBtn/>
      </IonHeader>
      <IonContent>
        <AboutContent />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
