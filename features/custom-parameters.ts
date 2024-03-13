import { defineParameterType } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';

defineParameterType({
  name: 'actor',
  regexp: /.*/,
  transformer: (name: string) =>
    actorCalled(name),
});

defineParameterType({
  name: 'pronoun',
  regexp: /he|she|his|her|they|them/,
  transformer() {
    return actorInTheSpotlight();
  }
})