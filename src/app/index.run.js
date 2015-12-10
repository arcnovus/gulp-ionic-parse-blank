/*global Parse:false */
(function () {
    'use strict';

    angular
        .module('app')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, apikey, appid) {
        Parse.initialize(appid, apikey);
        $log.debug();
        $log.debug('runBlock end');
    }

})();
