import { Schematic } from './webpack.config'

/**
 * Configure all implemented schematics.
 */
export const collection: Schematic[] = [
    {
        id: 'ng-add',
        description: 'Add the schematic collection to your Angular project.',
        hidden: true,
    },
    {
        id: 'component',
        aliases: ['c'],
        description: 'Generate a new Angular component including Storybook related files.',
    },
    {
        id: 'prettier',
        description: 'Integrate Prettier formatting into your Angular project.',
    },
    {
        id: 'commit-lint',
        description: 'Integrate commit linting into your Angular project.',
    },
    {
        id: 'travis',
        aliases: ['ci'],
        description: 'Integrate Travis CI into your Angular project.',
    },
    {
        id: 'storybook',
        description: 'Integrate Storybook into your Angular project.',
    },
    {
        id: 'changelog',
        description: 'Integrate standard-changelog into your Angular project.',
    },
]
