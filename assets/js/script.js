const messages = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "Your only limit is the amount of action you take. So go out there and take it!",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Believe you can and you're halfway there.",
    "Start where you are. Use what you have. Do what you can.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this!",
    "It does not matter how slowly you go as long as you do not stop.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "If you want to achieve greatness, stop asking for permission.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "The only way to do something great in life is to risk being uncomfortable and trying something new.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "Don't let yesterday take up too much of today.",
    "Believe in your dreams and they may come true; believe in yourself and they will come true.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "In order to succeed, we must first believe that we can.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    "You miss 100% of the shots you don't take.",
    "If you're going through hell, keep going.",
    "The best way to predict the future is to create it.",
    "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
    "Believe in yourself, take on your challenges, and then one day you will look back on your life with pride.",
    "The only thing we have to fear is fear itself.",
    "No matter how hard the past, you can always begin again.",
    "You can't build a reputation on what you are going to do.",
    "To be successful, you have to have your heart in your business and your business in your heart.",
    "Strive not to be a success, but rather to be of value.",
    "Success is not the result of spontaneous combustion. You must set yourself on fire.",
    "The best revenge is massive success.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Don't let the fear of failure hold you back. Use it as fuel to drive you towards success.",
    "Believe in your ability to learn and grow, and you will achieve things you never thought possible."
]

const generateMessage = () => {
    let message;
    const randomNumber = Math.floor(Math.random() * messages.length);
    message = messages.splice(randomNumber, 1);

    const messageSpot = document.querySelector('.container-msg');
    const button = document.querySelector('button');

    messageSpot.innerHTML = message;
    button.innerHTML = "Another one!";

    if(messages.length == 0) {
        button.style.display = "none";
        messageSpot.innerHTML = "You have reached the last option! Reloading the page in 5 seconds...";

        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }
}