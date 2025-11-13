import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    dependencies: ['@base-ui-components/react', 'class-variance-authority'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input',
    type: 'registry:ui',
    title: 'Input',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/input.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
