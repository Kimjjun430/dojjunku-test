# Project Blueprint: 두바이 쫀득쿠키 성격 테스트

## 1. Overview

This project implements a "두바이 쫀득쿠키 성격 테스트" (Dubai Jjonddeok Cookie Personality Test) specifically targeting a **Korean audience**. The test features 10 questions designed to determine a user's personality type, presented with a "파스텔톤의 귀여운 캐릭터 테스트 웹사이트, 동글동글하고 스티커 같은 일러스트 스타일"의 미학. The application is a framework-less web project using HTML, CSS, and modern JavaScript (ES Modules, Web Components). It is responsive and visually engaging, incorporating user-provided cute character images. Users can input their name, which will be integrated into the test results. A **dark mode** feature has been added to enhance user experience.

## 2. Design Principles & Features

### Aesthetic & UI/UX
-   **Theme:** "파스텔톤의 귀여운 캐릭터 테스트 웹사이트" - 동글동글하고 스티커 같은 일러스트 스타일.
-   **Layout:** Clean, balanced, and mobile-responsive layout suitable for various screen sizes, with an emphasis on soft, rounded elements. Enhanced text placement with refined line heights and margins for a cleaner look.
-   **Colors:** Utilizes a refreshed pastel color palette for a trendy and professional look. Supports **Dark Mode** with a distinct dark color palette.
-   **Typography:** Expressive and relevant fonts, with varied sizes for emphasis (e.g., hero text, question headlines, answer options). Uses 'Nanum Gothic Coding' for a clean, cute, and Korean-friendly look. Text colors are carefully chosen for readability against both light and dark backgrounds. The `word-break: keep-all;` property is applied to the main title (`header h1`) to ensure proper Korean word wrapping.
-   **Iconography:** Cute and intuitive icons will be used where appropriate.
-   **Visual Effects:** Subtle animations, multi-layered drop shadows, and gradients to create depth and a lifted "sticker-like" feel. Interactive elements (buttons, inputs) will have soft glow effects on hover/focus.
-   **Images:** Character images are provided by the user in the `image/` folder.
    *   `image/쿠키.png`: Main cookie image for the start screen.
    *   `image/모험가.png`, `image/사색가.png`, `image/예술가.png`, `image/이상주의자.png`, `image/전략가.png`, `image/치유자.png`, `image/현실주의자.png`: Character images for each personality type.
-   **Interactivity:** Intuitive navigation, clear call-to-action buttons, and smooth transitions between questions and results. Includes a name input field on the start screen. A **theme toggle button** is added to switch between light and dark modes.

### Core Functionality
-   **Questions and Results in Korean:** All questions, options, and personality descriptions are fully translated into Korean for the target audience.
-   **Name Input:** Users can enter their name on the start screen, which is then used in the personalized result display and share message.
-   **Question Flow:** Users will progress through 10 multiple-choice questions, specifically designed to differentiate between the 7 new personality types.
-   **New Personality Types:** (7 types, Korean descriptions below)
    *   **모험가 (Adventurer):** `image/모험가.png` - 새로운 것을 찾아 떠나는 것을 두려워하지 않는 당신! 미지의 세계를 탐험하고 도전을 즐기는 진정한 모험가입니다. 당신의 쫀득쿠키는 언제나 예상 밖의 짜릿한 맛으로 가득할 거예요!
    *   **사색가 (Thinker):** `image/사색가.png` - 깊이 있는 생각과 성찰을 즐기는 당신. 복잡한 문제도 차분하게 분석하고 본질을 꿰뚫어 보는 지혜로운 사색가입니다. 당신의 쫀득쿠키는 한입 베어 물 때마다 깊은 여운을 남길 거예요.
    *   **예술가 (Artist):** `image/예술가.png` - 평범함 속에서 아름다움을 발견하고 자신만의 색깔로 세상을 표현하는 당신! 자유로운 영혼과 넘치는 창의력으로 삶을 예술 작품처럼 만들어가는 예술가입니다. 당신의 쫀득쿠키는 눈과 입이 즐거운 컬러풀한 매력을 뽐낼 거예요.
    *   **이상주의자 (Idealist):** `image/이상주의자.png` - 더 나은 세상을 꿈꾸고 선한 영향력을 펼치고자 하는 당신. 따뜻한 마음과 굳건한 신념으로 희망을 심어주는 이상주의자입니다. 당신의 쫀득쿠키는 달콤한 꿈처럼 행복한 에너지를 전해줄 거예요.
    *   **전략가 (Strategist):** `image/전략가.png` - 목표를 향해 치밀하게 계획하고 실행하는 뛰어난 지략가인 당신! 냉철한 판단력과 탁월한 통찰력으로 어떤 상황에서도 최적의 길을 찾아내는 전략가입니다. 당신의 쫀득쿠키는 완벽한 조화로움을 선사할 거예요.
    *   **치유자 (Healer):** `image/치유자.png` - 타인의 아픔에 공감하고 위로를 건네는 따뜻한 마음의 소유자. 당신의 존재 자체로 주변을 편안하게 하고 힘을 주는 진정한 치유자입니다. 당신의 쫀득쿠키는 지친 마음을 어루만져 주는 부드러운 위안이 될 거예요.
    *   **현실주의자 (Realist):** `image/현실주의자.png` - 허황된 꿈보다는 현실을 직시하고 묵묵히 자신의 길을 걸어가는 당신. 안정과 실용성을 중요하게 여기며, 믿음직한 모습으로 주변에 든든한 버팀목이 되어주는 현실주의자입니다. 당신의 쫀득쿠키는 꾸밈없이 담백하고 진실된 맛을 보여줄 거예요.
-   **Scoring:** A scoring mechanism will tally user choices to determine the final personality type. This logic is updated to handle 7 personality types.
-   **Results Page:** Displays the determined personality type, a detailed description, and the corresponding character image. The result title is personalized with the user's name (e.g., "홍길동님, 당신은 [결과]!").
-   **Sharing:** An option to share results via `navigator.share` (for supported browsers) or an alert fallback, generating a shareable text snippet personalized with the user's name and personality result.
-   **Dark Mode:** Users can toggle between light and dark themes using a dedicated button, with their preference saved in local storage and applied on page load.

### Technical Implementation
-   **HTML (`index.html`):** Main entry point, updated for image paths, name input, dynamic result title, and includes a theme toggle button in the header.
-   **CSS (`style.css`):** Overhauled to implement the new pastel/sticker aesthetic, including an updated color palette, more rounded elements, soft shadow effects, and refined text placement/typography. Includes specific styles for dark mode using `[data-theme='dark']` attributes. The `word-break: keep-all;` property is added to `header h1` to improve Korean title wrapping.
-   **JavaScript (`main.js`):** Updated with new personality types, their descriptions, image paths, and revised question/scoring logic for 7 types. Handles name input, validation, and incorporates name into results/sharing. Includes comprehensive logic for dark mode toggle, saving user preference to `localStorage`, and applying the theme on page load.
-   **Web Components (`question-card.js`):** Custom Elements for reusable question cards, compatible with the new aesthetic and updated data structure.

## 3. Current Plan & To-Do List

### Goal
To implement the "두바이 쫀득쿠키 성격 테스트" with 7 new character-based personality types, integrate user-provided images, apply a pastel, sticker-like aesthetic, and enhance overall UI/UX.

### Steps
1.  **[completed] Refine text placement for cleaner layout.**
2.  **[completed] Enhance typography with cuter font choices and colors.**
3.  **[completed] Update `blueprint.md` to reflect all these new changes.**
4.  **[completed] Final review and testing of the application.**