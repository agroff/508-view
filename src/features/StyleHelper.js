import BaseFeature from "../BaseFeature";

export default class StyleHelper extends BaseFeature {
    constructor(config) {
        super(config);

        this.featureName = '';
    }

    showSrOnly(){
        this.writeStyleSheet([`
        span.sr-only,
        .sr-only{
            position:relative !important;
            border:1px solid #0017ff !important;
            background-color: #9594ff !important;
            height: auto !important;
            width:auto !important;
            clip:auto !important;
            overflow:visible !important;
            font-family: arial;
            font-size:18px;
            color:#000;
        }
        `]);
    }

    hideVisualElements() {
        this.writeStyleSheet([`
        img,canvas,video{
            opacity : 0 !important;
        }
        `,`
        *{
            background-image: none !important;
        }
        `
        ])
    }

    highlightAriaInvisible(){
        this.writeStyleSheet([`
        [aria-hidden="true"]{
            outline:10px solid red;
        }
        `]);
    }

    writeHelperStyles(){
        this.writeStyleSheet([`
        *{
            color:#333 !important;
            font-family:"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif !important;
            background-image: none !important;
            background-color:#eee !important;
        }
        `,`
        a.btn,
        a[href],
        a[href]:hover,
        a.button{
            background-color: yellow !important;
            color:black;
        }
        `,`
        *:focus {
            outline: 7px solid pink;
        }
        `


        ]);
    }

    run() {
        if (this.optionEnabled('hide-visual-elements')) {
            this.hideVisualElements();
        }

        if (this.optionEnabled('display-sr-only')) {
            this.showSrOnly();
        }
        if (this.optionEnabled('use-helper-styles')) {
            this.writeHelperStyles();
        }
        if (this.optionEnabled('highlight-aria-invisible')) {
            this.highlightAriaInvisible();
        }

        //run the feature
    }
}
