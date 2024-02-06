const acceptedQuotes = [
  "You are my sun, my moon, and all of my stars.",
  "You are my today and all of my tomorrows.",
  "Life with you is like a dream, and I never want to wake up.",
  "I love you too.",
  "You Are My Special :)",
  "You are the best thing that's ever been mine.",
];

const proposalQuotes = [
  "Will you be my partner in crime?",
  "You're my density. I mean, my destiny.",
  "You're the one that I want. Ooh, ooh, ooh.",
  "Do You Love Me?",
];

const handleRejectHover = () => {
  const button = document.getElementById("no");
  button.style.position = "absolute";
  button.style.top = `${Math.random() * 200 + 150}px`;
  button.style.left = `${Math.random() * 200 + 150}px`;
};

const handleReject = () => {
  const image = document.getElementsByClassName("image")[0];
  const text = document.getElementsByClassName("text")[0];
  text.innerHTML = "I know you are kidding, so try again!";
  image.setAttribute("src", "./gifs/whyNoLove.gif");
  setTimeout(() => {
    image.setAttribute("src", "./gifs/pliss.gif");
    text.innerHTML =
      proposalQuotes[
        (Number(`${Math.random()}`[4]) * Number(`${Math.random()}`[5])) % proposalQuotes.length || 2
      ];
  }, 3000);
};

const handleAccept = () => {
  const image = document.getElementsByClassName("image")[0];
  const text = document.getElementsByClassName("text")[0];
  text.innerHTML =
    acceptedQuotes[
        (Number(`${Math.random()}`[4]) * Number(`${Math.random()}`[5])) % acceptedQuotes.length  || 2
    ];
  image.setAttribute("src", "./gifs/kiss.gif");
};
