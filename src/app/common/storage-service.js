(function () {
    "use strict";
    //storage works with cypher is copy and paste code
    angular.module('public')
    .service('StorageService', function StorageService($q, $window, Cypher, $uibModal, $state) {
        const _ = require('underscore');
        const settings = require('settings');
        const MemoryStorage = require('memorystorage');
        let localStorage = $window.localStorage;
        //$window is the browser
        /*if (typeof $window.localStorage === 'object') {
            try {
                $window.localStorage.setItem('localStorage', 1);
                $window.localStorage.removeItem('localStorage');
            } catch (e) {
                // Storage.prototype._setItem = Storage.prototype.setItem;
                // Storage.prototype.setItem = function() {};
                localStorage = new MemoryStorage('my-app');
                $state.go('galery')
                //modal is a dialog
                $uibModal.open({
                animation: true,
                template: require('../public/galery/galery.html'),
                size: 'md',
                controllerAs: 'modal',
                controller: function ModalCtrl($uibModalInstance, $state) {
                    this.close = () => $uibModalInstance.dismiss();
                },
                });
            }
        }*/
        const encrypt = (value) => {
        return angular.isString(value) && value !== "" ? Cypher.encode(settings.secret, value) : value;
        };
        const decrypt = (value) => {
        return angular.isString(value) && value !== "" ? Cypher.decode(settings.secret, value) : value;
        };
        const _toggleEncryption = (obj, reverse) => {
        _.each(obj, function(value, key){
            if (reverse) {
            obj[decrypt(key)] = _.isObject(value) ? _toggleEncryption(value, reverse) : decrypt(value) ;
            } else {
            obj[encrypt(key)] = _.isObject(value) ? _toggleEncryption(value, reverse) : encrypt(value) ;
            }
            if (_.isString(key)) delete obj[key];
        });
        return obj;
        };
        const encryptObject = (obj) => {
        return _toggleEncryption(obj, false);
        };
        const decryptObject = (obj) => {
        return _toggleEncryption(obj, true);
        };
        return {
        set: (key, value) => {
            if (!_.isUndefined(key) && !_.isUndefined(value)){
            localStorage[encrypt(key)] = encrypt(value);
            }
            return true;
        },
        get: (key, defaultValue) => {
            var valueEncrypted = localStorage[encrypt(key)];
            var isInt = parseInt(valueEncrypted);
            var isBoolean = _.contains(["true", "false"], valueEncrypted);
            var valueDecrypted;
            if (isInt) {
            valueDecrypted = valueEncrypted.indexOf(".") >= 0 ? parseFloat(valueEncrypted) : isInt;
            } else{
            if (isBoolean) {
                valueDecrypted = valueEncrypted == "true" ? true : false;
            } else {
                valueDecrypted = decrypt(valueEncrypted);
            }
            }
            return valueDecrypted || defaultValue;
        },
        setObject: (key, objectToSet) => {
            if (_.isEmpty(objectToSet)){
            service.remove(key);
            return false;
            }
            localStorage[encrypt(key)] = JSON.stringify(encryptObject(angular.copy(objectToSet)));
            return true;
        },
        getObject: (key) => {
            var objectEncrypted = JSON.parse(angular.copy(localStorage[encrypt(key)]) || '{}');
            return decryptObject(objectEncrypted);
        },
        remove: (key) => {
            if ( !localStorage[encrypt(key)] ) return;
            localStorage.removeItem(encrypt(key));
            return;
        },
        clearAll: () => {
            return localStorage.clear();
        }
        };
    });
})();