import DisplayAriaVisible from "./features/DisplayAriaVisible";
import DisplayImageAltTags from "./features/DisplayImageAltTags";
import StyleHelper from "./features/StyleHelper";


export default class ScreenReaderView {

    constructor(config = {}) {
        this.config = Object.assign({
            "display-aria-visible"       : true,
            "highlight-aria-invisible"   : true,
            "hide-visual-elements"       : true,
            "display-image-alts"         : true,
            "display-missing-image-alts" : true,
            "display-sr-only"            : true,
            "use-helper-styles"          : true,
            "enable-via-url"             : true,
            "url-parameter"              : "508",
            "body-class"                 : "test-508",
        }, config);
    }

    isEnabled(){
        const url = new URL(window.location);
        const parameterValue = url.searchParams.get(this.config["url-parameter"]);

        if(this.config["enable-via-url"] !== true){
            return true;
        }

        if(parameterValue){
            return true;
        }

        return false;
    }

    addClass(){
        const cssClass = this.config["body-class"];
        document.body.classList.add(cssClass);
    }

    run(){

        if(!this.isEnabled()){
            return;
        }

        this.addClass();

        //load all features
        let displayAriaVisible = new DisplayAriaVisible(this.config);
        let displayImageAltTags = new DisplayImageAltTags(this.config);
        let styleHelper = new StyleHelper(this.config);

        //run all features
        displayAriaVisible.run();
        displayImageAltTags.run();
        styleHelper.run();
    }

}
