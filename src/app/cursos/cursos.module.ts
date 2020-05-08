import { NgModule } from "@angular/core";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule, 
        MatToolbarModule,
        MatSelectModule, 
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatDividerModule,
        NoopAnimationsModule,

    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent,
    ],
    providers: [CursosService],
})

export class CursosModule {

}