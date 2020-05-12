import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild{
  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean>|boolean{
        if (state.url.includes('editar')){
            alert('Usuário com acesso negado!')
            return false; 
        }
        return true;
    }
}