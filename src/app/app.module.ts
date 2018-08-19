import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './freeman-pro/data-binding/data-binding.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { EmbededDirectivesComponent } from './freeman-pro/embeded-directives/embeded-directives.component';
import { EventsFormsComponent } from './freeman-pro/events-forms/events-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBaseOnModelComponent } from './freeman-pro/form-base-on-model/form-base-on-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    MenuComponent,
    EmbededDirectivesComponent,
    EventsFormsComponent,
    FormBaseOnModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
