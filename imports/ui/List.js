import React,{ Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Textarea from 'react-autosize-textarea';
import { Draggable,Droppable } from 'react-beautiful-dnd';

import Card from './Card';

import '../styles/list.css'

import { Cards, Lists } from '../api';

class List extends Component {
    state = {
        cardAdd: false,
        titleEdit: false
    };

    addCard = () => {
        const { _id, cards } = this.props;
        const body = this.input.value.trim();

        if (body) {
            const cardLen = cards.length;
            Cards.insert({
                body,
                createdAt: Date.now(),
                listId: _id,
                seq: cardLen ? cards[cardLen - 1].seq + 1 : cardLen
            });

            this.toggleCardAdd(false)();
            this.cardHolder.scrollTop = this.cardHolder.scrollHeight;
        }
    };

    editTitle = () => {
        const { _id } = this.props;
        const body = this.titleInput.value.trim();

        if (body) {
            Lists.update(
                { _id },
                {
                    $set: {
                        title: body
                    }
                }
            );

            this.toggleTitleEdit(false)();
        }
    };

    toggleCardAdd = cardAdd => () => {
        this.setState(() => ({
            cardAdd
        }));
    };

    toggleTitleEdit = titleEdit => () => {
        this.setState(
            () => ({
                titleEdit
            }),
            () => {
                if (this.state.titleEdit) {
                    this.titleInput.setSelectionRange(
                        0,
                        this.titleInput.value.length
                    );
                }
            }
        );
    };

    handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    handleAddCardKeyUp = e => {
        if (e.key === 'Escape') {
            this.toggleCardAdd(false)();
        }

        if (e.key === 'Enter') {
            this.addCard();
        }
    };

    handleEditTitleKeyUp = e => {
        if (e.key === 'Escape') {
            this.toggleTitleEdit(false)();
        }

        if (e.key === 'Enter') {
            this.editTitle();
        }
    };

    handleInputRef = ref => {
        this.input = ref;
    };

    handleTitleInputRef = ref => {
        this.titleInput = ref;
    };

    handleCardHolderRef = ref => {
        this.cardHolder = ref;
    };

    deleteList = () => {
        const { _id, title } = this.props;
        if (
            confirm(
                `Are you sure you want to delete the "${title}" List? All cards associated will be lost!`
            )
        ) {
            Meteor.call('deleteListAndAllCards', _id);
        }
    };

    renderCards = () => {
        const { cards } = this.props;

        if (!cards.length) {
            return (
                <div className="no-cards">
                    No cards! Let's{' '}
                    <span onClick={this.toggleCardAdd(true)}>add a card</span>!
                </div>
            );
        }

        return cards.map((card, index) => (
            <Draggable draggableId={card._id} index={index} key={card._id}>
                {provided => <Card provided={provided} {...card} />}
            </Draggable>
        ));
    };

    render() {
        const { title, _id, isLoading } = this.props;
        const { cardAdd, titleEdit } = this.state;

        return (
            <Droppable droppableId={_id}>
                {provided => (
                    <div
                        className="list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className="list-inner">
                            <header>
                                {!titleEdit && (
                                    <strong
                                        onClick={this.toggleTitleEdit(true)}
                                    >
                                        {title}
                                    </strong>
                                )}
                                {titleEdit && (
                                    <Textarea
                                        placeholder="List title.."
                                        onKeyDown={this.handleKeyDown}
                                        innerRef={this.handleTitleInputRef}
                                        onKeyUp={this.handleEditTitleKeyUp}
                                        defaultValue={title}
                                        autoFocus
                                    />
                                )}
                                <i
                                    className="fa fa-times"
                                    onClick={this.deleteList}
                                />
                            </header>
                            {!isLoading && (
                                <div
                                    className="list-cards"
                                    ref={this.handleCardHolderRef}
                                >
                                    {this.renderCards()}
                                    {provided.placeholder}
                                </div>
                            )}
                            <footer>
                                {!cardAdd && (
                                    <button
                                        className="list-add-card-btn btn btn-light"
                                        onClick={this.toggleCardAdd(true)}
                                    >
                                        <i className="fa fa-plus" /> Add Card
                                    </button>
                                )}
                                {cardAdd && (
                                    <div className="list-input">
                                        <Textarea
                                            placeholder="Enter card details.."
                                            onKeyDown={this.handleKeyDown}
                                            onKeyUp={this.handleAddCardKeyUp}
                                            innerRef={this.handleInputRef}
                                            autoFocus
                                        />
                                        <button
                                            className="btn btn-success"
                                            onClick={this.addCard}
                                        >
                                            <i className="fa fa-check" /> Save
                                        </button>
                                    </div>
                                )}
                            </footer>
                        </div>
                    </div>
                )}
            </Droppable>
        );
    }
}

export default withTracker(props => {
    const handle = Meteor.subscribe('cards', props._id);
    return {
        cards: Cards.find(
            { listId: props._id },
            { sort: { seq: 1 } }
        ).fetch(),
        isLoading: !handle.ready()
    };
})(List);
