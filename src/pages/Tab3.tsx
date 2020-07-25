import React from 'react';
import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import LinksBtn from '../components/LinksBtn'
import Img from '../assets/images/portfolio.png'

const Tab3: React.FC = () => {
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
