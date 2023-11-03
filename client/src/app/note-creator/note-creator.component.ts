import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

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
  constructor(private dataService:DataService) {}
  createNote() {


    this.dataService.postData(this.newNote)
    .subscribe(
      (data) => {
        // Handle the response data here
        console.log(data);
      },
      (error) => {
        // Handle errors here
        console.error(error);
      }
      );
  }
}
