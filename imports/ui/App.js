import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { DragDropContext } from 'react-beautiful-dnd';//Beautiful Drag and Drop npm package

import List from './List.js';

import { Lists } from '../api';

class App extends Component {
    addList = () => {
        const { lists } = this.props;

        Lists.insert({
            title: `Untitled ${lists.length + 1}`,
            createdAt: Date.now()
        });
    };

    renderLists = () => {
        const { lists } = this.props;

        if (!lists.length) {
            return <div className="no-lists">No lists to show!</div>;
        }

        return this.props.lists.map(list => (
            <List {...list} key={list._id} />
        ));
    };

    onDragEnd = ({ draggableId: cardId, source, destination, reason }) => {
        if (reason === 'DROP') {
            Meteor.call('updateMultipleCards', cardId, source, destination);
        }
    };

    render() {
        const { isLoading } = this.props;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="app-container">
                    <header className="app-header">
                        <h1>
                            <a
                                className="fa fa-github"
                            />{' '}
                            Simple Meteor Trello
                        </h1>
                        {!isLoading && (
                            <button
                                className="btn btn-info"
                                onClick={this.addList}
                            >
                                <i className="fa fa-plus" /> Add List
                            </button>
                        )}
                    </header>
                    <div className="list-container">
                        {!isLoading && this.renderLists()}
                        {isLoading && (
                            <div className="lists-loading">
                                <i className="fa fa-circle-o-notch fa-spin" />
                            </div>
                        )}
                    </div>
                </div>
            </DragDropContext>
        );
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('lists');
    return {
        lists: Lists.find({}, { sort: { createdAt: 1 } }).fetch(),
        isLoading: !handle.ready()
    };
})(App);


