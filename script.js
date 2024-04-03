const resumeText = `Name: Anshul Kumar
Email: kumar.anshul.2017470@gmail.com
GitHub: https://github.com/alwaysanshul    
LinkedIn: https://www.linkedin.com/in/alwaysanshul

Education:
- [Graphic Era Deemed University], [B.TECH CSE], [2024]
  - Certifications: [AWS Solutions Architect Associate], [Azure AI Fundamentals]

Skills:
- Programming Languages: [C,C++,Java,Python,HTML,SQL]
- Tools: [VSCode,Jupyter,Eclipse,Github]
- Technical skills: [Data Structures and Algorithms, Object Oriented Programming, Operating System, DBMS]

Projects:
1. [Intelligent Video Surveillance]
    - Description: This project aims to make advanced real-time object tracking to ensure security and
    proactive threat prevention.
   - Technology Used: [YOLOv4, OpenCV, Flask, Python, Numpy, Pandas]

2. [FitHub: The Exercise and Yoga App]
   - Description: This Project aims to predict the correctness of pose and track
    ing of exercise in real-time to provide an innovative platform to help people improve their physical 
     health.    
   - Technology Used: [OpenCV, Mediapipe, Flask, Python]
`;
const resumeElement = document.getElementById('resume');
const typingSound = new Audio('https://www.fesliyanstudios.com/play-mp3/737'); 

let index = 0;
let clickCount = 0;
let resumeDisplayed = false;

function typeResume() {
    if (!resumeDisplayed) {
        typingSound.play(); 
        const character = resumeText[index++];
        const span = document.createElement('span');
        span.innerHTML = character;
        resumeElement.appendChild(span);
        if (index < resumeText.length) {
            setTimeout(typeResume, Math.random() * 50 + 50);
        }
    }
  }

function displayResumeWithoutAnimation() {
    resumeElement.innerHTML = resumeText; 
    typingSound.pause(); 
    resumeDisplayed = true;
}

document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        displayResumeWithoutAnimation();
    }
});

typeResume();