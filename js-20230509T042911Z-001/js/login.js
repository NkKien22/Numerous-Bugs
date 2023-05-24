const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//Đoạn code đăng nhập bắt buộc nhập trường dữ liệu nhé Kiên

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

loginForm.addEventListener('submit', (event) => {
  if (!emailInput.value || !passwordInput.value) {
    event.preventDefault();
    alert('Bạn cần nhập email và mật khẩu');
  }
});
