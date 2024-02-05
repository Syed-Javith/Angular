import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ExamplePipePipe } from './example-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExamplePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
