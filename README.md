# Jcink AMF - CodeMirror Editor Plugin

This plugin implements [CodeMirror](https://codemirror.net) in the Jcink Admin Control Panel (ACP) for editing board wrappers, HTML templates, stylesheets, and webpages. It enhances the default textareas with a powerful code editor.

## Features

- **Syntax Highlighting:** For CSS, HTML, and JavaScript.
- **Autogrow:** The editor height automatically adjusts to the content.
- **Search & Replace:** Standard find and replace functionality.
- **Code Scaffolding:** Helps with writing structured code.
- **Proper Tab Indenting:** Correctly indents and dedents lines with the tab key.

## Requirements

This plugin requires the **Acp Modding Framework (AMF)** to be installed and working. You can find instructions for AMF [here](https://github.com/NicketDev/Jcink-AMF).

## Installation

1.  Make sure you have AMF set up and working correctly.
2.  On the ACP webpage you use for AMF, add the following script tag **before** the script that calls `window.AMF.openAcp();`.

    ```html
    <script>
    	AMF.plugin(
    		"https://scripts.nicket.dev/jcink/afm/plugins/codemirror.min.js"
    	);
    </script>
    ```

3.  Reload your ACP, and the CodeMirror editor should be active on the relevant editing pages.

## Development

If you want to build the plugin from the source code, you'll need to have [Bun](https://bun.sh/) installed.

1.  Clone the repository:

    ```sh
    git clone https://github.com/NicketDev/Jcink-AMF-CodeMirror.git
    cd Jcink-AMF-CodeMirror
    ```

2.  Install dependencies:

    ```sh
    bun install
    ```

3.  Build the plugin:
    ```sh
    bun run build
    ```
    This will generate both a regular (`dist/mod.js`) and a minified (`dist/mod.min.js`) version of the plugin in the `dist/` directory.
