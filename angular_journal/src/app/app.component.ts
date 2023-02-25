// Определяет класс, который содержит логику основной страницы приложения.
import { Component } from '@angular/core';
// компонент декоратор можно использовать на странице
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular journal';
}
