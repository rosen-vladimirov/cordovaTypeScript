/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Application;
(function (Application) {
    function initialize() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    Application.initialize = initialize;
    function onDeviceReady() {
        receivedEvent('deviceready');
        navigator.splashscreen.hide();
        var btn = document.getElementById("myBtn");
        var myClass = new MyClass();
        btn.addEventListener("click", myClass.sampleMethod);
    }
    function receivedEvent(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
    function sampleDecorator(methodName) {
        return function (target, propertyKey, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log("Decorator replaced method!");
                alert("Decorator " + methodName + " called");
            };
            return descriptor;
        };
    }
    Application.sampleDecorator = sampleDecorator;
    var MyClass = (function () {
        function MyClass() {
        }
        MyClass.prototype.sampleMethod = function () {
            console.log("Sample method called!");
            alert("Sample Method called");
        };
        __decorate([
            sampleDecorator("sampleMethod")
        ], MyClass.prototype, "sampleMethod", null);
        return MyClass;
    })();
    Application.MyClass = MyClass;
})(Application || (Application = {}));
//# sourceMappingURL=index.js.map