# TypeSctript - Getting started

## TypeScript Basics

- super JS set

- can't run in browser

- can compile to JS

- more features and advantages than JS

- it is a tool make js more robust

## Compiler & Configuration Deep Dive

### Installation

- TS with compiler: `sudo npm install -g typescript`

- Invoke compiler: `tsc`

- VSCode Ext: ESLint, Material Icon Theme (click `Use..` after installed), Path Intellisense, Prettier(`Ctl+Shift+I` to setup)

### Project setup

- `index.html`:

```html
<head>
    <script src="app.js" defer></script>
</head>
```

- `app.ts`, whatever code;

- run:
  
```bash
mkdir src
mkdir dist

tsc init    # `tsconfig.json`
# "exclude": ["node_modules", "**/*.dev.ts"]
# "include": ["app.ts"]
# "target": "es6" or as you want
# "outDir": "./dist"
# "rootDir": "./src"
# "noEmitOnError": true,

tsc app.ts

npm init -y
npm install --save-dav lite-server
```

- `package.json`

```json
{
    "scripts": {
        "start": "lite-server"
    }
}
```


## Working with Next-gen JS Code

### Core Types

- `number` (no difference between int or float)

- `string` (all text values)

- `boolean` (`true`, `false`)

- `object`

- `array`

- `tuple` (fixed length and type aray)

- `enum` (enumerated global constant identifiers)

- `any`

### Advanced Types

- Union Types, Literal Types, Alian Types

- `Function`

- `unknown`

## Compiler

```bash
tsc --init      # create config file
tsc app.ts      # compile app.ts

tsc             # compile rootDir .ts in `"include": []` in `tsconfig.json`
                # or compile rootDir .ts except file listed in `"exclude": []`

tsc --watch|-w  # recompile whenver saved
```

