import React, { Component } from 'react';
import RelativeDate from 'relative_date';
import TextArea from 'react-autosize-textarea';
// import { withTracker } from 'meteor/react-meteor-data';
import '../../styles/card.css';
import { Cards } from '../../api';

const stylex = {};

export default class Card extends React.PureComponent{
    state = {
        editing:false
    };
    
    toggleEditing = editing => () => {
        this.setState(
            {
                editing
            },
            () => {
                if(this.state.editing){
                    this.input.setSelectionRange(0,this.input.value.length);
                }
            }
        );
    };

    handleKeyDown = e  =>{
        if(e.key === 'Enter'){
            e.preventDefault();
        }

    };

    handleKeyUp = e => {
        const { _id } = this.props;
        const body = this.input.value.trim();

        if (e.key === 'Enter' && body ){
            Cards.update( { _id } , { $set : { body } })//findById + PUT
            this.toggleEditing(false)();
        }
        
        if (e.key === 'Escape'){
            this.toggleEditing(false)();;
        }
    };

    handleInputRef = ref => {
        this.input = ref;
    };

    handleDeleteCard = () => {
        const { _id } = this.props;
        Cards.remove({ _id });//findById + DELETE
    };
    
    render(){
        const { body , createAt , provided } = this.props;
        const {editing} = this.state;

        return(
            <div
                className="card"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <div className="card-data" onClick={this.toggleEditing(true)}>
                    {editing && (
                        <TextArea 
                            style={stylex}
                            placeholder="Enter title for this Card"
                            innerRef={this.handleInputRef}
                            onKeyUp={this.handleKeyUp}
                            onKeyDown={this.handleKeyDown}
                            defaultValue={body}
                            autoFocus
                        />
                    )}
                    {!editing && <span>{body}</span> }

                </div>
                
                <div className="card-created">
                    {/* Assign Task to User */}
                    <div>                        

                    </div>
                    {RelativeDate(createAt).text}
                    <i
                        className="fa fa-trash"
                        onClick={this.handleDeleteCard}
                    />
                </div>
            </div>
        );

    };

};

