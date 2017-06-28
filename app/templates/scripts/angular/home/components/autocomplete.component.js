import template from '../autocomplete.html';
import controller from '../controllers/autocomplete.controller.js';

let autoCompleteComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default autoCompleteComponent;
