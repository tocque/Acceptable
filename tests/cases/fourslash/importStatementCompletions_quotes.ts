/// <reference path="fourslash.ts" />

// @Filename: /mod.ts
//// export const foo = 0;

// @Filename: /single.ts
//// import * as fs from 'fs';
//// [|import f/**/|]

verify.completions({
  marker: "",
  exact: [{
    name: "foo",
    source: "./mod",
    insertText: `import { foo$1 } from './mod';`, // <-- single quotes
    isSnippet: true,
    replacementSpan: test.ranges()[0],
    sourceDisplay: "./mod",
  }],
  preferences: {
    includeCompletionsForImportStatements: true,
    includeInsertTextCompletions: true,
    includeCompletionsWithSnippetText: true,
  }
});
