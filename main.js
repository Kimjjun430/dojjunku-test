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

const themeToggleBtn = document.getElementById('theme-toggle-btn');

let currentQuestionIndex = 0;
let scores = {
    '모험가': 0,
    '사색가': 0,
    '예술가': 0,
    '이상주의자': 0,
    '전략가': 0,
    '치유자': 0,
    '현실주의자': 0
};

// --- Test Data ---
const questions = [
    {
        question: "주말에 새로운 활동을 계획한다면, 어떤 종류를 선택할까요?",
        options: [
            { text: "숨겨진 등산로를 찾아 자연을 탐험하거나 새로운 스포츠에 도전한다.", type: '모험가' },
            { text: "조용한 카페에서 책을 읽거나 복잡한 퍼즐 게임에 몰두한다.", type: '사색가' },
            { text: "그림을 그리거나 악기를 연주하며 나만의 작품을 만든다.", type: '예술가' },
            { text: "사회 문제 해결을 위한 자원봉사에 참여하거나 의미 있는 강연을 듣는다.", type: '이상주의자' },
            { text: "다음 주 업무 계획을 세우거나 개인 재정 계획을 점검한다.", type: '전략가' },
            { text: "스파나 마사지를 받으며 몸과 마음의 피로를 푼다.", type: '치유자' },
            { text: "친구들과 만나 맛집을 탐방하거나 영화를 본다.", type: '현실주의자' }
        ]
    },
    {
        question: "팀 프로젝트를 할 때 당신의 역할은 주로 무엇인가요?",
        options: [
            { text: "새로운 아이디어를 제시하고 팀원들의 참여를 독려한다.", type: '모험가' },
            { text: "팀의 목표와 방향성을 깊이 고민하고 비판적으로 분석한다.", type: '사색가' },
            { text: "프로젝트의 미적 요소를 담당하거나 독창적인 방식으로 문제를 해결한다.", type: '예술가' },
            { text: "팀원들의 의견을 조율하고 긍정적인 분위기를 만들며 이상적인 결과를 추구한다.", type: '이상주의자' },
            { text: "명확한 계획을 세우고 각자의 역할을 분배하여 효율성을 높인다.", type: '전략가' },
            { text: "팀원들의 고충을 듣고 공감하며 심리적 지지를 제공한다.", type: '치유자' },
            { text: "현실적인 제약 조건을 고려하여 실현 가능한 목표를 설정한다.", type: '현실주의자' }
        ]
    },
    {
        question: "당신에게 '성공'이란 무엇을 의미하나요?",
        options: [
            { text: "아무도 가보지 못한 길을 개척하고 새로운 경험을 얻는 것.", type: '모험가' },
            { text: "삶의 본질적인 질문에 대한 답을 찾고 자신만의 철학을 확립하는 것.", type: '사색가' },
            { text: "나만의 독창적인 결과물을 만들어 세상에 선보이는 것.", type: '예술가' },
            { text: "나의 노력으로 세상이 좀 더 나은 곳으로 변화하는 것을 보는 것.", type: '이상주의자' },
            { text: "세운 목표를 달성하고 그 과정에서 효율성과 성과를 최적화하는 것.", type: '전략가' },
            { text: "주변 사람들과 함께 행복하고 평화로운 삶을 만들어가는 것.", type: '치유자' },
            { text: "경제적 안정과 사회적 인정을 얻으며 편안한 삶을 영위하는 것.", type: '현실주의자' }
        ]
    },
    {
        question: "여행지에서 예상치 못한 문제가 발생했을 때 당신의 대처 방식은?",
        options: [
            { text: "'이것도 추억이지!' 하며 새로운 해결책을 찾거나 우회하는 길을 즐긴다.", type: '모험가' },
            { text: "잠시 멈춰 서서 문제의 원인을 분석하고 최적의 해결 방안을 고민한다.", type: '사색가' },
            { text: "이 상황을 영감 삼아 새로운 아이디어를 얻거나 재미있는 방식으로 극복한다.", type: '예술가' },
            { text: "주변 사람들의 도움을 청하거나 다른 사람들에게 피해가 가지 않도록 노력한다.", type: '이상주의자' },
            { text: "당황하지 않고 침착하게 여러 대안을 검토하며 가장 효율적인 방법을 선택한다.", type: '전략가' },
            { text: "동행한 사람들의 불안감을 먼저 살피고, 그들을 안심시키는 데 집중한다.", type: '치유자' },
            { text: "현실적으로 가능한 선에서 문제를 해결하고, 더 큰 손실을 막는 데 주력한다.", type: '현실주의자' }
        ]
    },
    {
        question: "당신이 가장 중요하게 생각하는 가치는 무엇인가요?",
        options: [
            { text: "자유와 도전", type: '모험가' },
            { text: "지혜와 통찰", type: '사색가' },
            { text: "아름다움과 독창성", type: '예술가' },
            { text: "정의와 평화", type: '이상주의자' },
            { text: "효율과 성과", type: '전략가' },
            { text: "공감과 배려", type: '치유자' },
            { text: "안정과 실용성", type: '현실주의자' }
        ]
    },
    {
        question: "스트레스를 해소하는 당신만의 방법은?",
        options: [
            { text: "즉흥적으로 여행을 떠나거나 평소 안 해본 것을 시도한다.", type: '모험가' },
            { text: "조용한 곳에서 명상을 하거나 깊은 생각에 잠긴다.", type: '사색가' },
            { text: "좋아하는 음악을 크게 틀고 춤을 추거나 창작 활동에 몰두한다.", type: '예술가' },
            { text: "고민을 털어놓을 친구를 찾아 이야기하거나 사회 활동에 참여한다.", type: '이상주의자' },
            { text: "스트레스의 원인을 분석하고 해결을 위한 구체적인 계획을 세운다.", type: '전략가' },
            { text: "따뜻한 물에 몸을 담그거나 맛있는 음식을 먹으며 스스로를 위로한다.", type: '치유자' },
            { text: "친한 사람들과 술 한잔 기울이거나 맛있는 것을 먹으며 현실을 잊는다.", type: '현실주의자' }
        ]
    },
    {
        question: "미래를 계획할 때, 당신은 어떤 면을 가장 중요하게 생각하나요?",
        options: [
            { text: "새로운 가능성을 열어두고 언제든 변화에 유연하게 대처할 수 있도록 한다.", type: '모험가' },
            { text: "깊은 통찰을 바탕으로 장기적인 안목으로 계획을 세운다.", type: '사색가' },
            { text: "틀에 갇히지 않고 나만의 방식으로 독창적인 미래를 그려나간다.", type: '예술가' },
            { text: "사회에 긍정적인 영향을 미치고 이상적인 가치를 실현할 수 있는 방향으로 계획한다.", type: '이상주의자' },
            { text: "목표 달성을 위한 가장 효율적이고 실현 가능한 전략을 수립한다.", type: '전략가' },
            { text: "주변 사람들과 함께 행복을 추구하고, 서로에게 도움이 되는 방향으로 계획한다.", type: '치유자' },
            { text: "현실적인 제약과 자신의 능력을 고려하여 안정적이고 실용적인 계획을 세운다.", type: '현실주의자' }
        ]
    },
    {
        question: "당신에게 영감을 주는 것은 무엇인가요?",
        options: [
            { text: "미지의 세계, 새로운 경험, 그리고 예측 불가능한 변화.", type: '모험가' },
            { text: "철학적인 사상, 복잡한 이론, 그리고 인간의 본질에 대한 탐구.", type: '사색가' },
            { text: "아름다운 예술 작품, 독창적인 디자인, 그리고 창의적인 아이디어.", type: '예술가' },
            { text: "인류애, 사회 정의, 그리고 더 나은 세상을 위한 희망.", type: '이상주의자' },
            { text: "성공적인 프로젝트, 효율적인 시스템, 그리고 명확한 목표 달성.", type: '전략가' },
            { text: "따뜻한 격려의 말, 진심 어린 위로, 그리고 사람들의 행복한 미소.", type: '치유자' },
            { text: "실제적인 성과, 현실적인 해결책, 그리고 안정적인 일상.", type: '현실주의자' }
        ]
    },
    {
        question: "새로운 것을 배울 때, 당신은 어떤 방식을 선호하나요?",
        options: [
            { text: "직접 해보고 부딪히면서 몸으로 익힌다.", type: '모험가' },
            { text: "관련 서적을 탐독하고 깊이 있게 분석하며 이해한다.", type: '사색가' },
            { text: "나만의 방식으로 재해석하거나 기존 지식을 활용하여 새로운 것을 창조한다.", type: '예술가' },
            { text: "배운 것을 통해 다른 사람들에게 도움이 될 방법을 모색한다.", type: '이상주의자' },
            { text: "학습 목표를 명확히 세우고 단계별로 효율적인 학습 전략을 따른다.", type: '전략가' },
            { text: "편안하고 즐거운 분위기에서 다른 사람들과 소통하며 배운다.", type: '치유자' },
            { text: "실생활에 바로 적용할 수 있는 실용적인 지식이나 기술을 배운다.", type: '현실주의자' }
        ]
    },
    {
        question: "당신이 가장 듣고 싶은 칭찬은?",
        options: [
            { text: "역시 당신 덕분에 예상치 못한 즐거운 경험을 했어!", type: '모험가' },
            { text: "당신과 대화하면 항상 새로운 관점을 얻게 돼.", type: '사색가' },
            { text: "정말 당신다운, 독창적인 아이디어야!", type: '예술가' },
            { text: "당신 덕분에 세상이 좀 더 따뜻해졌어.", type: '이상주의자' },
            { text: "당신의 전략 덕분에 일이 완벽하게 성공했어!", type: '전략가' },
            { text: "당신이 있어서 정말 위로가 되고 마음이 편안해져.", type: '치유자' },
            { text: "역시 당신이야, 가장 현실적인 해결책을 제시해 줬어.", type: '현실주의자' }
        ]
    }
];

