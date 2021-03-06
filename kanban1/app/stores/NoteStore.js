import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore{
    constructor(){
        this.bindActions(NoteActions);

        this.notes = [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ];
    }

    create(note){
        const notes = this.notes;
        note.id = uuid.v4();

        this.setState({
            notes: notes.concat(note)
        });

    }

    update(updatedNote){
        const notes = this.notes.map(note =>{
            if(note.id === updatedNote.id){
                return Object.assign({},note,updatedNote);
            }
            return note;
        })
        this.setState({notes});
    }

    delete(id){
        this.setState({
            notes:this.notes.filter(note=>note.id !== id)
        });
    }
}

export default alt.createStore(NoteStore,'NoteStore');