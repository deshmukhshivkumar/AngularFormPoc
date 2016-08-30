function User(userName, email, password) {
    var self = this;

    this.userName = userName || "";
    this.email = email || "";
    this.password = password || "";
}

angular.module("mainModule", [])
    .controller("userController", ['$http', function ($http) {
        this.user = {};
        this.init = function () {
            this.user = new User();
        };

        this.signUp = function (form) {

            if (form.$valid === false) {
                alert("form invalid, please correct and try again.");
                return;
            }
            user = this.user;
            debugger;
            $http.post('http://localhost/users', user).then(function () {
                // show success notification;
            });
        };


    }]);


