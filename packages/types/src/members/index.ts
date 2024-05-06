/**
 * @method GET
 * @path /api/users/getAll
 */
export * as getAll from './getAll.js';

/**
 * @method GET
 * @path /api/users/getOne/:id
 */
export * as getOne from './getOne.js';

/**
 * @method POST
 * @path /api/users/createUserDepartmentChange/:userId
 */
export * as createUserDepartmentChange from './createUserDepartmentChange.js';

/**
 * @method POST
 * @path /api/users/createUserDepartmentChange/:userId
 */
export * as createMember from './createMember.js';

/**
 * @method PATCH
 * @path /api/users/updateUserDepartmentChange/:userId
 */
export * as updateMember from './updateMember.js';
