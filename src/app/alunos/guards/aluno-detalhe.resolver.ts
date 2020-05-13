import { Injectable } from "@angular/core";
import { AlunosService } from '../alunos.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';

@Injectable()
export class AlunoDetalheResolve implements Resolve<Aluno>{
        constructor(private alunosService: AlunosService){} 

        resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any{
            let id = route.params['id'];

            return this.alunosService.getAluno(id)
        }
    
}