import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions';
import { Link } from 'react-router-dom';


class JobsList extends React.Component{
    // Lifecycle function, do pre-loading operations
    componentDidMount() {
        this.props.fetchJobs();
    }

    renderJobs(){
        return _.map(this.props.jobs, job => {
            return (
                <li className="list-group-item" key={job.id}>
                    <label>
                        <Link to={`/posts/${job.id}`}>
                                {job.title}
                        </Link>
                    </label>
                    <label> {job.description} </label>
                </li>
            );
        })
    }


    render() {
        console.log(this.props.jobs);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/jobs/detail">
                        Job List
                    </Link>
                </div>
                <h3>Jobs</h3>
                <ul className="list-group">
                    {this.renderJobs()}
                </ul>
            </div>
        );

    }
}


function mapStateToProps(state) {
    return { jobs: state.jobs };
}

export default connect(mapStateToProps, { fetchJobs })(JobsList);


// export default connect(null, { fetchJobs })(JobsList);
