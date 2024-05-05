const USER_ROLES_KEY = 'userRoles';

export function setUserRoles(request: any, roles: string[]) {
  request[USER_ROLES_KEY] = roles;
}

export function getUserRoles(request: any): string[] {
  return request[USER_ROLES_KEY];
}
