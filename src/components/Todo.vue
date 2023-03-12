<template>
  <div class="container">
    
    <h1>ToDo List</h1>
    <form @submit.prevent="addNote">
      <input type="text" v-model="newNote" >
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <span v-if="editedNoteIndex !== index">{{ note }}</span>
        <form v-else @submit.prevent="saveNote">
          <input type="text" v-model="editedNote">
          <button type="submit">Submit</button>
        </form>
        <button @click="editNote(index)">Edit</button>
        <button @click="deleteNote(index)">Clear</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDo List',
  props:{
    title:{
      type: String,
      default: 'Todo List'
    }
  },
  data() {
    return {
      newNote: '',
      notes: [],
      editedNote: '',
      editedNoteIndex: null
    }
  },
  methods: {
    addNote() {
      this.notes.push(this.newNote);
      this.newNote = '';
    },
    editNote(index) {
      this.editedNote = this.notes[index];
      this.editedNoteIndex = index;
    },
    saveNote() {
      this.notes[this.editedNoteIndex] = this.editedNote;
      this.editedNote = '';
      this.editedNoteIndex = null;
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    }
  }
}
</script>

<style>

</style>
