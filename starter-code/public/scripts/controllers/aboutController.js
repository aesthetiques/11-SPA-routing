'use strict';

(function(module) {
  const aboutController = {};
  
  aboutController.init = function() {
    console.log('hidin shit');
    $('#articles').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
