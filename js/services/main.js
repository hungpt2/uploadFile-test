angular
  .module('app')
  .service('uploadFileService', uploadFileService)

  uploadFileService.$inject = ['$http'];
function uploadFileService($http) {

  this.getList = function () {
    console.log("Get List File!");
    return $http.get("http://localhost:3000/files/getListFile")
  };

  this.uploadFile = function (data) {
    console.log(data);
    return $http.post("http://localhost:3000/files/uploadFile", data)
      .then(function successCallback(response) {
        console.log("Successfully uploaded data");
      }, function errorCallback(response) {
        console.log("Uploading of data failed");
      });
  };
}
