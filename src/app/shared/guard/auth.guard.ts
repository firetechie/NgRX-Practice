import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // const currentMenu = route.url[0].path;
  const router = inject(Router)
  const service = inject(MasterService)

  if (service.haveAccess()) {
    return true;
  } else {
    alert("access denied");
    router.navigate(['']);
    return false;
  }
};
