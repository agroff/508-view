# 508 View

508 view is an NPM package that you can include during development to help evaluate and improve 
your site's accessibility. It attempts to create a visual representation of what a screen-reader
would see. To see how it works check out the demo:

[View the Demo](https://agroff.github.io/508-view/examples/?)

## Usage
Add it as a dev dependency with yarn: 

    yarn add -D 508-view

Or, use NPM:

    npm install --save-dev 508-view

Once it's installed you need to include it in your site. If you're using webpack you can do 
something like: 

    import {ScreenReaderView} from '508-view';
    new ScreenReaderView().run();
    
If your code isn't being transpiled, you can include it from the `node_modules` folder like:

    <script src="/node_modules/508-view/lib/508-view.js"></script>
    
Once its included (you may need to adjust the path to ensure you dont have a 404), you can run it 
like this:

    var ScreenReaderView = window["508-view"];
    new ScreenReaderView().run();

##Config
By default, everything is turned on but the script won't execute unless it finds the GET parameter
`508` in the URL. This allows simple toggling during development.

Option | Default | Description
--- | --- | ---
"display-aria-visible"       | true       | Finds any elements that are hidden via CSS but are missing an aria-hidden attribute. Sets their display to block.
"highlight-aria-invisible"   | true       | Adds a big red border around elements with aria-hidden set to true, indicating the screen reader can't see them.
"hide-visual-elements"       | true       | Sets opacity on image, video, and canvas to 0. Removes background images.
"display-image-alts"         | true       | Adds a green element above images with their alt tag value.
"display-missing-image-alts" | true       | Adds a red element above image missing alt tags.
"display-sr-only"            | true       | Renders .sr-only text as a blue elements.
"use-helper-styles"          | true       | Overrides background colors to light grey, text to black, makes buttons yellow, adds a pink focus state.
"enable-via-url"             | true       | Toggles whether 508 view should be rendered via a GET parameter or should be always rendered.
"url-parameter"              | "508"      | Sets the URL parameter to enable 508 view. Ignored if `enable-via-url` is false.
"body-class"                 | "test-508" | Sets the CSS class that gets added to the body to let you write specific styles for 508 mode.

##Warning
This tool is just meant to help out during the development process. It is not tested across many 
browsers and shouldn't be used in production for any reason.
