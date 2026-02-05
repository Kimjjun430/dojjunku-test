# Project Blueprint: Dubai Jjonddeok Cookie Personality Test

## 1. Overview

This project implements a "두바이 쫀득쿠키 성격 테스트" (Dubai Jjonddeok Cookie Personality Test) specifically targeting a **Korean audience**. The test features 10 questions designed to determine a user's personality type, presented with a "pretty and cute" aesthetic. The application is a framework-less web project using HTML, CSS, and modern JavaScript (ES Modules, Web Components) as per Firebase Studio guidelines. It is responsive and visually engaging, incorporating placeholder images that will be eventually replaced with cute cookie icons or suitable generated images to enhance the cute theme. Users can input their name, which will be integrated into the test results.

## 2. Design Principles & Features

### Aesthetic & UI/UX
-   **Theme:** "Pretty and Cute" inspired by the delicious and visually appealing Dubai Jjonddeok Cookies, tailored for a Korean audience.
-   **Layout:** Clean, balanced, and mobile-responsive layout suitable for various screen sizes.
-   **Colors:** Vibrant and energetic color palette with a wide range of hues, perhaps pastels or bright, cheerful tones.
-   **Typography:** Expressive and relevant fonts, with varied sizes for emphasis (e.g., hero text, question headlines, answer options). Specifically uses 'Nanum Gothic Coding' for a clean and cute Korean-friendly look.
-   **Iconography:** Incorporate cute and intuitive icons where appropriate to enhance understanding and navigation.
-   **Visual Effects:** Subtle animations, multi-layered drop shadows, and gradients to create depth and a premium feel. Interactive elements (buttons, sliders) will have a "glow" effect on hover/focus.
-   **Images:** Currently uses `picsum.photos` seeded URLs as thematic placeholders. These are intended to be replaced with actual cute cookie icons or custom-generated images relevant to the personality types and the overall theme.
-   **Interactivity:** Intuitive navigation, clear call-to-action buttons, and smooth transitions between questions and results. Includes a name input field on the start screen.

### Core Functionality
-   **Questions and Results in Korean:** All questions, options, and personality descriptions are fully translated into Korean for the target audience.
-   **Name Input:** Users can enter their name on the start screen, which is then used in the personalized result display and share message.
-   **Question Flow:** Users will progress through 10 multiple-choice questions.
-   **Personality Types:**
    *   **황금빛 기쁨 (The Golden Delight):** 낙천적이고 쾌활하며 항상 삶의 밝은 면을 봅니다. 당신의 긍정적인 에너지는 주변 사람들에게 행복을 가져다줍니다. 마치 황금빛 쫀득쿠키처럼, 어디서든 빛나고 달콤함을 선사하는 존재입니다!
    *   **부드러운 마음 (The Soft Heart):** 공감 능력이 뛰어나고 친절하며 온화합니다. 주변 사람들을 지지하고 조화를 중요하게 생각하는 당신의 마음은 부드러운 쫀득쿠키 속살처럼 따뜻하고 포근합니다.
    *   **매콤한 모험가 (The Spicy Adventurer):** 당신은 대담하고 호기심이 많으며 새로운 경험을 사랑합니다. 에너지가 넘치고 흥미진진한 도전을 즐기는 당신은 예상치 못한 맛으로 가득 찬 매콤한 쫀득쿠키와 같습니다. 늘 새로운 모험을 찾아 떠나죠!
    *   **깊고 풍부한 사색가 (The Rich & Deep Thinker):** 당신은 내성적이고 사려 깊으며 깊이 있는 것을 추구합니다. 조용한 사색을 즐기며 사물의 본질을 파악하려 노력하는 당신은 풍부하고 깊은 맛을 지닌 쫀득쿠키처럼, 알면 알수록 매력적인 존재입니다.
-   **Scoring:** A scoring mechanism tallies user choices to determine the final personality type.
-   **Results Page:** Displays the determined personality type, a detailed description, and a matching image. The result title is personalized with the user's name (e.g., "홍길동님, 당신은 [결과]!"). The logic for this is implemented in `main.js`'s `showResult` function.
-   **Sharing:** An option to share results via `navigator.share` (for supported browsers) or an alert fallback, generating a shareable text snippet personalized with the user's name and personality result. This is handled by the `shareResult` function in `main.js`.

### Technical Implementation
-   **HTML (`index.html`):** Main entry point, updated to include a name input field (`id="user-name"`) and a fully dynamic `h2` element (`id="result-title"`) for displaying personalized results.
-   **CSS (`style.css`):** Utilizes modern CSS features, responsive design, and now includes styling for the new name input field. The `font-family` has been updated to 'Nanum Gothic Coding'.
-   **JavaScript (`main.js`):** Uses ES Modules, Async/Await, and modern syntax. All questions and personality data are translated. The `startTest` function includes validation for the name input. The `showResult` and `shareResult` functions are modified to incorporate the `userName` for personalized output.
-   **Web Components (`question-card.js`):** Custom Elements and Shadow DOM are used for encapsulating reusable question cards.

## 3. Current Plan & To-Do List

### Goal
To finalize the "두바이 쫀득쿠키 성격 테스트" implementation with all requested features and aesthetic refinements.

### Steps
1.  **[completed] Translate existing questions and personality results in `main.js` to Korean.**
2.  **[completed] Update `index.html` to include a name input field on the start screen.**
3.  **[completed] Modify `main.js` to get the user's name and incorporate it into the results.**
4.  **[completed] Find suitable cute cookie image URLs for all visual elements (main, personality types, error) or refine descriptions of what images should be.**
5.  **[completed] Update `index.html` and `main.js` with the chosen image URLs.**
6.  **[in_progress] Update `blueprint.md` to reflect all these changes.** (This step is currently being executed)
