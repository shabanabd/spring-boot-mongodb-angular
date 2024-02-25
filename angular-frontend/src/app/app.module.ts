import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule  }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
