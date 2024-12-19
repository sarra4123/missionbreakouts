const correctPassword = "1643";
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const messag = document.getElementById("messag");
const firstPuzzle = document.getElementById("firstPuzzle");
const transitionVideoSection = document.getElementById("transitionVideoSection");
const finalVideoSection = document.getElementById("finalVideoSection");
const transitionVideo = document.getElementById("transitionVideo");
const finalVideo = document.getElementById("finalVideo");
const backgroundMusic = document.getElementById("backgroundMusic");
const secondPuzzle = document.getElementById("secondPuzzle");
const secondPuzzleVideo = document.getElementById("secondPuzzleVideo");
const passwordInput2 = document.getElementById("passwordInput2");
const passwordSubmitBtn = document.getElementById("passwordSubmitBtn");
const photoSection = document.getElementById("photoSection");
const backgroundVideo = document.getElementById("backgroundVideo");
const photoRow = document.getElementById("photoRow");
const dropRow = document.getElementById("dropRow");
const resetBtn = document.getElementById("resetBtn");
const submitOrderBtn = document.getElementById("submitOrderBtn");
const message = document.getElementById("messag");
const result = document.getElementById("result");
const videContainer = document.getElementById("videContainer");
const lvVideo = document.getElementById("lvVideo");
const finalVideSection = document.getElementById("finalVideSection");
const finalVide = document.getElementById("finalVide");
const correctPassword3 = "breakout";
const passwordInput3 = document.getElementById("password");
const submitBtn3 = document.getElementById("submitBtn3");
const message3 = document.getElementById("message");
const transitionVideoSection3 = document.getElementById("transitionVideoSection3");
const transitionVideo3 = document.getElementById("transitionVideo3");
const finalVideoContainer3 = document.getElementById("finalVideoContainer3");
const finalVideo3 = document.getElementById("finalVideo3");
const loadingScreen = document.getElementById("loadingScreen");
const togglePassword = document.getElementById('togglePassword');
const togglePassword2 = document.getElementById('togglePassword2');
const togglePassword3 = document.getElementById('togglePassword3');
const Passwordshih = "الاشتراكية";
const passwordInput4 = document.getElementById("password4");
const submitBtn4 = document.getElementById("submitBtn4");
const message4 = document.getElementById("message4");
const fourthPuzzle = document.getElementById("fourthPuzzle");
const quizSection = document.getElementById("quizSection");
const questionContainer = document.getElementById("questionContainer");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreContainer = document.getElementById("scoreContainer");
const scoreDisplay = document.getElementById("score");


// Fonction pour masquer toutes les sections sauf celle spécifiée----------------------------------------------------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId).style.display = 'block';
}

//-------------------------------------------------------------------------------------------------------------------------------------

// afichage des mot passe--------------------------------------------------------------------------------------------------------------

togglePassword.addEventListener('click', function () {

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
   
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️'; // Change the icon as needed
   
});


