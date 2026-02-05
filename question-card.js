// question-card.js

class QuestionCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.questionData = null; // To store question and options
    }

    static get observedAttributes() {
        return ['question-text', 'question-number'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    set options(value) {
        this.questionData = {
            question: this.getAttribute('question-text'),
            number: this.getAttribute('question-number'),
            options: value
        };
        this.render();
    }

    render() {
        if (!this.questionData) {
            return;
        }

        this.shadowRoot.innerHTML = `
            <style>
                /* Internal styling for the Web Component, similar to main style for consistency */
                :host {
                    display: block;
                    background-color: var(--secondary-color, #FFDAB9); /* Default if not defined globally */
                    padding: var(--spacing-medium, 20px);
                    border-radius: var(--border-radius-soft, 15px);
                    box-shadow: 0 8px 25px var(--shadow-medium, rgba(0, 0, 0, 0.15));
                    margin-bottom: var(--spacing-medium, 20px);
                }
                h2 {
                    color: white; /* Using white for question text */
                    font-size: 1.8em;
                    margin-bottom: var(--spacing-medium, 20px);
                }
                .question-number {
                    font-size: 1.1em;
                    color: white;
                    margin-bottom: 15px;
                    opacity: 0.8;
                }
                #answer-options {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .answer-btn {
                    background-color: var(--card-background, #FFFFFF);
                    color: var(--text-color, #333);
                    border: 2px solid var(--primary-color, #FFB6C1);
                    border-radius: var(--border-radius-soft, 15px);
                    padding: 15px;
                    font-size: 1.1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 10px var(--shadow-light, rgba(0, 0, 0, 0.1));
                    text-align: left;
                    width: 100%; /* Ensure buttons take full width */
                    box-sizing: border-box; /* Include padding and border in the element's total width and height */
                }
                .answer-btn:hover {
                    background-color: var(--accent-color, #B0E0E6);
                    color: white;
                    border-color: var(--accent-color, #B0E0E6);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px var(--shadow-medium, rgba(0, 0, 0, 0.15));
                }
                .answer-btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 8px var(--shadow-light, rgba(0, 0, 0, 0.1));
                }
                /* Responsive adjustments for component */
                @media (max-width: 768px) {
                    h2 { font-size: 1.5em; }
                    .answer-btn { font-size: 1em; padding: 12px; }
                }
                @media (max-width: 480px) {
                    h2 { font-size: 1.3em; }
                    .answer-btn { font-size: 0.9em; padding: 10px; }
                }
            </style>
            <p class="question-number">Question <span id="current-question-num-shadow">${this.questionData.number}</span> / 10</p>
            <h2 id="question-text-shadow">${this.questionData.question}</h2>
            <div id="answer-options-shadow">
                <!-- Answer buttons will be dynamically inserted here -->
            </div>
        `;
        const answerOptionsDivShadow = this.shadowRoot.getElementById('answer-options-shadow');
        this.questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.textContent = option.text;
            button.dataset.type = option.type;
            button.addEventListener('click', () => this.handleAnswerClick(option.type));
            answerOptionsDivShadow.appendChild(button);
        });
    }

    handleAnswerClick(type) {
        this.dispatchEvent(new CustomEvent('answer-selected', {
            detail: { type },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('question-card', QuestionCard);
