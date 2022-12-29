# vite

## 설치

```shell
$ npm create vite@latest --template [프로젝트 폴더명]
```

# Eslint & Prettier

## Eslint 초기 설정

```shell
$ npm init @eslint/config
```

### Eslint

- new JSX transform from React 17, extend react/jsx-runtime

```json
//eslintrc.json
"extends": [
  ...
  "plugin:react/jsx-runtime",
  ...
],
```

### Eslint & Prettier

- eslint-config-prettier 사용

```shell
$ npm i eslint-config-prettier -D
```

- prettier 설정을 위한 `.prettierrc.json` 루트 프로젝트에 생성
