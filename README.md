# test

This is a repo for testing basic javascript similar to [codepen](https://codepen.io/pen), but in a local dev environment, all in VS Code IDE.

![](https://learn.microsoft.com/en-us/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension-images/devtools-extension-v211.png)

## Prerequisites

- [ ] [Visual Studio Code](https://code.visualstudio.com/)
- [ ] [Edge Web Browser](https://www.microsoft.com/en-us/edge)
- [ ] [Microsoft Edge Tools for VS Code (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)
- [ ] [Live Server (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## How to use

1. Right click on `index.html` and `Open with Live Server`.
2. On the `Run and Debug` tab of VS Code, select `Launch Edge Headless and attach DevTools`.
3. Add your javascript to `main.js` and save. See changes automatically reload (thanks to Live Server) in the browser and console pane.

## Debugging

The debugging environment is already setup. In order to debug, add a debugger breakpoint in the gutter of the editor window of VS Code (appears as a red dot on left side of line numbers), and during runtime execution it should pause at that breakpoint. Remove the breakpoint by toggling off the red dot on the given line number.

## Add'l configs

1. Dock the debug toolbar

If the floating toolbar is not your cup of tea, open the VS Code settings from `File > Settings > Features > Debug > Tool Bar Location` and set this value to `docked`.

![](https://seesharpdotnet.files.wordpress.com/2022/08/vscode_edge_48.png)

2. [StatusBar Debugger (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-statusbar-debugger)

If you want additioanl debugger controls available to you in the status bar, check out this extension.

![](https://seesharpdotnet.files.wordpress.com/2022/08/vscode_edge_53.png)

3. Prevent browser from opening when starting Live Server

If you don't want the Edge Browser to open separately (since it's going to open an instance inside of VS Code anyway), go to `File > Settings > Extensions > Live Server > Settings: No Browser` and check the box. If checked it will start without browser opened.

---

#### Credits

- [The Microsoft Edge Dev Tools extension for VS Code is so awesome that I???m ditching Chrome for web development by Matt Callahan](https://mfcallahan.blog/2022/08/26/the-microsoft-edge-dev-tools-extension-for-vs-code-is-so-awesome-that-im-ditching-chrome-for-web-development/)
- [VS Code Has Dev Tools & Console!! No Need For Chrome Anymore by codeSTACKr - YouTube](https://www.youtube.com/watch?v=vHZPeohPHqo)
