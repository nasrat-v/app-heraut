# app-heraut

🍻 Cross-platform application to meet and drink with new people 🍻

## Framework
The application is built with:
- Ionic Capacitor framework https://capacitor.ionicframework.com/
- on an Angular framework based project https://angular.io/
- with TypeScript superset https://www.typescriptlang.org/

## Cross-platform
With one code base, it is available on:
* [ ] iOS
* [x] Android
* [x] Electron (MacOs, Windows and Linux desktop) ---> [bug] See this issue: ([#1918][i1918])
* [x] Web

[i1918]: https://github.com/ionic-team/capacitor/issues/1918

## Compilation

On project root folder:

#### iOS
```bash
npx cap open ios
```

#### Android
```bash
npx cap open android
```

#### Electron
```bash
npx cap open electron
```
or
```bash
cd electron
npm run electron:start
```

#### Web
```bash
npx cap serve
```
