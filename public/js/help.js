// Các đoạn mã JavaScript có thể được thêm vào để thêm chức năng động, như mở rộng câu hỏi, gửi biểu mẫu liên hệ, vv.
// Ví dụ: có thể sử dụng JavaScript để ẩn/hiện nội dung khi người dùng nhấp vào câu hỏi.

// Ví dụ đơn giản để hiển thị/ẩn nội dung
document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('#faq li');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
