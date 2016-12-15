import Ember from 'ember';

export default Ember.Controller.extend({
  name: "World",
  showName: false,
  numClicks: 0,
  actions: {
    toggleName() {
      this.toggleProperty('showName');
    },
    incrementClicks() {
      this.set('numClicks', this.get('numClicks') + 1);
    }
  }
});
