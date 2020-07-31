import React from 'react';
import { IonPage } from '@ionic/react';
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
