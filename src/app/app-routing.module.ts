import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataBindingComponent} from './freeman-pro/data-binding/data-binding.component';
import {EmbededDirectivesComponent} from './freeman-pro/embeded-directives/embeded-directives.component';
import {EventsFormsComponent} from './freeman-pro/events-forms/events-forms.component';

const routes: Routes = [
  {path: 'data-binding' , component: DataBindingComponent},
  {path: 'embeded-directives' , component: EmbededDirectivesComponent},
  {path: 'events-forms' , component: EventsFormsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
