import {Component, EventEmitter, Input, Output} from '@angular/core'
import {INote} from "../../models/note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: INote

  editable = false;

  @Input() newNote: string;
  @Output() remove = new EventEmitter<INote>();

  saveNote(description: string) {
    if (!description) return;
    this.editable = false;
    this.note.description = description;
  }
}
