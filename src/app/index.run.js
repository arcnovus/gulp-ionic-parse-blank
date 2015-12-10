/*global Parse:false */
(function () {
    'use strict';

    angular
        .module('app')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, PARSE_APP_ID, PARSE_API_KEY) {
        Parse.initialize(PARSE_APP_ID, PARSE_API_KEY);
        $log.debug();
        $log.debug('runBlock end');
    }

})();
