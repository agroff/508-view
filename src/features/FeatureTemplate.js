import BaseFeature from "../BaseFeature";

export default class FeatureTemplate extends BaseFeature {
    constructor(config) {
        super(config);

        this.featureName = '';
    }

    run() {
        if (!this.isEnabled()) {
            return;
        }

        //run the feature
    }
}
