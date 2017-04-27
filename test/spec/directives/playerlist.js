'use strict';

describe('Directive: playerList', function () {

  // load the directive's module
  beforeEach(module('networkProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<player-list></player-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playerList directive');
  }));
});