const personalityTypes = {
    '모험가': {
        title: '모험가',
        description: '새로운 것을 찾아 떠나는 것을 두려워하지 않는 당신! 미지의 세계를 탐험하고 도전을 즐기는 진정한 모험가입니다. 당신의 쫀득쿠키는 언제나 예상 밖의 짜릿한 맛으로 가득할 거예요!',
        image: 'image/모험가.png'
    },
    '사색가': {
        title: '사색가',
        description: '깊이 있는 생각과 성찰을 즐기는 당신. 복잡한 문제도 차분하게 분석하고 본질을 꿰뚫어 보는 지혜로운 사색가입니다. 당신의 쫀득쿠키는 한입 베어 물 때마다 깊은 여운을 남길 거예요.',
        image: 'image/사색가.png'
    },
    '예술가': {
        title: '예술가',
        description: '평범함 속에서 아름다움을 발견하고 자신만의 색깔로 세상을 표현하는 당신! 자유로운 영혼과 넘치는 창의력으로 삶을 예술 작품처럼 만들어가는 예술가입니다. 당신의 쫀득쿠키는 눈과 입이 즐거운 컬러풀한 매력을 뽐낼 거예요.',
        image: 'image/예술가.png'
    },
    '이상주의자': {
        title: '이상주의자',
        description: '더 나은 세상을 꿈꾸고 선한 영향력을 펼치고자 하는 당신. 따뜻한 마음과 굳건한 신념으로 희망을 심어주는 이상주의자입니다. 당신의 쫀득쿠키는 달콤한 꿈처럼 행복한 에너지를 전해줄 거예요.',
        image: 'image/이상주의자.png'
    },
    '전략가': {
        title: '전략가',
        description: '목표를 향해 치밀하게 계획하고 실행하는 뛰어난 지략가인 당신! 냉철한 판단력과 탁월한 통찰력으로 어떤 상황에서도 최적의 길을 찾아내는 전략가입니다. 당신의 쫀득쿠키는 완벽한 조화로움을 선사할 거예요.',
        image: 'image/전략가.png'
    },
    '치유자': {
        title: '치유자',
        description: '타인의 아픔에 공감하고 위로를 건네는 따뜻한 마음의 소유자. 당신의 존재 자체로 주변을 편안하게 하고 힘을 주는 진정한 치유자입니다. 당신의 쫀득쿠키는 지친 마음을 어루만져 주는 부드러운 위안이 될 거예요.',
        image: 'image/치유자.png'
    },
    '현실주의자': {
        title: '현실주의자',
        description: '허황된 꿈보다는 현실을 직시하고 묵묵히 자신의 길을 걸어가는 당신. 안정과 실용성을 중요하게 여기며, 믿음직한 모습으로 주변에 든든한 버팀목이 되어주는 현실주의자입니다. 당신의 쫀득쿠키는 꾸밈없이 담백하고 진실된 맛을 보여줄 거예요.',
        image: 'image/현실주의자.png'
    }
};

// --- Functions ---
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

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
        '모험가': 0,
        '사색가': 0,
        '예술가': 0,
        '이상주의자': 0,
        '전략가': 0,
        '치유자': 0,
        '현실주의자': 0
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
        resultTitle.textContent = '결과를 찾을 수 없습니다.';
        resultDescription.textContent = '테스트를 다시 시도해주세요.';
        resultImage.src = 'image/쿠키.png'; // Use a default image for error
        resultImage.alt = '오류 이미지';
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
themeToggleBtn.addEventListener('click', toggleTheme);
themeToggleBtn.addEventListener('click', toggleTheme);

// Initial display and theme application
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    showScreen(startScreen);
});
