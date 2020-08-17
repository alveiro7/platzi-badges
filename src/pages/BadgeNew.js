import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
    state = {
        form:{
            firstName: 'Alveiro',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter:''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            avatarUrl="https://akns-images.eonline.com/eol_images/Entire_Site/201909/rs_600x600-190109152451-600x600-cristianoronaldo-gj-1-9-19.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;