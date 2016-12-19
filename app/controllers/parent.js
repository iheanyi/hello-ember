import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToChild() {
      this.transitionToRoute('parent.child');
    }
  }
});
