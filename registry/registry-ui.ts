import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'input',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/input.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
