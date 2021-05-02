import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  {  path : ' ', component: TableComponent},
  {  path : 'studentList', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
