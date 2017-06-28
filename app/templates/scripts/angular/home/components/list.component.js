import template from '../list.html';
import controller from '../controllers/list.controller.js';

let listComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default listComponent;
