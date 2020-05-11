import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const appRoutes: Routes = [
  { path: 'cursos',
   loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
   canActivate: [AuthGuard]},
   
  { path: 'alunos',
   loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
   canActivate: [AuthGuard]},

  { path: 'login',
   component: LoginComponent,},

  { path: '',
   component: HomeComponent,
   canActivate: [AuthGuard]},
  
  // { path: 'cursos', component: CursosComponent},
  // { path: 'curso/:id', component: CursoDetalheComponent},
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
