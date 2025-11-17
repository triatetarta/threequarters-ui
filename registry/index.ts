import { type Registry } from 'shadcn/schema';

import { lib } from './registry-lib';
import { ui } from './registry-ui';

export const registry = {
  name: 'threequarters-ui',
  homepage: 'https://threequarters-ui.vercel.app',
  items: [...ui, ...lib],
} satisfies Registry;
