import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import { fetchJobs as fetchJobsReducer } from './reducer_jobs';
import JobsReducer from './reducer_jobs';

const rootReducer = combineReducers({
    jobs: JobsReducer,
    form: formReducer
});

export default rootReducer;