togglePassword2.addEventListener('click', function () {
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

togglePassword3.addEventListener('click', function () {
    const type = passwordInput3.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput3.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});
//-------------------------------------------------------------------------------------------------------------------------------------

// Première énigme---------------------------------------------------------------------------------------------------------------------

passwordInput.addEventListener("input", function() {
    passwordInput.value = passwordInput.value.replace(/\D/g, "");
    if (passwordInput.value.length > 0) {
        submitBtn.classList.add("active");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove("active");
        submitBtn.disabled = true;
    }
});

submitBtn.addEventListener("click", function() {
    if (passwordInput.value === correctPassword) {
        messag.innerHTML = "";
        submitBtn.classList.remove("shake");

        // Afficher la vidéo de transition
        showSection("transitionVideoSection");
        transitionVideo.play();

        // video enigme 2
        transitionVideo.onended = function() {
            showSection("finalVideoSection");
            finalVideo.play();
            // music t5awf
            setTimeout(() => {
                backgroundMusic.pause();
                backgroundMusic.currentTime = 0; // Réinitialiser à zéro si vous voulez redémarrer la musique plus tard
            }, 50000); // 50 secondes en millisecondes
        

           // Afficher le bouton التالي
            const nextButton = document.createElement("button");
            nextButton.textContent = "التالي";
            nextButton.classList.add("nextbutton1"); 
            document.getElementById("finalVideoSection").appendChild(nextButton);

            

           // Ajouter un événement pour passer au puzzle suivant
           nextButton.addEventListener("click", function() {
           showSection("secondPuzzle");
           secondPuzzleVideo.play();
            });
        
        };  
    } else {
        messag.innerHTML = "كلمة السر خاطئة";
        submitBtn.classList.add("shake");
        setTimeout(() => {
            submitBtn.classList.remove("shake");
        }, 500);
    }
});



// Deuxième énigme----------------------------------------------------------------------------------------------------------------------
const correctOrder = [
    "1.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"
];

// Vérification du mot de passe 
passwordInput2.addEventListener("input", function() {
    passwordInput2.value = passwordInput2.value.replace(/[0-9]/g, "");
    if (passwordInput2.value.length > 0) {
        passwordSubmitBtn.classList.add("active");
        passwordSubmitBtn.disabled = false;
    } else {
        passwordSubmitBtn.classList.remove("active");
        passwordSubmitBtn.disabled = true;
    }
});

// Gestion du clic sur le bouton Valider
passwordSubmitBtn.addEventListener("click", () => {
    if (passwordInput2.value === "moon") {
        // Si le mot de passe est correct, effacer le message d'erreur, retirer la classe shake et afficher la section des photos
        document.getElementById("passwordMessag").innerText = "";
        passwordSubmitBtn.classList.remove("shake");
        showSection("photoSection");
        loadPhotos();

    } else {
        // Si le mot de passe est incorrect, afficher un message d'erreur et ajouter la classe shake au bouton
        document.getElementById("passwordMessag").innerText = "you'r wrong!";
        passwordSubmitBtn.classList.add("shake");
        setTimeout(() => {
            passwordSubmitBtn.classList.remove("shake");
        }, 500);
    }
});

// Fonction pour charger les photos
function loadPhotos() {
    let shuffledOrder = [...correctOrder];
    shuffle(shuffledOrder);

    // Charger les photos dans le conteneur
    photoRow.innerHTML = '';
    shuffledOrder.forEach((photo, index) => {
        const img = document.createElement("img");
        img.src = photo;
        img.classList.add("photo");
        img.setAttribute("data-index", index);
        img.addEventListener("click", handleClick);
        photoRow.appendChild(img);
    });

    // Créer les cases vides pour le drop
    dropRow.innerHTML = '';
    for (let i = 0; i < correctOrder.length; i++) {
        const dropZone = document.createElement("div");
        dropZone.classList.add("empty-drop");
        dropZone.setAttribute("data-index", i);
        dropZone.addEventListener("click", handleDrop);
        dropRow.appendChild(dropZone);
    }
}

// Fonction pour mélanger un tableau
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Gérer le clic sur une image
function handleClick(event) {
    const img = event.target;
    const parent = img.parentElement;

    // Retirer l'image de son parent
    parent.removeChild(img);

    // Ajouter l'image à la première case vide disponible
    const emptyDrop = document.querySelector(".empty-drop:not(:has(img))");
    if (emptyDrop) {
        emptyDrop.appendChild(img);
    }

}

// Gérer le drop
function handleDrop(event) {
    const dropZone = event.target;
    if (dropZone.classList.contains("empty-drop") && !dropZone.querySelector("img")) {
        const draggingImg = document.querySelector(".photo:hover");

        if (draggingImg) {
            dropZone.appendChild(draggingImg);
            
        }
    }
}

function checkOrder() {
    // Récupérer les images placées dans les zones de dépôt
    const dropImages = Array.from(dropRow.children).map(drop =>
        drop.querySelector("img") ? drop.querySelector("img").src.split('/').pop() : null
    );

    // Vérifier si l'ordre est correct
    if (JSON.stringify(dropImages) === JSON.stringify(correctOrder)) {
        // Afficher le résultat
        showSuccess();
    } else {
        // Afficher le message d'erreur
        message.textContent = "The order is incorrect. Please try again";
    }
}

function showSuccess() {
    result.style.display = "block";
    message.innerHTML = "";
    submitOrderBtn.classList.add("active");

    // Démarrer la première vidéo trans2 en plein écran
    videContainer.style.display = "block";
    lvVideo.play();

    // Quand la première vidéo est terminée, démarrer la seconde vidéo (enig2.mp4)
    lvVideo.onended = () => {
        showSection("finalVideSection");
        finalVide.play();

        // Activer le bouton "Suivant" à la fin de la seconde vidéo
        
            const nextButton = document.getElementById("nextButton2");
            nextButton.disabled = false; // Activer le bouton
            nextButton.addEventListener("click", () => {
                showSection("thirdPuzzle"); // Afficher la section de la 3ème énigme
            });
    };
}

// Réinitialiser les photos
resetBtn.addEventListener("click", () => {
    loadPhotos();
    message.innerText = "";
    submitOrderBtn.disabled = true;
});


//--------------------------------------------------------------------------------------------------------------------------------------


// troisieme enigme --------------------------------------------------------------------------------------------------------------------
passwordInput3.addEventListener("input", function() {
    if (passwordInput3.value.length > 0) {
        submitBtn3.classList.add("active");
        submitBtn3.disabled = false;
    } else {
        submitBtn3.classList.remove("active");
        submitBtn3.disabled = true;
    }
});

// Gérer le clic sur le bouton "Breakout" pour la troisième énigme
submitBtn3.addEventListener("click", function() {
    if (passwordInput3.value === correctPassword3) {
        // Afficher l'écran de chargement
        loadingScreen.style.display = "flex";

        // Simuler un délai de chargement pour une meilleure expérience utilisateur
        setTimeout(() => {
            loadingScreen.style.display = "none";

            // Afficher la vidéo de transition
            showSection("transitionVideoSection3");
            transitionVideo3.play();
            message3.innerHTML = "";
            submitBtn3.classList.remove("shake");

            // Lorsque la vidéo de transition est terminée
            transitionVideo3.onended = function() {
                showSection("finalVideoContainer3");
                finalVideo3.play();
                backgroundMusic.play();
            };
        }, 1500);
    } else {
        // Afficher un message d'erreur si le mot de passe est incorrect
        message3.innerHTML = "Mot de passe incorrect.";
        submitBtn3.classList.add("shake");

        // Arrêter l'effet de secousse après 0,5 seconde
        setTimeout(() => {
            submitBtn3.classList.remove("shake");
        }, 500);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: " ?microbit ما هو " ,
        options: ["روبوت كامل", "كمبيوتر صغير قابل للبرمجة", "جهاز تحكم للتلفاز", "لعبة فيديو"],
        correct: 1
    },
    {
        question:"كم عدد المصابيح في الميكروبيت",
        options: ["10", "15", "25", "30"],
        correct: 2
    },
    {
        question: " A and B ما هي وظيفة الأزرار  ",
        options: ["تشغيل الموسيقى", "تشغيل مصباح", "التفاعل مع البرامج", "التقاط الصور"],
        correct: 2
    },
    {
        question: "ما هو استخدام الميكروبيت في التعليم؟",
        options: ["لعب الألعاب", "تعليم البرمجة", "التسوق عبر الإنترنت", "تصفح الإنترنت"],
        correct: 1
    },
    {
        question: "كيف يمكن برمجة micro:bit؟",
        options: ["باستخدام Python", "باستخدام C#", "باستخدام Java", "باستخدام SQL"],
        correct: 0
    },
    {
        question: "ما هم  المستشعرات في الميكروبيت ؟",
        options: ["مستشعر الحرارة", "مستشعرالتسارع  ", "مستشعر الضوء", "كل ما سبق"],
        correct: 3
    },
    {
        question: "ما هي منصة البرمجة الشهيرة ل الميكروبيت؟",
        options: ["Tinkercad", "MakeCode", "IDE Arduino", "Raspberry Pi"],
        correct: 1
    },
    {
        question: "هل  يمكنه الميكروبيت الاتصال بالإنترنت؟",
        options: ["نعم", "لا", "بشكل محدود", "فقط باستخدام الإضافات"],
        correct: 3
    },
    {
        question: "ما هي اللغة المستخدمة بشكل أساسي لبرمجة الميكروبيت؟",
        options: ["JavaScript", "HTML", "Scratch", "C++"],
        correct: 0
    },
    {
        question: "ما هو مصدر الطاقة الأساسي ل الميكروبيت؟",
        options: ["البطاريات", "الكهرباء المنزلية", "الألواح الشمسية", "التوصيل بالكمبيوتر"],
        correct: 0
    },
    {
        question: "ما هو اسم مستشعر الحركة بالانجليزية؟",
        options: ["ultra sonic sound", "  PIR sensor", " Gesture sensor ", "  accelerometer"],
        correct: 1
    },
    {
        question: "كيف يتم توصيل الميكروبيت بأجهزة أخرى ؟",
        options: ["Bluetooth", "Wi-Fi", "USB", "كل ما سبق"],
        correct: 3
    }
];

passwordInput4.addEventListener("input", function() {
    submitBtn4.disabled = passwordInput4.value.length === 0;
});

submitBtn4.addEventListener("click", function() {
    if (passwordInput4.value === Passwordshih) {
        message4.innerText = "";
        document.getElementById("passwordSection").style.display = "none";
        quizSection.style.display = "block";
        showQuestion();
    } else {
        message4.innerText = "كلمة المرور غير صحيحة.";
    }
});

nextBtn.addEventListener("click", function() {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
        const answerIndex = Array.from(optionsContainer.children).indexOf(selectedOption);
        if (answerIndex === questions[currentQuestionIndex].correct) {
            score += 5; // Each question now worth 5 points to total 100 points
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.querySelector("#question").innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => selectOption(optionElement, index));
        optionsContainer.appendChild(optionElement);
    });
    nextBtn.style.display = "none";
}

function selectOption(optionElement, index) {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
        selectedOption.classList.remove("selected");
    }
    optionElement.classList.add("selected");
    nextBtn.style.display = "block";
}

function showScore() {
    questionContainer.style.display = "none";
    nextBtn.style.display = "none";
    scoreContainer.style.display = "block";
    scoreDisplay.innerText = score;
}

// Modifier la fin de la troisième énigme pour passer au quiz
finalVideo3.onended = () => {
    showSection("fourthPuzzle");
    document.getElementById("fourthPuzzleVideo").play();
};