function addRecommendation() {
    const recommendationText = document.getElementById('new-recommendation').value;
    if (recommendationText.trim() !== '') {
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `<p>"${recommendationText}"</p><p>- New User</p>`;
        document.querySelector('.recommendations-container').appendChild(newRecommendation);
        showPopup(true);
        document.getElementById('new-recommendation').value = '';
    } else {
        alert('Please enter a recommendation.');
    }
}

function showPopup(show) {
    const popup = document.getElementById('popup');
    if (show) {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    } else {
        popup.style.display = 'none';
    }
}
