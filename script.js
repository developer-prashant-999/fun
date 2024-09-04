let buttonCanMove = true;

document.getElementById("submitBtn").addEventListener("mouseover", function(event) {
    if (buttonCanMove) {
        const button = event.target;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const offset = 20; // Minimum distance from the edge of the screen

        // Calculate new random positions for the button
        let newTop = Math.random() * (windowHeight - buttonHeight - offset);
        let newLeft = Math.random() * (windowWidth - buttonWidth - offset);

        button.style.position = 'absolute';
        button.style.top = newTop + 'px';
        button.style.left = newLeft + 'px';
    }
});

document.getElementById("username").addEventListener("input", function() {
    const usernameValue = document.getElementById("username").value.toLowerCase();
    if (usernameValue === "solved") {
        buttonCanMove = false;
    } else {
        buttonCanMove = true;
    }
});

document.getElementById("submitBtn").addEventListener("click", function() {
    if (!buttonCanMove || document.getElementById("username").value.toLowerCase() === "solved") {
        document.getElementById("login-container").style.display = 'none';
        document.getElementById("cake-container").style.display = 'block';
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
});
