import * as migration_20250424_110937_initial_migration from './20250424_110937_initial_migration';
import * as migration_20250424_111008_adding_orderable_to_themes from './20250424_111008_adding_orderable_to_themes';

export const migrations = [
  {
    up: migration_20250424_110937_initial_migration.up,
    down: migration_20250424_110937_initial_migration.down,
    name: '20250424_110937_initial_migration',
  },
  {
    up: migration_20250424_111008_adding_orderable_to_themes.up,
    down: migration_20250424_111008_adding_orderable_to_themes.down,
    name: '20250424_111008_adding_orderable_to_themes'
  },
];
