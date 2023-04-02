import { Fragment } from 'react';
import { Component } from 'react/cjs/react.development';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
]

class UserFinder extends Component{
    static contextType=UsersContext
    constructor() {
        super()
        this.state = {
            filteredUsers:DUMMY_USERS,
            searchTerm:''
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm:event.target.value
        })
    }

    componentDidMount() {
        this.setState({filteredUsers:this.context.users})
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers:this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

        render() {
        return (
            <ErrorBoundary>
                <Fragment>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    <Users users={this.state.filteredUsers} />
                </Fragment>
            </ErrorBoundary>
           
        )
    }
}

export default UserFinder;