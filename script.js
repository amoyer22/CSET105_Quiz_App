let quiz = [
    {
        "question": "According to Google, what year was JavaScript invented?",
        "answers": [
            {"text": "2023", "correct": false},
            {"text": "1995", "correct": true},
            {"text": "1985", "correct": false},
            {"text": "2003", "correct": false}
        ]
    },
    {
        "question": "What's 2+2?",
        "answers": [
            {"text": "I don't know math", "correct": false},
            {"text": "undefined", "corrrect": false},
            {"text": "3", "correct": false},
            {"text": "4", "correct": true}
        ]
    },
    {
        "question": "Which of the following fruits are typically red?",
        "answers": [
            {"text": "Apple", "correct": true},
            {"text": "Orange", "corrrect": false},
            {"text": "Banana", "correct": false},
            {"text": "Watermelon", "correct": false}
        ]
    },
    {
        "question": "How long does it take for me to drive to school everyday?",
        "answers": [
            {"text": "12 years", "correct": false},
            {"text": "30 minutes", "corrrect": true},
            {"text": "15 minutes", "correct": false},
            {"text": "3 seconds", "correct": false}
        ]
    },
    {
        "question": "How much wood could a woodchuck chuck...",
        "answers": [
            {"text": "...What?", "correct": false},
            {"text": "...if a woodchuck could chuck wood?", "corrrect": true},
            {"text": "...700 pounds of wood, actually.", "correct": false},
            {"text": "...Who?", "correct": false}
        ]
    },
    {
        "question": "Amongst the following, which is my favorite social media app?",
        "answers": [
            {"text": "TikTok", "correct": false},
            {"text": "None, my internet never works", "corrrect": false},
            {"text": "YouTube", "correct": false},
            {"text": "Discord", "correct": true}
        ]
    },
    {
        "question": "What is my favorite number?",
        "answers": [
            {"text": "22", "correct": true},
            {"text": "33", "corrrect": false},
            {"text": "7", "correct": false},
            {"text": "8", "correct": false}
        ]
    },
    {
        "question": "What is my favorite word?",
        "answers": [
            {"text": "Boolean", "correct": false},
            {"text": "Sassafras", "corrrect": false},
            {"text": "Interesting", "correct": false},
            {"text": "Exit", "correct": true}
        ]
    },
    {
        "question": "What is my favorite color?",
        "answers": [
            {"text": "Hot pink", "correct": true},
            {"text": "A deep purple", "corrrect": false},
            {"text": "Literally just blue", "correct": false},
            {"text": "Bright neon green", "correct": false}
        ]
    },
    {
        "question": "How long did it take for me to think of questions for this?",
        "answers": [
            {"text": "These are questions?", "correct": false},
            {"text": "Who knows", "corrrect": false},
            {"text": "20 minutes", "correct": true},
            {"text": "All day", "correct": false}
        ]
    }
]

let currentPage = 0
let score = 0

let submitButton = document.getElementById("submitButton")
let questionName = document.getElementsByClassName("questionName")
let answerName = document.getElementById("answerName")

function submit(){
}