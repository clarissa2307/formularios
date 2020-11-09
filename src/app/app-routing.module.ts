import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [

 { path: 'templete', component: TemplateComponent },
 { path: 'reactivo', component: ReactiveComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

@NgModule({
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
