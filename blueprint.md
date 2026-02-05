# Project Blueprint: Dubai Jjonddeok Cookie Personality Test

## 1. Overview

This project implements a "Dubai Jjonddeok Cookie Personality Test" (두바이 쫀득쿠키 테스트). The test will feature approximately 10 questions designed to determine a user's personality type, presented with a "pretty and cute" aesthetic. The application will be a framework-less web project using HTML, CSS, and modern JavaScript (ES Modules, Web Components) as per Firebase Studio guidelines. It will be responsive and visually engaging, incorporating placeholder images to enhance the cute theme.

## 2. Design Principles & Features

### Aesthetic & UI/UX
-   **Theme:** "Pretty and Cute" inspired by the delicious and visually appealing Dubai Jjonddeok Cookies.
-   **Layout:** Clean, balanced, and mobile-responsive layout suitable for various screen sizes.
-   **Colors:** Vibrant and energetic color palette with a wide range of hues, perhaps pastels or bright, cheerful tones.
-   **Typography:** Expressive and relevant fonts, with varied sizes for emphasis (e.g., hero text, question headlines, answer options).
-   **Iconography:** Incorporate cute and intuitive icons where appropriate to enhance understanding and navigation.
-   **Visual Effects:** Subtle animations, multi-layered drop shadows, and gradients to create depth and a premium feel. Interactive elements (buttons, sliders) will have a "glow" effect on hover/focus.
-   **Images:** Placeholder images will be used initially, relevant to Dubai Jjonddeok Cookies or cute, whimsical themes. These will be appropriately sized and licensed (or clearly marked as placeholders).
-   **Interactivity:** Intuitive navigation, clear call-to-action buttons, and smooth transitions between questions and results.

### Core Functionality
-   **Question Flow:** Users will progress through approximately 10 multiple-choice questions.
-   **Personality Types:**
    *   **The Golden Delight (황금빛 기쁨):** Optimistic, cheerful, always looking for the bright side, brings joy to others.
    *   **The Soft Heart (부드러운 마음):** Empathetic, kind, gentle, supportive, values harmony.
    *   **The Spicy Adventurer (매콤한 모험가):** Bold, curious, loves new experiences, energetic, thrives on excitement.
    *   **The Rich & Deep Thinker (깊고 풍부한 사색가):** Introspective, thoughtful, appreciates depth, enjoys quiet contemplation.
