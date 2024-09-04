let buttonCanMove = true;
let correctAnswerGiven = false;

const questions = [
    { question: "Why Giraffe has long neck?", answer: "its head is far", hint: "It's natrual!" },
    { question: "What do you call a sleeping dinosaur??", answer: "dinosnore", hint: "snore." },
    { question: "Most romantic flowers?", answer: "tulips", hint: "lips" },
    { question: "What has a head and a tail but no body?", answer: "coin", hint: "You flip it!" },
    { question: "What can you catch but not throw?", answer: "cold", hint: "Better take some vitamin C!" },
    { question: "what do you call a fly with no wings?", answer: "walk", hint: "hahahah." },
    { question: "What is full of holes but still holds water?", answer: "sponge", hint: "It lives in the kitchen sink." },
    { question: "What do u call a fish with no eye?", answer: "fsh", hint: "lol" }
    ];

const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
document.getElementById("question").innerText = randomQuestion.question;
document.getElementById("hint").innerText = `Hint: ${randomQuestion.hint}`;

document.getElementById("submitBtn").addEventListener("mouseover", function(event) {
    if (buttonCanMove && !correctAnswerGiven) {
        const button = event.target;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const offset = 20; // Minimum distance from the edge of the screen

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

document.getElementById("answer").addEventListener("input", function() {
    const answerValue = document.getElementById("answer").value.toLowerCase();
    if (answerValue === randomQuestion.answer.toLowerCase()) {
        correctAnswerGiven = true;
    } else {
        correctAnswerGiven = false;
    }
});

document.getElementById("submitBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value.toLowerCase();
    let customMessage = "";

    if (username === "barsha") {
        customMessage = "You are free to enter!";
    } else if (username === "sudeepa") {
        customMessage = "Sisters also have free entry!";
    }

    if (!buttonCanMove || username === "solved" || correctAnswerGiven) {
        document.getElementById("login-container").style.display = 'none';
        document.getElementById("cake-container").style.display = 'block';
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

        if (customMessage) {
            const messageElement = document.createElement("p");
            messageElement.innerText = customMessage;
            messageElement.style.fontSize = "18px";
            messageElement.style.color = "#ff4500";
            document.getElementById("cake-container").appendChild(messageElement);
        }
    }
});
