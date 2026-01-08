const quotes = [
  {
    id: 1,
    quote:
      "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
    author: "Franklin D. Roosevelt",
    category: "Courage",
  },
  {
    id: 2,
    quote:
      "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "Change",
  },
  {
    id: 3,
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Ian Maclaren",
    category: "Kindness",
  },
  {
    id: 4,
    quote: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh",
    category: "Mindfulness",
  },
  {
    id: 5,
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    category: "Creativity",
  },
  {
    id: 6,
    quote:
      "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are.",
    author: "Maya Angelou",
    category: "Resilience",
  },
  {
    id: 7,
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    category: "Action",
  },
  {
    id: 8,
    quote: "I'm not superstitious, but I am a little stitious.",
    author: "Michael Scott",
    category: "Humor",
  },
  {
    id: 9,
    quote:
      "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
    category: "Self-Love",
  },
  {
    id: 10,
    quote:
      "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.",
    author: "Stephen Hawking",
    category: "Curiosity",
  },
];

const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  para.innerHTML = randomQuote.quote;
});
