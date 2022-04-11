function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) {
    event.preventDefault();  /* This method prevents the browser default behavior of sending a request automatically*/
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim(); /* get() allows us to get a value of one of our inputs. 
                                                                  trim() provide get rid of all white space i.e '   Can  Ozcan  ' -> 'Can Ozcan'   */
    if (!enteredPlayerName) { // enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

}