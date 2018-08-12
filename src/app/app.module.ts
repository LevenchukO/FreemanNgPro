import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './freeman-pro/data-binding/data-binding.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbededDirectivesComponent } from './freeman-pro/embeded-directives/embeded-directives.component';
import { EventsFormsComponent } from './freeman-pro/events-forms/events-forms.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    MenuComponent,
    EmbededDirectivesComponent,
    EventsFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
