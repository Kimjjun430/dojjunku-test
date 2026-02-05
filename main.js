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
// const resultPersonalitySpan = document.getElementById('result-personality'); // No longer needed as resultTitle is fully dynamic
const resultImage = document.getElementById('result-image');
const resultDescription = document.getElementById('result-description');

const userNameInput = document.getElementById('user-name');
let userName = '';

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
        question: "두바이 쫀득쿠키를 처음 맛보려 합니다. 가장 먼저 드는 생각은?",
        options: [
            { text: "와, 정말 반짝이고 맛있어 보여! 분명 내 하루를 더 밝게 해줄 거야!", type: 'Golden Delight' },
            { text: "이 부드러운 간식 안에 어떤 즐거운 식감과 맛이 숨어있을까 궁금해.", type: 'Soft Heart' },
            { text: "혹시 내가 아직 맛보지 못한 새롭고 독특한 맛일까? 깜짝 놀라게 해주면 좋겠어!", type: 'Spicy Adventurer' },
            { text: "이 근사한 디저트의 유래와 섬세한 만듦새가 궁금해지는군.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "새로운 도전에 맞닥뜨렸을 때, 당신은 주로 어떻게 접근하나요?",
        options: [
            { text: "모든 것이 잘 풀릴 거라 믿고 열정과 긍정적인 태도로 임해.", type: 'Golden Delight' },
            { text: "모두의 감정을 고려하고 조화로운 해결책을 찾으려 노력해.", type: 'Soft Heart' },
            { text: "실험과 위험을 감수할 준비를 하고 앞장서서 뛰어들어.", type: 'Spicy Adventurer' },
            { text: "움직이기 전에 모든 측면을 신중하게 분석하고 고민해.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "어떤 종류의 모임을 가장 즐기나요?",
        options: [
            { text: "모두가 웃고 즐거워하는 활기찬 파티.", type: 'Golden Delight' },
            { text: "친한 친구들과 진솔한 대화를 나누는 아늑한 모임.", type: 'Soft Heart' },
            { text: "새로운 사람들과 예상치 못한 활동이 가득한 신나는 이벤트.", type: 'Spicy Adventurer' },
            { text: "흥미로운 주제를 토론하거나 조용히 책을 읽는 저녁.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "맛있는 디저트를 먹을 때 가장 행복한 순간은?",
        options: [
            { text: "입안 가득 퍼지는 즉각적인 행복감과 달콤한 만족감!", type: 'Golden Delight' },
            { text: "마음을 편안하게 하고 부드러운 여운을 남기는 느낌.", type: 'Soft Heart' },
            { text: "혀를 자극하는 독특하고 놀라운 맛의 발견!", type: 'Spicy Adventurer' },
            { text: "한 입 베어 물 때마다 복합적인 맛의 층이 펼쳐지는 순간.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "예상치 못한 계획 변경에 당신은 어떻게 반응하나요?",
        options: [
            { text: "빠르게 적응하고 새로운 상황의 긍정적인 면을 찾아내.", type: 'Golden Delight' },
            { text: "관련된 모든 사람이 새로운 방향에 편안함을 느끼도록 신경 써.", type: 'Soft Heart' },
            { text: "계획되지 않은 모험의 기회로 여기고 즐거워해.", type: 'Spicy Adventurer' },
            { text: "잠시 멈춰 서서 상황을 재평가하고 다음 단계를 계획해.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "친구 관계에서 가장 중요하게 생각하는 것은 무엇인가요?",
        options: [
            { text: "함께 나누는 웃음과 기분 좋은 순간들.", type: 'Golden Delight' },
            { text: "깊은 이해와 서로를 지지하는 마음.", type: 'Soft Heart' },
            { text: "새롭고 흥미진진한 경험과 도전을 함께하는 것.", type: 'Spicy Adventurer' },
            { text: "의미 있는 대화와 지적인 교류.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "긴 하루를 보낸 후, 당신의 이상적인 휴식 방법은?",
        options: [
            { text: "기분을 좋게 만드는 유쾌하고 가벼운 활동.", type: 'Golden Delight' },
            { text: "따뜻한 음료와 함께하는 평화롭고 조용한 시간.", type: 'Soft Heart' },
            { text: "새로운 취미를 시도하거나 새로운 장소를 탐험하는 것.", type: 'Spicy Adventurer' },
            { text: "오늘의 일들을 되돌아보고 내일을 계획하는 사색의 시간.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "만약 당신이 색깔이라면, 어떤 색깔일까요?",
        options: [
            { text: "밝은 노란색 또는 빛나는 주황색.", type: 'Golden Delight' },
            { text: "부드러운 분홍색 또는 차분한 파란색.", type: 'Soft Heart' },
            { text: "불타는 빨간색 또는 생기 넘치는 녹색.", type: 'Spicy Adventurer' },
            { text: "깊은 보라색 또는 차분한 갈색.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "어떤 종류의 음악을 선호하나요?",
        options: [
            { text: "경쾌한 팝이나 즐거운 연주곡.", type: 'Golden Delight' },
            { text: "마음을 차분하게 하는 멜로디나 부드러운 발라드.", type: 'Soft Heart' },
            { text: "에너지가 넘치는 록 음악이나 모험적인 월드 뮤직.", type: 'Spicy Adventurer' },
            { text: "생각을 자극하는 클래식 음악이나 감성적인 재즈.", type: 'Rich & Deep Thinker' }
        ]
    },
    {
        question: "인생의 좌우명은 무엇인가요?",
        options: [
            { text: "매일이 선물이야!", type: 'Golden Delight' },
            { text: "친절이 세상을 움직여.", type: 'Soft Heart' },
            { text: "인생은 모험이야, 최대한 즐겨봐!", type: 'Spicy Adventurer' },
            { text: "깊이 이해하고, 의미 있게 살자.", type: 'Rich & Deep Thinker' }
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
    userName = userNameInput.value.trim();
    if (!userName) {
        alert('이름을 입력해주세요!');
        userNameInput.focus();
        return;
    }

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
        resultTitle.textContent = `${userName}님, 당신은 ${result.title}!`;
        // resultPersonalitySpan.textContent = result.title; // Removed as title is now set directly to resultTitle
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
    const fullResultText = resultTitle.textContent; // e.g., "홍길동님, 당신은 황금빛 기쁨 (The Golden Delight)!"
    const resultDescText = resultDescription.textContent;
    const shareText = `${fullResultText} 나의 성격은? ${resultDescText.substring(0, 50)}... 지금 테스트해보세요!`; // Truncate description for sharing
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
