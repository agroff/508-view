export default class BaseFeature{
    constructor(config){
        this.config = config;

        this.featureName = "";
    }

    optionEnabled(optionName){
        return this.config[optionName] === true;
    }

    writeStyleSheet(rulesArray){
        const style = document.createElement("style");

        // WebKit hack
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        rulesArray.forEach((rule) => {
            style.sheet.insertRule(rule);
        });
    }

    isEnabled(){
        return this.optionEnabled(this.featureName);
    }

    run(){
        console.error("BaseFeature.run is an abstract method. Please implement it.");
    }
}
