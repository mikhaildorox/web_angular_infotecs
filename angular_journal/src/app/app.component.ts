// Определяет класс, который содержит логику основной страницы приложения.
import {Component} from '@angular/core';
import {INote} from "./models/note";
import {notes as data} from "./data/notes"

// компонент декоратор можно использовать на странице
@Component({
  selector: 'app-root', //Сообщает имя селектора CSS, который используется в шаблоне для создания экземпляра этого компонента.
  templateUrl: './app.component.html', //Задает HTML-файл, который нужно связать с этим компонентом.
  styleUrls: ['./app.component.css'] //Предоставляет расположение и имя файла для стилей, которые применяются конкретно к этому компоненту.
})
export class AppComponent {
  title = 'angular journal';

  filter: 'all' | 'done' = 'all';

  notes: INote[] = data
  get filterNotes() {
    if (this.filter === 'all') {
      return this.notes;
    }
    return this.notes.filter(note => this.filter === 'done' ? note.done : !note.done);
  }

  addNote(description: string) {
    this.notes.unshift({
      date: new Date().toLocaleString(),
      description,
      done: false
    });
  }

  remove(note: INote) {
    this.filterNotes.splice(this.filterNotes.indexOf(note), 1);
  }
}
