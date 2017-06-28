class AutoCompleteController {
  constructor() {
    var vm = this;
    vm.isConceptCorrect;
    vm.limitToClass = 'Drug';
    vm.updateConcept = this.updateConcept;
    vm.item = {
      display: 'ItemName'
    }
  }

  updateConcept(isCorrect, concept) {
    var vm = this;
    vm.isConceptCorrect = isCorrect;
    vm.item = concept;
  }
}

export default AutoCompleteController;
