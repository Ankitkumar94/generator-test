class ListController {
  constructor() {
    var vm = this;

    //Properties for list component
    vm.resource = "conceptstopword";
    vm.limit = 10; //Default value
    vm.columns= [
      {
        "property": "display",
        "label": "Word"
      },
      {
        "property": "locale",
        "label":"Locale"
      }];
    vm.actions = [
      {
        "action":"retire",
        "label":"Retire"
      },
      {
        "action":"unretire",
        "label":"unretire"
      },
      {
        "action":"purge",
        "label":"Delete",
        "link":"#/stopword/{uuid}"
      }
    ];
  }
}

export default ListController;
