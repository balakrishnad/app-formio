import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form, FormGrid, selectRoot, getForm,
    indexForms, getSubmissions
} from "react-formio";
import { AppConfig } from '../config';
import { SubmissionGrid } from 'react-formio/lib/components';

const Test = class extends Component {
    componentDidMount() {
        this.props.getForms(1);
        this.props.getForm();
        this.props.getSubmissions();
    }

    render() {
        const { submissions, form, forms, getForms } = this.props;

        const columns = [
            {
                key: 'data.textField',
                title: 'Text 1',
            },
            {
                key: 'data.number',
                title: 'Number',
            },
            {
                key: 'data.currency',
                title: 'Currency',
            },
            // {
            //     key: 'operations',
            //     title: 'Operations',
            // }
        ];

        return (
            <div>
                {/* <FormGrid
                    forms={forms}
                    onAction={() => { }}
                    getForms={getForms}
                /> */}
                {/* <SubmissionGrid
                    onAction={(submission, action) => {
                        debugger;
                        console.log('submission - ', submission);
                        console.log('action- ', action);
                    }}
                    // columns={columns}
                    submissions={submissions}
                    form={form.form}
                /> */}
                {/* <Form
                    src={`${AppConfig.projectUrl}/searchform`}
                    onSubmit={(submission) => {
                        debugger;
                        console.trace(submission);
                    }}
                    onChange={(submission) => {
                        debugger;
                        console.trace(submission);
                    }}
                    onError={(errors) => {
                        debugger;
                        console.trace(errors);
                    }}
                /> */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        forms: selectRoot('forms', state),
        form: selectRoot('form', state),
        submissions: selectRoot('submissions', state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getForms: (page, query = {}) => dispatch(indexForms('forms', page, query)),
        getForm: () => dispatch(getForm('form', '5ebd444a251b9e0e7437bbb1')),
        getSubmissions: () => dispatch(getSubmissions('submissions', 1, {}, '5ebd444a251b9e0e7437bbb1')),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)

