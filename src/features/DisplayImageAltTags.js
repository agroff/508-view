import BaseFeature from "../BaseFeature";

export default class DisplayImageAltTags extends BaseFeature {
    constructor(config) {
        super(config);

        this.featureName = 'display-image-alts';
    }

    appendAltTag(image, appendClass) {
        let cssClass = image.className + ' ' + appendClass;
        let alt      = image.getAttribute("alt");
        let isBroken = false;

        if (image.hasAttribute('aria-hidden')) {
            return;
        }

        if (!alt) {
            cssClass += ' broken';
            alt      = "Missing Alt!";
            isBroken = true;
        }

        if (!image.parentNode) {
            console.warn("Couldn't find parent node for image", image);
            return;
        }

        if (isBroken && !this.displayMissing) {
            return;
        }

        image.parentNode.innerHTML = '<div class="' + cssClass + '">' + alt + '</div>' + image.parentNode.innerHTML;
    }

    writeAltTagStyles() {
        this.writeStyleSheet([
            `
            div.alt-tag{
                position: relative;
                z-index:5;
                text-align: center;
                font-size: 18px;
                border: 1px solid green;
                background-color: #91ff9169 !important;
                color: #000;
                padding: 20px;
                margin-top: 20px;
                margin-bottom: -100px;
            }
            `,
            `
            div.alt-tag.broken{
                border: 1px solid #800006;
                background-color: rgba(255, 102, 104, 0.47) !important;
            }
            `
        ]);
    }

    generateAltTags() {
        document.querySelectorAll("img").forEach((image) => {
            this.appendAltTag(image, 'alt-tag');
        });
    }

    run() {
        if (!this.isEnabled()) {
            return;
        }

        this.displayMissing = this.optionEnabled('display-missing-image-alts');

        this.writeAltTagStyles();

        this.generateAltTags();
    }
}
