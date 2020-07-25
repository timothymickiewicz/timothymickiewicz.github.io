import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Header from '../components/Header'
import Skills from "../components/Skills"

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <Skills />
    </IonPage>
  );
};

export default Tab3;
