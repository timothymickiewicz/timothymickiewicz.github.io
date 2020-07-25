import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { personAddOutline, document, logoGithub, logoLinkedin } from 'ionicons/icons';

const LinksBtn: React.FC = () => {

    return (
        <div>
            <IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={personAddOutline} />
            </IonFabButton>
            <IonFabList side="bottom">
                <IonFabButton href="https://github.com/timothymickiewicz" target="_blank"><IonIcon icon={logoGithub} /></IonFabButton>
                <IonFabButton href="https://www.linkedin.com/in/timothymickiewicz1995/" target="_blank"><IonIcon icon={logoLinkedin} /></IonFabButton>
                <IonFabButton href="https://docs.google.com/document/d/1wuMLPZia-bG3_fhXYQ458jJmht_-UwGOo-Q3TjUwSqI/edit?usp=sharing" target="_blank"><IonIcon icon={document} /></IonFabButton>
            </IonFabList>
            </IonFab>
        </div>
        );
    };
    
export default LinksBtn;