import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doAlert(message="Hey, I was clicked!") {
      window.alert(message);
    } 
  }
});
