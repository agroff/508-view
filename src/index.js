import DisplayAriaVisible from "./features/DisplayAriaVisible";
import DisplayImageAltTags from "./features/DisplayImageAltTags";
import StyleHelper from "./features/StyleHelper";


export default class ScreenReaderView {

    constructor(config) {
        this.config = Object.assign({
            "display-aria-visible"       : true, //done
            "highlight-aria-invisible"   : true, //todo
            "hide-visual-elements"       : true, //done
            "display-image-alts"         : true, //done
            "display-missing-image-alts" : true, //done
            "display-sr-only"            : true, //done
            "use-helper-styles"          : true, //todo
            "enable-via-url"             : true, //done
            "url-parameter"              : "508", //done
            "body-class"                 : "test-508", //done
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
