import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('material-design-icon', 'Unit | Component | material design icon', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it uses the correct tag', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('name', 'devices');

  var $component = this.append();
  assert.equal($component.prop('tagName'), 'I');
});

test('it correctly sets the class', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('name', 'devices');

  var $component = this.append();
  assert.ok($component.hasClass('mdi'));
  assert.ok($component.hasClass('mdi-devices'));
});
