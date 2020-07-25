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
                <IonFabButton><IonIcon icon={logoGithub} /></IonFabButton>
                <IonFabButton><IonIcon icon={logoLinkedin} /></IonFabButton>
                <IonFabButton><IonIcon icon={document} /></IonFabButton>
            </IonFabList>
            </IonFab>
        </div>
        );
    };
    
export default LinksBtn;