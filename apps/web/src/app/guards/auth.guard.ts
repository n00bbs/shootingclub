import { inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlSerializer,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * Guard that checks if the user is authenticated
 * @returns a function that can be used as a guard
 */
export const IsAuthenticatedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.credentialsAreSet()) {
    return true;
  }

  return router.createUrlTree(['/login'], {
    queryParams: {
      redirectUrl: state.url,
    },
  });
};
