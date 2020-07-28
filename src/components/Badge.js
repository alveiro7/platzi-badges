import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </header>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>
                        Alveiro <br /> Hoyos
                    </h1>
                </div>

                <div>
                    <p>Frontend Engineer</p>
                    <p>@alveiro7</p>
                </div>

                <footer>
                    #platziconf
                </footer>
            </div>
        );
    }
}

export default Badge;