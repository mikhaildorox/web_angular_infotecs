import {Component, Input} from '@angular/core'
import {INote} from "../../models/note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})
export class NoteComponent {
  @Input() note: INote

  details = false
}
