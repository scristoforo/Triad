const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("resultContainer");
const resultsDiv = document.getElementById("results");

const questions = [
  { q: "When it comes to budgeting and managing money:", a: "merchant" },
  { q: "Have you ever created and maintained a venture (business, side hustle, etc.)?", a: "merchant" },
  { q: "When negotiating a salary, deal, or purchase:", a: "merchant" },
  { q: "How do you plan your days/weeks?", a: "merchant" },
  { q: "How confident are you with leveraging modern tools (e.g., AI, automation, crypto)?", a: "merchant" },
  { q: "How do you maintain professional or strategic relationships?", a: "merchant" },
  { q: "You’re given a small budget and limited time to achieve a goal. What do you do?", a: "merchant" },
  { q: "How do you respond to sudden challenges?", a: "merchant" },
  { q: "When faced with a risky but important choice:", a: "merchant" },
  { q: "How regularly do you track trends in finance, tech, or global markets?", a: "merchant" },

  { q: "What’s your current level of physical self-defense training?", a: "warrior" },
  { q: "How would you rate your strength, mobility, and conditioning?", a: "warrior" },
  { q: "In high-stress situations, how do you respond?", a: "warrior" },
  { q: "How do you respond to long-term challenges or setbacks?", a: "warrior" },
  { q: "How do you respond when someone violates your time or values?", a: "warrior" },
  { q: "Are you trained or equipped to respond to a medical or disaster emergency?", a: "warrior" },
  { q: "Do you engage in voluntary physical discomfort (e.g., cold showers, fasting, rucking)?", a: "warrior" },
  { q: "Do you have a personal code or guiding values you live by?", a: "warrior" },
  { q: "Do you train or operate regularly in a team-based or brotherhood context?", a: "warrior" },
  { q: "Do you stay aware of social unrest, crises, or threats that may impact you or others?", a: "warrior" },

  { q: "In conflict or emotional situations:", a: "noble" },
  { q: "Are you comfortable speaking to groups or articulating your thoughts clearly?", a: "noble" },
  { q: "When others are in conflict, how do you respond?", a: "noble" },
  { q: "Do you regularly set long-term goals and think several steps ahead?", a: "noble" },
  { q: "Do you actively guide or nurture others in their growth?", a: "noble" },
  { q: "Do you regularly engage with questions of right/wrong, justice, and virtue?", a: "noble" },
  { q: "How often do you reflect deeply (prayer, journaling, meditation)?", a: "noble" },
  { q: "Do people tend to naturally listen when you speak or enter a room?", a: "noble" },
  { q: "Do you follow legal or civic systems and understand their structure?", a: "noble" },
  { q: "Do you track politics, culture, and current events thoughtfully?", a: "noble" }
];

// Shuffle questions
const shuffled = [...questions].sort(() => Math.random() - 0.5);

// Render each question and its answer options
shuffled.forEach((item, index) => {
  const qBlock = document.createElement("div");
  qBlock.className = "question";
  qBlock.innerHTML = `
    <p><strong>Q${index + 1}.</strong> ${item.q}</p>
    <label><input type="radio" name="q${index}" value="2" required> A. I strongly align with this</label>
    <label><input type="radio" name="q${index}" value="1"> B. I somewhat align with this</label>
    <label><input type="radio" name="q${index}" value="0"> C. I rarely or do not align with this</label>
  `;
  quizForm.appendChild(qBlock);
});

submitBtn.addEventListener("click", function () {
  const formData = new FormData(quizForm);
  if ([...formData.keys()].length < questions.length) {
    alert("Please answer all questions.");
    return;
  }

  const scores = { merchant: 0, warrior: 0, noble: 0 };

  shuffled.forEach((q, i) => {
    const val = parseInt(formData.get(`q${i}`));
    scores[q.a] += val;
  });

  resultContainer.classList.remove("hidden");
  resultsDiv.innerHTML = `
    <p>💼 <strong>Merchant:</strong> ${scores.merchant} / 20 – ${interpretScore(scores.merchant)}</p>
    <p>🗡️ <strong>Warrior:</strong> ${scores.warrior} / 20 – ${interpretScore(scores.warrior)}</p>
    <p>👑 <strong>Noble:</strong> ${scores.noble} / 20 – ${interpretScore(scores.noble)}</p>
  `;
});

function interpretScore(score) {
  if (score >= 16) return "Highly Developed";
  if (score >= 10) return "Developing";
  return "Underdeveloped";
}
