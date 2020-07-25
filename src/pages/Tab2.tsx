import React from 'react';
import { IonPage } from '@ionic/react';
import './Tab2.css';
import Header from '../components/Header'
import Projects from '../components/Projects'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <Projects />
    </IonPage>
  );
};

export default Tab2;
