window.listController = function($scope, $http) {
    $scope.title = "Danh sách học viên";
    $scope.filter = '';

    // Thực hiện việc call API
    // Để call API ta cần thêm tham số $http (Giao thức để call API)

    // const apiStudent = 'https://65b05cb3d16d31d11bdc779f.mockapi.io/Giapph38253/student'
    const apiStudent = 'http://localhost:3000/student'

    // Sử dụng giao thức $http.phương thức truy cập HTTP
    $http.get(apiStudent).then(function(response) {
        // Nếu API đúng thì sẽ trả về 1 đối tượng nằm trong response
        // console.log(response);
        if(response.status == 200) {
            $scope.listStudent = response.data;
            //mới
            $scope.listStudentFiltered = $scope.listStudent;
        }
    })

    $scope.deleteStudent = function(deleteID) {
        let confirm = window.confirm("Bạn có muốn xóa không ?")
        if (confirm) {
            // $http.delete(apiStudent + '/' + deleteID).then(function(response) {})
            $http.delete(`${apiStudent}/${deleteID}`).then(function(response) {
                if(response.status == 200) {
                    alert('Bạn đã xóa thành công !')
                }
            })
        }
    }

    $scope.search = function() {
        $scope.listStudentFiltered = $scope.listStudent.filter(function(item) {
            return item.hoTen.toLowerCase().includes($scope.filter.toLowerCase()) ||
                   item.email.toLowerCase().includes($scope.filter.toLowerCase()) ||
                   item.ngaySinh.toLowerCase().includes($scope.filter.toLowerCase());
        });
    };
}