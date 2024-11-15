import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'widgets', 'features', 'pages', 'entities'];
  return layers.some(layer => value.startsWith(layer));
}

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/@/', '');
    const segments = valueWithoutAlias.split('/');
    const isShared = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    // console.log(valueWithoutAlias);

    // console.log(isAbsolute(valueWithoutAlias), isShared, isUiSlice);

    if (isAbsolute(valueWithoutAlias) && isShared && isUiSlice) {
      const newValue = valueWithoutAlias.split('/').slice(0, 2).join('/');
      importDeclaration.setModuleSpecifier(`@/${newValue}`);
    }
  });
});

project.save();
