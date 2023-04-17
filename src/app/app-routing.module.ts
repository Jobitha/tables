import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { PracticeComponent } from './practice/practice.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : 'tables',component: TablesComponent},
  {path : 'practice',component: PracticeComponent},
  {path : 'form',component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
