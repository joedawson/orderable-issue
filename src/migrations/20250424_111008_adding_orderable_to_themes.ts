import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "themes" ADD COLUMN "_order" varchar;
  ALTER TABLE "_themes_v" ADD COLUMN "version__order" varchar;
  CREATE UNIQUE INDEX IF NOT EXISTS "themes__order_idx" ON "themes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_themes_v_version_version__order_idx" ON "_themes_v" USING btree ("version__order");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "themes__order_idx";
  DROP INDEX IF EXISTS "_themes_v_version_version__order_idx";
  ALTER TABLE "themes" DROP COLUMN IF EXISTS "_order";
  ALTER TABLE "_themes_v" DROP COLUMN IF EXISTS "version__order";`)
}
