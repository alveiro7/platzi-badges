import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <header className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </header>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>
                        Alveiro <br /> Hoyos
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Frontend Engineer</h3>
                    <div>@alveiro7</div>
                </div>

                <footer className="Badge__footer">
                    #platziconf
                </footer>
            </div>
        );
    }
}

export default Badge;