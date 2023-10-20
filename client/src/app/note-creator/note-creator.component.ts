import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css'],
  providers: []
})
export class NoteCreatorComponent {
  newNote = {
    title: '',
    note: ''
  };
  constructor(private http: HttpClient) {}
  createNote() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('/api/notes', this.newNote, { headers })
      .subscribe(
        (response: any) => {
          console.log('Note created:', response);
          // Handle success, e.g., show a success message or navigate to a different page.
        },
        (error) => {
          console.error('Error creating note:', error);
          // Handle the error, e.g., display an error message to the user.
        }
      );
  }
}
