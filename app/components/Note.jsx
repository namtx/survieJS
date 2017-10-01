import React, {Component} from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);

        this.finishEdit = this.finishEdit.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
        this.edit = this.edit.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderTask = this.renderTask.bind(this);

        this.state = {
            editing: false,
        };
    }
    render() {
        const editing = this.state.editing;

        return (
            <div>
                {editing ? this.renderEdit() :this.renderTask()}
            </div>
        );
    }

    renderEdit() {
        return <input type='text' autoFocus={true} defaultValue={this.props.task} onBlur={this.finishEdit} onKeyPress={this.checkEnter}
    }

    renderTask() {
        render <div onClick={this.edit}>{this.props.task}</div>
    }

    edit() {
        this.setState({
            editing: true
        });
    }
}
