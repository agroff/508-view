import BaseFeature from "../BaseFeature";

export default class DisplayAriaVisible extends BaseFeature {
    constructor(config) {
        super(config);

        this.featureName = 'display-aria-visible';

        this.skipTags = [
            "HEAD",
            "STYLE",
            "META",
            "TITLE",
            "SCRIPT",
            "LINK"
        ];
    }

    run() {
        if(!this.isEnabled()){
            return;
        }

        const displayIfAriaVisible = (element) => {
            if (this.skipTags.indexOf(element.tagName) !== -1) {
                return;
            }

            const display = window.getComputedStyle(element, null).getPropertyValue('display');
            const hasAria = element.hasAttribute("aria-hidden");

            let isAriaHidden = false;
            if (hasAria && element.getAttribute("aria-hidden") === "true") {
                isAriaHidden = true;
            }

            if (display === "none" && isAriaHidden === false) {
                const e = element;
                const label = e.tagName + '#' + e.getAttribute("id") + '.' + e.className;

                element.style.display = "block";
                console.log("Needs Aria Hidden: " + label);
            }
        };

        document.querySelectorAll("*").forEach(displayIfAriaVisible);
    }
}
