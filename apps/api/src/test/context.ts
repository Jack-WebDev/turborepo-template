import { createDatabaseContext, destroyDatabaseContext } from '@codeforge/datakit';
import { createEmailClient } from '@codeforge/emailkit';

import assert from 'assert';
// import { DatabaseCache } from '~/cache/cache';
import { config } from '~/config';
import { Context } from '~/context';
// import { storageClient } from '~/storage';

import { Environment } from './environment';
import { contexts } from './globals';

export async function createContext(env: Environment): Promise<Context> {
  const db = await createDatabaseContext({
    db: env.db,
  });

  // const cache = new DatabaseCache(db);
  const mailer = createEmailClient(config.mail);

  const ctx = Context.init({ db, mailer });

  contexts.set(ctx.id, ctx);

  return ctx;
}

export async function destroyContext(ctx: Context): Promise<void> {
  assert.ok(ctx, 'Cannot destroy an invalid context');

  // await destroyDatabaseContext(ctx);
}

interface Options {
  wrapDbInTransaction: boolean;
}
