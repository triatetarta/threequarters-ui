import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'accordion',
    type: 'registry:ui',
    title: 'Accordion',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/accordion.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'alert-dialog',
    type: 'registry:ui',
    title: 'Alert Dialog',
    registryDependencies: ['@threequarters-ui/button'],
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/alert-dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'autocomplete',
    type: 'registry:ui',
    title: 'Autocomplete',
    registryDependencies: ['@threequarters-ui/input'],
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/autocomplete.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'avatar',
    type: 'registry:ui',
    title: 'Avatar',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/avatar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'collapsible',
    type: 'registry:ui',
    title: 'Collapsible',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/collapsible.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dialog',
    type: 'registry:ui',
    title: 'Dialog',
    dependencies: ['@base-ui-components/react', 'lucide-react'],
    files: [
      {
        path: 'ui/dialog.tsx',
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
  {
    name: 'label',
    type: 'registry:ui',
    title: 'Label',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
