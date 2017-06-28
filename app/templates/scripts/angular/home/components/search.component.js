import template from '../search.html';
import controller from '../controllers/search.controller.js';

let searchComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default searchComponent;
