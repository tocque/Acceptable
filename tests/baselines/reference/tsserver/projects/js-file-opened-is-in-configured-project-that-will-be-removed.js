currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/tsconfig.json]
{
  "compilerOptions": {
    "allowJs": true
  }
}

//// [/user/username/projects/myproject/mocks/cssMock.js]
function foo() { }

//// [/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js]
function bar() { }

//// [/user/username/projects/myproject/apps/editor/tsconfig.json]
{
  "extends": "../../tsconfig.json",
  "include": [
    "./src"
  ]
}

//// [/user/username/projects/myproject/apps/editor/src/src.js]
function fooBar() { }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/mocks/cssMock.js"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/username/projects/myproject/mocks/cssMock.js ProjectRootPath: undefined:: Result: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/mocks/cssMock.js to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js",
  "/user/username/projects/myproject/apps/editor/src/src.js",
  "/user/username/projects/myproject/mocks/cssMock.js"
 ],
 "options": {
  "allowJs": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/src/src.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js Text-1 "function bar() { }"
	/user/username/projects/myproject/apps/editor/src/src.js Text-1 "function fooBar() { }"
	/user/username/projects/myproject/mocks/cssMock.js SVC-1-0 "function foo() { }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	apps/editor/scripts/createConfigVariable.js
	  Matched by default include pattern '**/*'
	apps/editor/src/src.js
	  Matched by default include pattern '**/*'
	mocks/cssMock.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "4a33d78ee40d836c4f4e64c59aed976628aea0013be9585c5ff171dfc41baf98",
          "fileStats": {
            "js": 3,
            "jsSize": 57,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 0,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "allowJs": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/mocks/cssMock.js",
        "configFile": "/user/username/projects/myproject/tsconfig.json",
        "diagnostics": [
          {
            "text": "Cannot write file '/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          },
          {
            "text": "Cannot write file '/user/username/projects/myproject/apps/editor/src/src.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          },
          {
            "text": "Cannot write file '/user/username/projects/myproject/mocks/cssMock.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/mocks/cssMock.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js: *new*
  {}
/user/username/projects/myproject/apps/editor/src/src.js: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/apps/editor/src/src.js *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/mocks/cssMock.js (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/mocks/cssMock.js"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/mocks/cssMock.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js:
  {}
/user/username/projects/myproject/apps/editor/src/src.js:
  {}
/user/username/projects/myproject/mocks/cssMock.js: *new*
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

Projects::
/user/username/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/apps/editor/src/src.js
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
/user/username/projects/myproject/mocks/cssMock.js *changed*
    open: false *changed*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js ProjectRootPath: undefined:: Result: /user/username/projects/myproject/apps/editor/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/myproject/apps/editor/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/myproject/apps/editor/tsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/myproject/apps/editor/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/apps/editor/src/src.js"
 ],
 "options": {
  "allowJs": true,
  "configFilePath": "/user/username/projects/myproject/apps/editor/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Config: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Extended config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/src 1 undefined Config: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/src 1 undefined Config: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/myproject/apps/editor/tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/editor/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/apps/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/apps/editor/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/myproject/apps/editor/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/apps/editor/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/apps/editor/src/src.js Text-1 "function fooBar() { }"


	../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/src.js
	  Matched by include pattern './src' in 'tsconfig.json'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/myproject/apps/editor/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "3a35a87188335633b0bee242201aa5e01b96dbee6cfae401ebff6e26120b2aa7",
          "fileStats": {
            "js": 1,
            "jsSize": 21,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 0,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "allowJs": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": true,
          "files": false,
          "include": true,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js",
        "configFile": "/user/username/projects/myproject/apps/editor/tsconfig.json",
        "diagnostics": [
          {
            "text": "Cannot write file '/user/username/projects/myproject/apps/editor/src/src.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/username/projects/myproject/apps/editor/tsconfig.json ProjectRootPath: undefined:: Result: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/myproject/apps/editor/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/myproject/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/apps/editor/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/apps/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/apps/editor/src/src.js:
  {}
/user/username/projects/myproject/apps/editor/tsconfig.json: *new*
  {}
/user/username/projects/myproject/mocks/cssMock.js:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/apps/editor/src: *new*
  {}

Projects::
/user/username/projects/myproject/apps/editor/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/user/username/projects/myproject/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/tsconfig.json
        /user/username/projects/myproject/apps/editor/tsconfig.json *new*
/user/username/projects/myproject/apps/editor/scripts/createConfigVariable.js (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json *default*
/user/username/projects/myproject/apps/editor/src/src.js *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /user/username/projects/myproject/tsconfig.json
        /user/username/projects/myproject/apps/editor/tsconfig.json *new*
/user/username/projects/myproject/mocks/cssMock.js
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/myproject/tsconfig.json
