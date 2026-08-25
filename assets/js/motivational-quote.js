// Picks a random motivational quote on every page load.
(function () {
    var quotes = [
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { text: "Patience is not simply the ability to wait, it's how we behave while we're waiting.", author: "Joyce Meyer" },
        { text: "The depths reward those who move slowly and look closely.", author: "Anonymous Diver" },
        { text: "Do not wait for the perfect moment. Take the moment and make it perfect.", author: "Unknown" },
        { text: "Every accomplishment starts with the decision to try.", author: "John F. Kennedy" },
        { text: "Calm water never made a skilled sailor.", author: "Unknown" },
        { text: "Small, consistent care preserves what haste destroys.", author: "Unknown" },
        { text: "What lies beneath the surface is worth the effort to uncover.", author: "Unknown" },
        { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" }
    ];

    function renderRandomQuote() {
        var container = document.getElementById('motivational-quote');
        if (!container) return;
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        var textEl = container.querySelector('.quote-text');
        var authorEl = container.querySelector('.quote-author');
        if (textEl) textEl.textContent = '\u201C' + quote.text + '\u201D';
        if (authorEl) authorEl.textContent = '\u2014 ' + quote.author;
    }

    document.addEventListener('DOMContentLoaded', renderRandomQuote);
})();
