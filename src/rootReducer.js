import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { auth, form, forms, submission, submissions } from 'react-formio';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: auth(),
    form: form({ name: 'form' }),
    flusForm: form({ name: 'flus' }),
    forms: forms({ name: 'forms', query: { type: 'form' } }),
    submission: submission({ name: 'submission' }),
    submissions: submissions({ name: 'submissions' }),
    // event: combineReducers({
    //     form: form({ name: 'event' }),
    //     submission: submission({ name: 'event' }),
    //     submissions: submissions({ name: 'event' }),
    // }),
    flus: combineReducers({
        form: form({ name: 'flus' }),
        submission: submission({ name: 'flus' }),
        submissions: submissions({ name: 'flus' }),
    })
})
