var myAppDev = angular.module('myAppE2E', ['mainModule', 'ngMockE2E']);

myAppDev.run(function ($httpBackend) {
    var users = [
        { userName: 'Shiv', email: 'sdeshmukh@tavisca.com' },
        { name: 'Megha', email: 'megha@gmail.com' }
    ];

    // returns the current list of phones
    $httpBackend.whenGET('http://localhost/users').respond(users);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('http://localhost/users').respond(function (method, url, data) {
        var user = angular.fromJson(data);
        users.push(user);
        return [200, user, {}];
    });
});