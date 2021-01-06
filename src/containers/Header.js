import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { push } from 'connected-react-router';
import { selectRoot, logout, resetForm } from 'react-formio';

// import NavLink from '../NavLink';
import { AuthConfig } from '../config';

const Header = class extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { auth } = this.props;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" alt="Supply Chain" src="./thumbnail.jpg" height="45px" />
                    </Link>
                    <h4><b>PepsiCo</b></h4>
                    <ul className="nav navbar-nav ml-auto">
                        {auth.authenticated ? (
                            <li className="nav-item profile">
                                <span className="profile_name">
                                    {auth.user.data.email}
                                    <span className="profile_icon fa fa-user-circle-o" />
                                </span>
                                <span className="nav-link" role="navigation link"
                                    onClick={this.props.logout}>
                                    <span className="fa fa-sign-out" />&nbsp;{'Logout'}
                                </span>
                            </li>
                        ) : (
                                <NavLink to={'/login'} role="navigation link" className="nav-link">
                                    {'Login'}
                                </NavLink>
                            )}
                    </ul>
                </div>
            </nav>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         auth: selectRoot('auth', state),
//         // languageParams: selectRoot('languageParams', state),
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (language) => {
            // window.sessionStorage.removeItem('filters');
            dispatch(logout());
            dispatch(push('/'));
            // dispatch(push(`/${language}${AuthConfig.anonState}`));
            // dispatch(resetForm('headerFilterForm'))
        },
        // setLanguage: (language) => {
        //     dispatch(setLanguage(language));
        // }
    };
};

export default connect(null, mapDispatchToProps)(Header);
