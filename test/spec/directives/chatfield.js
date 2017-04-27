'use strict';

describe('Directive: chatField', function () {

  // load the directive's module
  beforeEach(module('networkProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chat-field></chat-field>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chatField directive');
  }));
});
