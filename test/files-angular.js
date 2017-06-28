/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
'use strict';

var helper = require('./helper');
var assert = require('yeoman-assert');

describe('Files check for AngularJS', function() {
  before(function(done) {
    helper.run({}, {}, done);
  });

  it('should create the expected files for AngularJS project', function() {
    assert.file([
      '.gitignore',
      'app/css/omrsowa.css',
      'app/img/omrs-button.png',
      'app/img/openmrs-with-title-small.png',
      'app/index.html',
      'app/js/omrsowa.js',
      'app/manifest.webapp',
      'app/js/home/autocomplete.html',
      'app/js/home/breadcrumbs.html',
      'app/js/home/list.html',
      'app/js/home/home.html',
      'app/js/home/hello.html',
      'app/js/home/header.html',
      'app/js/home/notification.html',
      'app/js/home/search.html',
      'app/js/home/translate.html',
      'app/js/home/home.js',
      'app/js/home/components/autocomplete.component.js',
      'app/js/home/components/breadcrumbs.component.js',
      'app/js/home/components/hello.component.js',
      'app/js/home/components/header.component.js',
      'app/js/home/components/list.component.js',
      'app/js/home/components/notification.component.js',
      'app/js/home/components/search.component.js',
      'app/js/home/components/translate.component.js',
      'app/js/home/controllers/autocomplete.controller.js',
      'app/js/home/controllers/breadcrumbs.controller.js',
      'app/js/home/controllers/header.controller.js',
      'app/js/home/controllers/hello.controller.js',
      'app/js/home/controllers/list.controller.js',
      'app/js/home/controllers/notification.controller.js',
      'app/js/home/controllers/search.controller.js',
      'app/js/home/controllers/translate.controller.js',
      'app/js/main/main.component.js',
      'app/js/main/main.controller.js',
      'app/js/main/main.html',
      'app/js/main/main.js',
      'webpack.config.js',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
