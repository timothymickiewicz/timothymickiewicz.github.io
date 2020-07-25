import React from 'react';
import './AboutContent.css';
import { IonAvatar } from '@ionic/react';
import LinksBtn from './LinksBtn'
import Img from '../assets/images/portfolio.png'
import './Header.css';

const Header: React.FC = () => {
    const [avatarClass, setAvatarClass] = React.useState("avatarSm");

    React.useEffect(() => {
        console.log(avatarClass)
    }, [avatarClass]);

    const handleAvatarClick = () => {
        let avatarClassSet = avatarClass === "avatarSm" ? "avatarLg" : "avatarSm"
        setAvatarClass(avatarClassSet)
    }

    return (
        <div className="transparent">
            <IonAvatar class={avatarClass} onClick={handleAvatarClick}>
                <img alt="me" src={Img} />
            </IonAvatar>
            <LinksBtn/>
        </div>
    )
};

export default Header;