import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header'
import AboutContent from "../components/AboutContent"
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <AboutContent />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
