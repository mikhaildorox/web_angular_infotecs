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

  filter: 'all' | 'active' | 'done' = 'all';

  notes: INote[] = data
  // notes: INote[] = [
  //   { description: 'eat', done: true },
  //   { description: 'sleep', done: false },
  //   { description: 'play', done: false },
  //   { description: 'laugh', done: false },
  // ];
  get filterNotes() {
    if (this.filter === 'all') {
      return this.notes;
    }
    return this.notes.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addNote(description: string) {
    this.notes.unshift({
      id: 0,
      description,
      done: false
    });
  }

  remove(item: INote) {
    this.filterNotes.splice(this.filterNotes.indexOf(item), 1);
  }
}
