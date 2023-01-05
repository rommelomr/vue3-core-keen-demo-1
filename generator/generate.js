import { generateTemplateFiles } from 'generate-template-files';
import { exec } from 'child_process';


generateTemplateFiles([
    {
        option: 'UI Module',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/crud',
        },
        stringReplacers: [{ question: 'Insert UI Module Name', slot: '__name__' }],
        output: {
            path: './src/modules/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true,
        },
    },
    {
        option: 'UI Pages Module',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/crud-2',
        },
        stringReplacers: [{ question: 'Insert UI Pages Module Name', slot: '__name__' }],
        output: {
            path: './src/modules/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true,
        },
    },
    {
        option: 'Form',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/form',
        },
        stringReplacers: [{ question: 'Insert Form Name', slot: '__name__' }],
        output: {
            path: './src/modules/__name__(kebabCase)/pages',
            pathAndFileNameDefaultCase: '(PascalCase)',
            overwrite: true,
        },
    },

]);