"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const core_1 = require("@serenity-js/core");
(0, cucumber_1.defineParameterType)({
    name: 'actor',
    regexp: /.*/,
    transformer: (name) => (0, core_1.actorCalled)(name),
});
(0, cucumber_1.defineParameterType)({
    name: 'pronoun',
    regexp: /he|she|his|her|they|them/,
    transformer() {
        return (0, core_1.actorInTheSpotlight)();
    }
});
//# sourceMappingURL=custom-parameters.js.map