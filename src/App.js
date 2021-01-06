import React, { Component } from 'react'
import { Route, withRouter, HashRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectRoot } from 'react-formio';

import Header from './containers/Header'
// import Footer from './containers/Footer'
import Home from './views/Home'
import Test from './views/Test'
// import Form from './views/Form'
// import Event from './views/Event'
// import Auth from './views/Auth/Auth'
// import { AppConfig } from './config';
import Login from './views/Login'
import Chart from './views/Chart'
import Forms from './views/Forms';
import Check from './views/Check';
import ExcelToForm from './views/ExcelToForm';

const App = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: props.auth
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth) !== JSON.stringify(prevState.auth)) {
            return {
                auth: nextProps.auth,
            }
        }

        return null;
    }

    render() {
        const { auth } = this.state;
        const { location } = this.props;

        // console.log('location - ', location);

        return (
            // <Router>
            <div>
                {this.props.location.pathname !== '/test' && <Header auth={auth} />}

                <div className="container" id="main">
                    {/* <Switch> */}
                    <Route exact path="/"
                        render={() => {
                            if (!auth.authenticated)
                                return <Login />;
                            // return <Redirect to={'/login'} />
                            else
                                return <Home />;
                        }}
                    />
                    <Route path="/home" component={Home} />
                    <Route path="/test" component={Test} />
                    <Route path="/login" component={Login} />
                    <Route path="/chart" component={Chart} />
                    <Route path="/forms" component={Forms} />

                    <Route path="/check" component={Check} />

                    <Route path="/excel" component={ExcelToForm} />

                    {/* <Route path="/form" component={Form} />
                            <Route path="/event" component={Event} />
                            <Route path="/auth" component={Auth} /> */}
                    {/* </Switch> */}
                </div>

                {/* <Footer /> */}
            </div>
            // </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: selectRoot('auth', state),
    };
};

export default withRouter(connect(
    mapStateToProps,
    null
)(App));
