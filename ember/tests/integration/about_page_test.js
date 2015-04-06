import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bostonember/tests/helpers/start-app';

var App;

module('Integration - About Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the About page', function(assert) {
  visit('/').then(function() {
    click("a:contains('About')").then(function() {
      assert.equal(find('h3').text(), 'About');
    });
  });
});

test('Should allow navigating back to root from another page', function(assert) {
  visit('/about').then(function() {
    click('a:contains("Home")').then(function() {
      assert.notEqual(find('h3').text(), 'About');
    });
  });
});
