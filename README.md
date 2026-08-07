# HYUabot Docs

휴아봇 Android/iOS 앱의 사용설명서와 버전별 체인지로그를 제공하는 사이트입니다. [Docusaurus](https://docusaurus.io/)로 빌드되며, `main` 브랜치에 push되면 GitHub Actions를 통해 GitHub Pages로 자동 배포됩니다.

- 문서: `docs/android`, `docs/ios`
- 체인지로그: `changelog/android`, `changelog/ios`
- 언어: 한국어(기본), 영어, 중국어(간체), 일본어

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
