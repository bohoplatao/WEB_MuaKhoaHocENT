window.addController = function ($scope, $http, $location) {
    $scope.title = "Thêm sinh viên mới"

    $scope.createStudent = function () {
        const apiStudent = 'http://localhost:3000/student'
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

        if (flag) {
            let newStudent = {
                hoTen: $scope.inputValue.hoTen,
                email: $scope.inputValue.email,
                ngaySinh: $scope.inputValue.ngaySinh
            }
            $http.post(
                
                apiStudent, // Đường dẫn API
                newStudent  // Dữ liệu mới nhập vào từ input
            ).then(function (response) {
                // console.log(response);
                // alert('hehe')
                if (response.status == 201) {
                    alert('Thêm dữ liệu thành công!')
                    $location.path('/list') // Quay trở lại trang danh sách
                }
            })
        }
    }
}