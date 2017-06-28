class PatientSearchController {
  /* @ngInject */
  constructor(openmrsRest) {
    var vm = this;
    vm.patients = [];
    vm.onsearch = () => {
      openmrsRest.listFull('patient', {q: '{{vm.query}}', includeAll: true}).then(function (response) {
        if(response.results.length > 0){
          vm.patients = response.results;
        }
      })
    }

  }
}
export default PatientSearchController;