-   **Questions and Scoring Logic (Draft):**
    Each question will have 3-4 options, with points assigned to answers that align with each personality type. The personality type with the highest score at the end will be the result.
    1.  **Question 1:** Imagine you're about to try a Dubai Jjonddeok Cookie for the first time. What's your first thought?
        *   A) "Wow, it looks so shiny and delicious! I bet it'll make my day brighter!" (Golden Delight +3)
        *   B) "I wonder what delightful textures and flavors await inside this gentle-looking treat." (Soft Heart +3)
        *   C) "Is there a new, unique flavor I haven't tried? I hope it surprises me!" (Spicy Adventurer +3)
        *   D) "I'm curious about its origin and the craftsmanship behind this exquisite dessert." (Rich & Deep Thinker +3)
    2.  **Question 2:** How do you typically approach a new challenge?
        *   A) With enthusiasm and a positive attitude, believing everything will work out. (Golden Delight +3)
        *   B) By considering everyone's feelings and seeking a harmonious solution. (Soft Heart +3)
        *   C) By diving in headfirst, ready to experiment and take risks. (Spicy Adventurer +3)
        *   D) By analyzing all aspects carefully before making a move. (Rich & Deep Thinker +3)
    3.  **Question 3:** What kind of gathering do you enjoy most?
        *   A) A lively party where everyone is laughing and having fun. (Golden Delight +3)
        *   B) A cozy get-together with close friends, sharing heartfelt conversations. (Soft Heart +3)
        *   C) An exciting event with new people and unexpected activities. (Spicy Adventurer +3)
        *   D) A quiet evening discussing interesting topics or enjoying a good book. (Rich & Deep Thinker +3)
    4.  **Question 4:** What's your favorite part about eating a delicious dessert?
        *   A) The immediate burst of happiness and sweet satisfaction. (Golden Delight +3)
        *   B) The comforting and tender feeling it leaves. (Soft Heart +3)
        *   C) The unique and surprising flavors that tingle your taste buds. (Spicy Adventurer +3)
        *   D) The complex layers of flavor that unfold with each bite. (Rich & Deep Thinker +3)
    5.  **Question 5:** How do you react to unexpected changes in plans?
        *   A) You quickly adapt and find the positive aspects of the new situation. (Golden Delight +3)
        *   B) You try to ensure everyone involved is comfortable with the new direction. (Soft Heart +3)
        *   C) You see it as an opportunity for an unplanned adventure. (Spicy Adventurer +3)
        *   D) You take a moment to re-evaluate and plan your next steps. (Rich & Deep Thinker +3)
    6.  **Question 6:** What do you value most in a friendship?
        *   A) Shared laughter and uplifting moments. (Golden Delight +3)
        *   B) Deep understanding and mutual support. (Soft Heart +3)
        *   C) Exciting new experiences and challenges together. (Spicy Adventurer +3)
        *   D) Meaningful conversations and intellectual stimulation. (Rich & Deep Thinker +3)
    7.  **Question 7:** What's your ideal way to relax after a long day?
        *   A) Doing something fun and light-hearted to boost your mood. (Golden Delight +3)
        *   B) Enjoying a peaceful and quiet activity, perhaps with a warm drink. (Soft Heart +3)
        *   C) Trying out a new hobby or exploring a new place. (Spicy Adventurer +3)
        *   D) Reflecting on the day's events and planning for tomorrow. (Rich & Deep Thinker +3)
    8.  **Question 8:** If you were a color, what would you be?
        *   A) Bright Yellow or Radiant Orange. (Golden Delight +3)
        *   B) Soft Pink or Calming Blue. (Soft Heart +3)
        *   C) Fiery Red or Electric Green. (Spicy Adventurer +3)
        *   D) Deep Purple or Earthy Brown. (Rich & Deep Thinker +3)
    9.  **Question 9:** What kind of music do you prefer?
        *   A) Upbeat pop or cheerful instrumental. (Golden Delight +3)
        *   B) Calming melodies or gentle ballads. (Soft Heart +3)
        *   C) Energetic rock or adventurous world music. (Spicy Adventurer +3)
        *   D) Thought-provoking classical or soulful jazz. (Rich & Deep Thinker +3)
    10. **Question 10:** What's your motto in life?
        *   A) "Every day is a gift!" (Golden Delight +3)
        *   B) "Kindness makes the world go round." (Soft Heart +3)
        *   C) "Life's an adventure, live it to the fullest!" (Spicy Adventurer +3)
        *   D) "Understand deeply, live meaningfully." (Rich & Deep Thinker +3)
-   **Scoring:** A scoring mechanism will tally user choices to determine the final personality type.
-   **Results Page:** Displays the determined personality type, a detailed description, and a matching image. The logic for this is implemented in `main.js`'s `showResult` function.
-   **Sharing:** An option to share results via `navigator.share` (for supported browsers) or an alert fallback, generating a shareable text snippet based on the user's personality result. This is handled by the `shareResult` function in `main.js`.

### Technical Implementation
-   **HTML:** `index.html` as the main entry point.
-   **CSS:** `style.css` utilizing modern CSS features (Container Queries, Cascade Layers, Logical Properties, CSS Variables) for maintainable and responsive design.
-   **JavaScript:** `main.js` using ES Modules, Async/Await, and modern syntax.
-   **Web Components:** Custom Elements, Shadow DOM, and HTML Templates (`<template>`, `<slot>`) will be used for encapsulating reusable UI components (e.g., question cards, result display).

## 3. Current Plan & To-Do List

### Goal
To create the initial structure, design, and logic for the "Dubai Jjonddeok Cookie Personality Test."

### Steps
1.  **[in_progress] Create blueprint.md file with the project overview, design principles, and initial plan.** (This step is currently being executed)
2.  **[pending] Design the test flow: define personality types, 10 questions, and answer options with scoring logic.**
3.  **[pending] Implement the basic HTML structure (index.html) for the test, including placeholders for questions, answers, and results.**
4.  **[pending] Develop the CSS (style.css) to achieve a "pretty and cute" aesthetic, ensuring responsiveness.**
5.  **[pending] Write JavaScript (main.js) for handling test logic: displaying questions, processing answers, calculating results, and navigating between screens.**
6.  **[pending] Implement Web Components for reusable UI elements like buttons or question cards.**
7.  **[pending] Generate placeholder image URLs or descriptions for visual elements.**
8.  **[pending] Integrate results display with personality descriptions and a share option.**
9.  **[pending] Refine UI/UX for a polished and interactive experience.**
