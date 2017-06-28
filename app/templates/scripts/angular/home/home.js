import angular from 'angular';
import uiRouter from 'angular-ui-router';
import helloComponent from './components/hello.component.js';
import breadcrumbsComponent from './components/breadcrumbs.component.js';
import translateComponent from './components/translate.component.js';
import autoCompleteComponent from './components/autocomplete.component.js';
import listComponent from './components/list.component.js';
import headerComponent from './components/header.component.js';
import searchComponent from './components/search.component.js';
import notificationComponent from './components/notification.component.js';
import patientSearchComponent from './components/patientSearch.component.js';
import uicommons from 'openmrs-contrib-uicommons';

let homeModule = angular.module('home', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: require('./home.html')
        })
    })
    .component('helloComponent', helloComponent)
    .component('breadcrumbsComponent', breadcrumbsComponent)
    .component('translateComponent', translateComponent)
    .component('autoCompleteComponent', autoCompleteComponent)
    .component('listComponent', listComponent)
    .component('headerComponent', headerComponent)
    .component('searchComponent', searchComponent)
    .component('notificationComponent', notificationComponent)
    .component('patientSearchComponent', patientSearchComponent );

export default homeModule;
