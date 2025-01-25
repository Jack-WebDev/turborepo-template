import { rule } from 'graphql-shield';
import { Context } from '~/context';
import { UserRole } from '../user';

export const isActiveUser = rule({ cache: 'contextual' })(async (parent, args, ctx: Context) => {
  return ctx.auth.isActiveUser();
});

const createUserRoleRule = (roles: UserRole[]) => {
  return rule({ cache: 'contextual' })(async (parent, args, ctx: Context) => {
    return ctx.auth.hasOneOfRole(roles);
  });
};

export const isAdmin = createUserRoleRule([UserRole.Admin])
export const isStaff = createUserRoleRule([UserRole.Staff])