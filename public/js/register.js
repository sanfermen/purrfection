document.addEventListener('DOMContentLoaded', function () {
	const roleSelect = document.getElementById('role');
	const catFields = document.getElementById('cat-fields');
	const catInputs = catFields.querySelectorAll('input, textarea');

	function toggleCatFields() {
	if (roleSelect.value === 'client') {
		catFields.style.display = 'block';
		catInputs.forEach(el => el.setAttribute('required', 'required'));
	} else {
		catFields.style.display = 'none';
		catInputs.forEach(el => el.removeAttribute('required'));
		}
	}

	toggleCatFields(); // Ejecuta al cargar

	roleSelect.addEventListener('change', toggleCatFields);
})