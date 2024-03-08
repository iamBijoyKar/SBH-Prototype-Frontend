// console.log("Hello, World!");
document.addEventListener('DOMContentLoaded', function () {
  console.log('The DOM is ready!')
  const authModal = document.getElementById('auth-modal')
  authModal.showModal()
  const modalClose = document.getElementById('modal-close')
  modalClose.addEventListener('click', function () {
    authModal.close()
  })
})

function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdownContent')
  if (dropdownContent.classList.contains('hidden')) {
    dropdownContent.classList.remove('hidden')
  } else {
    dropdownContent.classList.add('hidden')
  }
}
document.addEventListener('DOMContentLoaded', function () {
	const showSignup = document.getElementById('showSignup');
	const showLoginFromSignup = document.getElementById('showLoginFromSignup');
	const loginSection = document.getElementById('loginSection');
	const signupSection = document.getElementById('signupSection');
	const signupType = document.getElementById('signupType');
	const individualForm = document.getElementById('individualForm');
	const teamForm = document.getElementById('teamForm');
	const signupLabel = document.getElementById('signupLabel');

	showSignup.addEventListener('click', function () {
	  loginSection.classList.add('hidden');
	  signupSection.classList.remove('hidden');
	});

	showLoginFromSignup.addEventListener('click', function () {
	  loginSection.classList.remove('hidden');
	  signupSection.classList.add('hidden');
	});

	signupType.addEventListener('change', function () {
	  if (this.checked) {
		individualForm.style.display = 'none';
		teamForm.style.display = 'block';
		signupLabel.textContent = 'Sign up as Individual';
	  } else {
		individualForm.style.display = 'block';
		teamForm.style.display = 'none';
		signupLabel.textContent = 'Sign up as Institution';
	  }
	});
  });
