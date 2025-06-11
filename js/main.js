document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const keywords = document.getElementById('keywords').value.trim();
    if (keywords === '') {
        alert("Merci d'entrer au moins un mot-clé !");
        return;
    }

    console.log("Mots-clés saisis :", keywords);

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('titleContainer').innerText = "Génération IA en cours...";
    document.getElementById('imageContainer').innerHTML = "<p>Image IA générée ici</p>";
});