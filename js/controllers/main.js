// main.js
angular
  .module('app')
  .controller('uploadFileCtl', uploadFileCtl)

uploadFileCtl.$inject = ['$scope', 'uploadFileService'];

function uploadFileCtl($scope, uploadFileService) {
  $scope.myFile = '';
  $scope.isError = false;
  $scope.listFileUploaded = [];

  $scope.validateFile = function () {
    if ($scope.myFile === '') return;
    $scope.isError = false;
    var validFormats = ['xlsx'];
    var value = $scope.myFile[0].name;
    var ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();
    if (validFormats.indexOf(ext) !== -1 && $scope.myFile[0].size < 5000000) {
      console.log($scope.myFile);
      var fileInformation = $scope.myFile[0];
      uploadFileService.uploadFile({
        fileName: fileInformation.name,
        fileSize: fileInformation.size,
        date: new Date(),
        user: 'Admin' // depend on login account
      }).then(
        (success) => {
          console.log("Successfully uploaded data", success);
          $scope.initial();
        },
        (error) => {
          console.log("Uploading of data failed", error);
        });
    } else {
      $scope.isError = true;
    }
  }

  $scope.initial = function () {
    uploadFileService.getList().then(
      (success) => {
        console.log(success);
        $scope.listFileUploaded = success.data.docs;
      },
      (error) => {
        console.log("Unable to perform get request", error);
      });
  }

}