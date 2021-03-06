import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
        } = this.props
        return (
            <div className="Badge">
                <header className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </header>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
                    <h1>
                        {firstName} <br /> {lastName}
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </div>

                <footer className="Badge__footer">
                    #platziconf
                </footer>
            </div>
        );
    }
}

export default Badge;