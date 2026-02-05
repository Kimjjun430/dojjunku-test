// main.js

const appContainer = document.getElementById('app-container');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startTestBtn = document.getElementById('start-test-btn');
const restartTestBtn = document.getElementById('restart-test-btn');
const shareResultBtn = document.getElementById('share-result-btn');

import './question-card.js'; // Import the Web Component

const currentQuestionNumSpan = document.getElementById('current-question-num');
// Removed questionText and answerOptionsDiv as they will be part of the custom element
const questionCardContainer = document.getElementById('question-card'); // This div will host our custom element

const resultTitle = document.getElementById('result-title');
const resultPersonalitySpan = document.getElementById('result-personality');
const resultImage = document.getElementById('result-image');
const resultDescription = document.getElementById('result-description');

let currentQuestionIndex = 0;
let scores = {
    'Golden Delight': 0,
    'Soft Heart': 0,
    'Spicy Adventurer': 0,
    'Rich & Deep Thinker': 0
};

// --- Test Data ---
const questions = [
    {
        question: "Imagine you're about to try a Dubai Jjonddeok Cookie for the first time. What's your first thought?",
        options: [
            { text: "Wow, it looks so shiny and delicious! I bet it'll make my day brighter!", type: 'Golden Delight' },
            { text: "I wonder what delightful textures and flavors await inside this gentle-looking treat.", type: 'Soft Heart' },
            { text: "Is there a new, unique flavor I haven't tried? I hope it surprises me!", type: 'Spicy Adventurer' },
            { text: "I'm curious about its origin and the craftsmanship behind this exquisite dessert.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "How do you typically approach a new challenge?",
        options: [
            { text: "With enthusiasm and a positive attitude, believing everything will work out.", type: 'Golden Delight' },
            { text: "By considering everyone's feelings and seeking a harmonious solution.", type: 'Soft Heart' },
            { text: "By diving in headfirst, ready to experiment and take risks.", type: 'Spicy Adventurer' },
            { text: "By analyzing all aspects carefully before making a move.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What kind of gathering do you enjoy most?",
        options: [
            { text: "A lively party where everyone is laughing and having fun.", type: 'Golden Delight' },
            { text: "A cozy get-together with close friends, sharing heartfelt conversations.", type: 'Soft Heart' },
            { text: "An exciting event with new people and unexpected activities.", type: 'Spicy Adventurer' },
            { text: "A quiet evening discussing interesting topics or enjoying a good book.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What's your favorite part about eating a delicious dessert?",
        options: [
            { text: "The immediate burst of happiness and sweet satisfaction.", type: 'Golden Delight' },
            { text: "The comforting and tender feeling it leaves.", type: 'Soft Heart' },
            { text: "The unique and surprising flavors that tingle your taste buds.", type: 'Spicy Adventurer' },
            { text: "The complex layers of flavor that unfold with each bite.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "How do you react to unexpected changes in plans?",
        options: [
            { text: "You quickly adapt and find the positive aspects of the new situation.", type: 'Golden Delight' },
            { text: "You try to ensure everyone involved is comfortable with the new direction.", type: 'Soft Heart' },
            { text: "You see it as an opportunity for an unplanned adventure.", type: 'Spicy Adventurer' },
            { text: "You take a moment to re-evaluate and plan your next steps.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What do you value most in a friendship?",
        options: [
            { text: "Shared laughter and uplifting moments.", type: 'Golden Delight' },
            { text: "Deep understanding and mutual support.", type: 'Soft Heart' },
            { text: "Exciting new experiences and challenges together.", type: 'Spicy Adventurer' },
            { text: "Meaningful conversations and intellectual stimulation.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What's your ideal way to relax after a long day?",
        options: [
            { text: "Doing something fun and light-hearted to boost your mood.", type: 'Golden Delight' },
            { text: "Enjoying a peaceful and quiet activity, perhaps with a warm drink.", type: 'Soft Heart' },
            { text: "Trying out a new hobby or exploring a new place.", type: 'Spicy Adventurer' },
            { text: "Reflecting on the day's events and planning for tomorrow.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "If you were a color, what would you be?",
        options: [
            { text: "Bright Yellow or Radiant Orange.", type: 'Golden Delight' },
            { text: "Soft Pink or Calming Blue.", type: 'Soft Heart' },
            { text: "Fiery Red or Electric Green.", type: 'Spicy Adventurer' },
            { text: "Deep Purple or Earthy Brown.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What kind of music do you prefer?",
        options: [
            { text: "Upbeat pop or cheerful instrumental.", type: 'Golden Delight' },
            { text: "Calming melodies or gentle ballads.", type: 'Soft Heart' },
            { text: "Energetic rock or adventurous world music.", type: 'Spicy Adventurer' },
            { text: "Thought-provoking classical or soulful jazz.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "What's your motto in life?",
        options: [
            { text: "Every day is a gift!", type: 'Golden Delight' },
            { text: "Kindness makes the world go round.", type: 'Soft Heart' },
            { text: "Life's an adventure, live it to the fullest!", type: 'Spicy Adventurer' },
            { text: "Understand deeply, live meaningfully.", type: 'Rich & Deep Thinker' }
        ]
    }
];

const personalityTypes = {
    'Golden Delight': {
        title: '황금빛 기쁨 (The Golden Delight)',
        description: '당신은 낙천적이고 쾌활하며 항상 삶의 밝은 면을 봅니다. 당신의 긍정적인 에너지는 주변 사람들에게 행복을 가져다줍니다. 마치 황금빛 쫀득쿠키처럼, 어디서든 빛나고 달콤함을 선사하는 존재입니다!',
        // Placeholder image - replace with actual themed image
        image: 'https://picsum.photos/seed/goldencookie/300/200' 
    },
    'Soft Heart': {
        title: '부드러운 마음 (The Soft Heart)',
        description: '당신은 공감 능력이 뛰어나고 친절하며 온화합니다. 주변 사람들을 지지하고 조화를 중요하게 생각하는 당신의 마음은 부드러운 쫀득쿠키 속살처럼 따뜻하고 포근합니다.',
        // Placeholder image - replace with actual themed image
        image: 'https://picsum.photos/seed/softdessert/300/200'
    },
    'Spicy Adventurer': {
        title: '매콤한 모험가 (The Spicy Adventurer)',
        description: '당신은 대담하고 호기심이 많으며 새로운 경험을 사랑합니다. 에너지가 넘치고 흥미진진한 도전을 즐기는 당신은 예상치 못한 맛으로 가득 찬 매콤한 쫀득쿠키와 같습니다. 늘 새로운 모험을 찾아 떠나죠!',
        // Placeholder image - replace with actual themed image
        image: 'https://picsum.photos/seed/spicytreat/300/200'
    },
    'Rich & Deep Thinker': {
        title: '깊고 풍부한 사색가 (The Rich & Deep Thinker)',
        description: '당신은 내성적이고 사려 깊으며 깊이 있는 것을 추구합니다. 조용한 사색을 즐기며 사물의 본질을 파악하려 노력하는 당신은 풍부하고 깊은 맛을 지닌 쫀득쿠키처럼, 알면 알수록 매력적인 존재입니다.',
        // Placeholder image - replace with actual themed image
        image: 'https://picsum.photos/seed/richchocolate/300/200'
    }
};

// --- Functions ---
function showScreen(screenToShow) {
    const screens = [startScreen, questionScreen, resultScreen];
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none'; // Ensure it's hidden for layout
    });
    screenToShow.classList.add('active');
    screenToShow.style.display = 'block'; // Or 'flex' if needed
}

function startTest() {
    currentQuestionIndex = 0;
    scores = {
        'Golden Delight': 0,
        'Soft Heart': 0,
        'Spicy Adventurer': 0,
        'Rich & Deep Thinker': 0
    };
    showQuestion();
    showScreen(questionScreen);
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        currentQuestionNumSpan.textContent = currentQuestionIndex + 1;
        
        // Clear previous custom element if any
        questionCardContainer.innerHTML = ''; 

        const questionCard = document.createElement('question-card');
        questionCard.setAttribute('question-text', questionData.question);
        questionCard.setAttribute('question-number', currentQuestionIndex + 1);
        questionCard.options = questionData.options; // Pass options as a property

        questionCard.addEventListener('answer-selected', handleAnswerClick);
        questionCardContainer.appendChild(questionCard);

    } else {
        showResult();
    }
}

function handleAnswerClick(event) {
    const chosenType = event.detail.type; // Get type from custom event detail
    scores[chosenType] += 3; // Add points for the chosen type
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    let maxScore = -1;
    let resultType = '';

    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }
    // Handle ties - for simplicity, just picks the first one encountered if scores are identical.

    const result = personalityTypes[resultType];
    if (result) {
        resultPersonalitySpan.textContent = result.title;
        resultImage.src = result.image;
        resultImage.alt = `${result.title} 이미지`;
        resultDescription.textContent = result.description;
    } else {
        // Fallback for no result or error
        resultPersonalitySpan.textContent = '알 수 없음';
        resultDescription.textContent = '결과를 찾을 수 없습니다. 다시 시도해주세요.';
        resultImage.src = 'https://picsum.photos/seed/error/300/200';
    }

    showScreen(resultScreen);
}

function shareResult() {
    const resultTitleText = resultPersonalitySpan.textContent;
    const resultDescText = resultDescription.textContent;
    const shareText = `나는 '${resultTitleText}' 두바이 쫀득쿠키 타입! 나의 성격은? ${resultDescText.substring(0, 50)}... 지금 테스트해보세요!`; // Truncate description for sharing
    const shareUrl = window.location.href; // Current page URL

    if (navigator.share) {
        navigator.share({
            title: '두바이 쫀득쿠키 성격 테스트',
            text: shareText,
            url: shareUrl,
        }).catch((error) => console.error('Error sharing', error));
    } else {
        // Fallback for browsers that do not support navigator.share
        alert(`테스트 결과 공유하기: 

${shareText}
${shareUrl}`);
    }
}

// --- Event Listeners ---
startTestBtn.addEventListener('click', startTest);
restartTestBtn.addEventListener('click', startTest);
shareResultBtn.addEventListener('click', shareResult);

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    showScreen(startScreen);
});
