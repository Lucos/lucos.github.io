// Récupération des éléments du formulaire
const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const email = document.querySelector('#email');

// Fonction de validation de l'email
function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Validation de l'email
	if (!validateEmail(email.value)) {
		alert('Veuillez saisir une adresse email valide');
		return;
	}

	// Envoi de la requête pour enregistrer l'utilisateur en base de données
	fetch('/enregistrer', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			nom: nom.value,
			prenom: prenom.value,
			email: email.value
		})
	})
	.then(response => {
		if (response.ok) {
			alert('Inscription réussie');
			form.reset();
		} else {
			alert('Erreur lors de l\'inscription');
		}
	})
	.catch(error => {
		alert('Erreur lors de l\'inscription');
		console.error(error);
	});
});
