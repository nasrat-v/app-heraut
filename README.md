# app-heraut

🍻 Cross-platform application to meet and drink with new people 🍻

## Framework
The application is built with:
- Ionic Capacitor framework https://capacitor.ionicframework.com/
- on an Angular framework based project https://angular.io/
- with TypeScript superset https://www.typescriptlang.org/

## Cross-platform
With one code base, it is available on:
* [x] Web
* [ ] iOS
* [x] Android
* [x] Electron (MacOs, Windows and Linux desktop) ---> [bug] See this issue: ([#1918][i1918])

[i1918]: https://github.com/ionic-team/capacitor/issues/1918

## Compilation

#### Build source code
```bash
ionic build
```

To open the app (on project root folder):

#### Web
```bash
npx cap serve
```

#### iOS
```bash
npx cap copy
npx cap open ios
```

#### Android
```bash
npx cap copy
npx cap open android
```

#### Electron
```bash
npx cap copy
npx cap open electron
```
or
```bash
npx cap copy
cd electron
npm run electron:start
```
