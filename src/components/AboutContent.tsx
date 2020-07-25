import React from 'react';
import './AboutContent.css';
import Img from '../assets/images/portfolio.png'
import { IonAvatar } from '@ionic/react';

const AboutContent: React.FC = () => {
    const [avatarClass, setAvatarClass] = React.useState("avatarSm");

    React.useEffect(() => {
        console.log(avatarClass)
    }, [avatarClass]);

    const handleAvatarClick = () => {
        let avatarClassSet = avatarClass === "avatarSm" ? "avatarLg" : "avatarSm"
        setAvatarClass(avatarClassSet)
    }

    return (
        <div>
            <div className="containerAv">
                <IonAvatar className="av" class={avatarClass} style={{"cursor": "pointer"}} onClick={handleAvatarClick} >
                    <img alt="me" src={Img} />
                </IonAvatar>
            </div>
            <div className="container" color="primary">
                <h2 className="tx" style={{"color": "#dee1e1", "fontFamily": "'Rowdies', cursive"}}>Hi! My name is Timothy Mickiewicz.
                <hr></hr> 
                <span style={{"color": "#1C1C1C", "fontFamily": "'Rowdies', cursive"}}>Full Stack Developer, </span><span style={{"color": "#dee1e1", "fontFamily": "'Rowdies', cursive"}}>Molecular Biologist, </span><span style={{"color": "#1C1C1C", "fontFamily": "'Rowdies', cursive"}}>Perpetual Student</span></h2>
            </div>
        </div>
    )
};

export default AboutContent;