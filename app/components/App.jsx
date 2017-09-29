import React, {Component} from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack',
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React',
                },
                {
                    id: uuid.v4(),
                    task: 'Go out for beer',
                },
            ],
        };
    }
    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes items={notes}/>
            </div>
        );
    }
    addNote() {
        console.log('Added');
    }
}
