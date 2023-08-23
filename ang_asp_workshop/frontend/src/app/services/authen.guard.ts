import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RestService } from './rest.service';

export const authenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const rest = inject(RestService);

  if (rest.isLoggedIn) {
    // already logged-in
    if (state.url == '/login') {

      router.navigate(['stock']);
    }
    return true;
  } else {
    // not yet logged-in
    if (state.url != '/login') {
      router.navigate(['login']);
    }
    return true;
  }
};
