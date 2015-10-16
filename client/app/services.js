(function(){
    'use strict';
    var pplServices = angular.module('pplServices', ['ngResource']);

    pplServices.factory('QueryProfile', [
        '$resource',
        '$filter',
        function($resource, $filter) {
            return $resource('/api/v1/qan/profile/:instance_uuid',
                {
                    begin: $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00'),
                    end: $filter('date')(new Date(), 'yyyy-MM-ddT23:59:59')
                },
                {
                    query: {method: 'GET', params: {}, isArray: false},
                }
            );
        }
    ]);

    pplServices.factory('Metric', [
        '$resource',
        '$filter',
        function($resource, $filter) {
            return $resource('/api/v1/qan/report/:instance_uuid/query/:query_uuid',
                {
                    begin: $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00'),
                    end: $filter('date')(new Date(), 'yyyy-MM-ddT23:59:59')
                },
                {
                    query: {method: 'GET', params: {}},
                }
            );
        }
    ]);

    pplServices.factory('Instance', [
        '$resource',
        function($resource) {
            return $resource('/api/v1/instances/:instance_uuid',
                {},
                {
                    query: {method: 'GET', params: {}, isArray: true},
                }
            );
        }
    ]);

    pplServices.factory('Agent', [
        '$resource',
        function($resource) {
            return $resource('/api/v1/agents/:instance_uuid',
                {},
                {
                    query: {method: 'GET', params: {}, isArray: true},
                }
            );
        }
    ]);

    pplServices.factory('AgentCmd', [
        '$resource',
        function($resource) {
            return $resource('/api/v1/agents/:agent_uuid/cmd',
                {agent_uuid: '@agent_uuid'},
                {
                    update: {method: 'PUT', params: {}, isArray: false}
                }
            );
        }
    ]);

})();
