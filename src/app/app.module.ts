import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RightAnswerComponent } from './components/right-answer/right-answer.component';
import { WrongAnswerComponent } from './components/wrong-answer/wrong-answer.component';
import { RulesComponent } from './components/rules/rules.component';
import { MomomotusComponent } from './pages/momomotus/momomotus.component';
import { FillFirstNameComponent } from './pages/fill-first-name/fill-first-name.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightAnswerComponent,
    WrongAnswerComponent,
    RulesComponent,
    MomomotusComponent,
    FillFirstNameComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
