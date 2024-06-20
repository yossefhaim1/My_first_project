function handleSubmit(event) {
    event.preventDefault();  // מונע שליחה של הטופס
    alert('פרטי התשלום נקלטו בהצלחה!');
    document.getElementById('payment-form').reset();  // מאפס את הטופס
}

function validateInput(event, pattern) {
    const input = event.target;
    if (!pattern.test(input.value)) {
        input.setCustomValidity('יש להכניס רק תווים מתאימים.');
    } else {
        input.setCustomValidity('');
    }
}