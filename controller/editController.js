window.editController = function($scope, $routeParams, $http, $location) {
    $scope.title = "Chỉnh sửa thông tin sinh viên"

    const apiStudent = 'http://localhost:3000/student'

    let studentID = $routeParams.id 

    
    $http.get(apiStudent + '/' + studentID).then(function(response) {
        console.log(response.data.id);
        if(response.status == 200) {
            $scope.inputValue = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                email: response.data.email,
                ngaySinh: new Date(response.data.ngaySinh)
            }
        }
    })

    $scope.updateStudent = function() {

        // 
        let flag = true // Tạo 1 biến để kiểm tra
        // Tạo biến để bật tắt lỗi
        $scope.kiemTra = {
            hoTen: false,
            email: false,
            ngaySinh: false
        }

        if(!$scope.inputValue || !$scope.inputValue.hoTen) { // nếu ko tồn tại $scope.inputValue hoặc ko tồn tại ...
            flag = false
            $scope.kiemTra.hoTen = true
        }
        if(!$scope.inputValue || !$scope.inputValue.email) {
            flag = false
            $scope.kiemTra.email = true
        }
        if(!$scope.inputValue || !$scope.inputValue.ngaySinh) {
            flag = false
            $scope.kiemTra.ngaySinh = true
        }

        // check email
        if($scope.inputValue.email) {
            let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            if(!regexEmail.test($scope.inputValue.email)) {
                $scope.kiemTra.email = true
                flag = false
            }
        }
        // 
        if(flag){
            let updateStudent = {
            
                hoTen: $scope.inputValue.hoTen,
                email: $scope.inputValue.email,
                ngaySinh: $scope.inputValue.ngaySinh
            }
    
            $http.put(
                `${apiStudent}/${studentID}`,
                updateStudent
            ).then(function(response) {
                alert('Chỉnh sửa thành công !')
                $location.path('/list')
            })
        }
        
    }
}