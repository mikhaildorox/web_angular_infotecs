/* Определяет файлы, которые использует приложение.
Этот файл действует как центральный узел для других файлов в приложении. */
import { NgModule } from '@angular/core'; // подключаю декоратор
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// настраиваю приложение
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// навешиваю данный класс, но функционал настраивается с помощью декоратора
export class AppModule { }
