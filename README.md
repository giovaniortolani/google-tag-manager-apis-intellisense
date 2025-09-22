# GTM Sandboxed API IntelliSense

This guide explains how to use the provided TypeScript Declaration Files (`.d.ts`) to enable IntelliSense (autocompletion and hover-documentation) for Google Tag Manager's Sandboxed JavaScript APIs in your code editor.

There are two files:
- `server-gtm-sandboxed-apis.d.ts`: For **Server-side** GTM templates.
- `web-gtm-sandboxed-apis.d.ts`: For **Web** GTM templates.

---

## What Are These Files?

Google Tag Manager's custom templates run in a "sandboxed" JavaScript environment that has a special set of APIs (like `copyFromDataLayer` or `sendHttpRequest`). Standard code editors don't know about these custom APIs, so they can't provide any help as you code.

These `.d.ts` files act as a guide for your editor. They define the signatures, parameters, and documentation for every GTM API, effectively teaching your editor how the GTM environment works.


https://github.com/user-attachments/assets/868bbe2c-3e28-47b1-b195-cdfc509ec340


---

## How to Use

Choose the file that corresponds to the environment you are developing for (Web or Server) and place it in your project folder. Then, choose one of the following methods to activate IntelliSense.

### Method 1: Using a Triple-Slash Directive (File-by-File)

This method is useful if you prefer not to create a `jsconfig.json` file. You must add a special comment to the **very top** of each JavaScript file where you want IntelliSense.

1.  **Place the `.d.ts` file** in your project directory (e.g., in the same folder as your `.js` file).
2.  **Add the following comment** to the first line of your `.js` file:
    ```javascript
    /// <reference path="./web-gtm-sandboxed-apis.d.ts" />

    // Your GTM template code starts here...
    const copyFromDataLayer = require('copyFromDataLayer');
    ```
3.  **Adjust the path**: Make sure the `path` in the comment correctly points to the location of your `.d.ts` file relative to your `.js` file.

### Method 2: Using `jsconfig.json`

This is a modern and reliable method for any project, even if it's just a single file. It tells your editor to treat the entire folder as a JavaScript project.

1.  **Place the `.d.ts` file** in your project's root directory.
2.  **Create a `jsconfig.json` file** in the same root directory.
3.  **Add the following content** to your `jsconfig.json`:
    ```json
    {
      "compilerOptions": {
        "target": "esnext"
      },
      "include": ["**/*"]
    }
    ```
4.  **Reload Your Editor**: If IntelliSense doesn't appear immediately, restart your editor or use the "Reload Window" command.

With this setup, the editor will automatically find and use the type definitions for all `.js` files in your project.

---

## Editor-Specific Instructions

### Visual Studio Code

Both `jsconfig.json` and the triple-slash directive methods work perfectly. The `jsconfig.json` approach is generally more robust and requires less maintenance.

### JetBrains IDEs (WebStorm, IntelliJ IDEA, etc.)

JetBrains IDEs offer the simplest setup:

1.  **Place the `.d.ts` file** anywhere in your project directory.

That's it. The IDE will automatically index the file and provide IntelliSense across the entire project without any additional configuration. You do not need a `jsconfig.json` file or triple-slash directives.

### Other Editors (Sublime Text, Neovim, etc.)

For other modern editors that use a Language Server Protocol (LSP) for JavaScript and TypeScript, the process is generally the same as for JetBrains:

1.  **Ensure your editor has a TypeScript/JavaScript language server** installed and configured.
2.  **Place the `.d.ts` file** in the root of your project folder.

The language server should automatically detect and use the type definitions to provide IntelliSense.

---

## Examples

For tag configuration examples, please refer to the [/examples](./examples) folder.

---

## Authors
Created and developed by **Giovani Ortolani Barbosa** ([LinkedIn](https://linkedin.com/in/giovani-ortolani-barbosa/), [GitHub](https://github.com/giovaniortolani)).
