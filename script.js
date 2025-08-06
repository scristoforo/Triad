const quizForm = document.getElementById("quizForm");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("resultContainer");
const resultsDiv = document.getElementById("results");

const questions = [
  // MERCHANT
  {
    q: "When it comes to budgeting and managing money:",
    a: "merchant",
    options: [
      "I track spending, save/invest monthly, and know my financial goals.",
      "I manage bills and avoid debt, but lack structured tracking.",
      "I often feel uncertain or behind with finances."
    ]
  },
  {
    q: "Have you ever created and maintained a venture (business, side hustle, etc.)?",
    a: "merchant",
    options: [
      "Yes, with revenue and ongoing systems in place.",
      "I’ve tried, but it’s not stable or profitable yet.",
      "No, but I’m interested or unsure how to start."
    ]
  },
  {
    q: "When negotiating a salary, deal, or purchase:",
    a: "merchant",
    options: [
      "I plan, influence outcomes, and usually get favorable terms.",
      "I hold my own but feel anxious or uncertain.",
      "I avoid negotiation and often accept what's offered."
    ]
  },
  {
    q: "How do you plan your days/weeks?",
    a: "merchant",
    options: [
      "I use systems like calendars and time-blocking effectively.",
      "I try to plan but often react to what comes up.",
      "I feel disorganized and frequently overwhelmed."
    ]
  },
  {
    q: "How confident are you with tools like AI, automation, or crypto?",
    a: "merchant",
    options: [
      "I regularly use and experiment with these tools.",
      "I'm familiar but don’t use them deeply.",
      "I avoid them or feel intimidated."
    ]
  },
  {
    q: "How do you maintain professional or strategic relationships?",
    a: "merchant",
    options: [
      "I intentionally reach out and maintain connections.",
      "I occasionally check in or rely on chance.",
      "I struggle to build or keep them."
    ]
  },
  {
    q: "You're given limited time and budget to reach a goal. What do you do?",
    a: "merchant",
    options: [
      "Prioritize what matters and act quickly.",
      "Try to cover everything evenly.",
      "Get stuck overthinking or doing too much."
    ]
  },
  {
    q: "How do you respond to unexpected business or life problems?",
    a: "merchant",
    options: [
      "I stay calm and creatively solve the issue.",
      "I get stressed but manage to act.",
      "I freeze or avoid making a decision."
    ]
  },
  {
    q: "How do you make decisions with incomplete info?",
    a: "merchant",
    options: [
      "I calculate risk and act when confident enough.",
      "I hesitate and overanalyze.",
      "I usually avoid acting until it's too late."
    ]
  },
  {
    q: "How informed are you on financial, tech, or global trends?",
    a: "merchant",
    options: [
      "I follow trends regularly and act on them.",
      "I skim headlines but don’t apply much.",
      "I rarely follow or feel out of the loop."
    ]
  },

  // WARRIOR
  {
    q: "How would you rate your self-defense training?",
    a: "warrior",
    options: [
      "I train regularly and can defend myself confidently.",
      "I’ve done some training but not recently.",
      "I have little or no experience."
    ]
  },
  {
    q: "How do you rate your strength and physical conditioning?",
    a: "warrior",
    options: [
      "I'm strong, mobile, and train consistently.",
      "I'm somewhat active but inconsistent.",
      "I'm out of shape or untrained."
    ]
  },
  {
    q: "How do you handle high-stress moments?",
    a: "warrior",
    options: [
      "I stay calm, regulate my emotions, and respond wisely.",
      "I get overwhelmed but eventually recover.",
      "I often react impulsively or shut down."
    ]
  },
  {
    q: "When facing long-term pressure or setbacks:",
    a: "warrior",
    options: [
      "I push through with grit and focus.",
      "I push through, but it wears me down.",
      "I burn out or avoid hard things."
    ]
  },
  {
    q: "What do you do when someone violates your values or time?",
    a: "warrior",
    options: [
      "I assert clear boundaries respectfully.",
      "I try to maintain peace, even if uncomfortable.",
      "I often let it slide or avoid confrontation."
    ]
  },
  {
    q: "Are you ready for emergencies (first aid, disasters)?",
    a: "warrior",
    options: [
      "Yes, I’m trained and equipped.",
      "Somewhat — I know the basics.",
      "Not really — I’d panic or be unprepared."
    ]
  },
  {
    q: "Do you practice discomfort (cold exposure, rucking, fasting)?",
    a: "warrior",
    options: [
      "Yes, regularly — it's part of my training.",
      "Sometimes — inconsistently.",
      "Not at all."
    ]
  },
  {
    q: "Do you live by a personal code or defined values?",
    a: "warrior",
    options: [
      "Yes — it’s written and practiced.",
      "Sort of — it's in my head.",
      "No — I just try to do what's right."
    ]
  },
  {
    q: "Do you train or operate in a brotherhood/team?",
    a: "warrior",
    options: [
      "Yes — I train or serve with others regularly.",
      "Sometimes — loosely or occasionally.",
      "No — I mostly go solo."
    ]
  },
  {
    q: "How aware are you of threats or crises that might affect you?",
    a: "warrior",
    options: [
      "I follow and prepare for them seriously.",
      "I skim headlines but don't act on it.",
      "I avoid it — it stresses me out."
    ]
  },

  // NOBLE
  {
    q: "How well do you understand your emotions and others’?",
    a: "noble",
    options: [
      "I’m emotionally intelligent and empathetic.",
      "I'm aware but struggle to regulate.",
      "I’m emotionally distant or reactive."
    ]
  },
  {
    q: "How do you feel about public speaking or group leadership?",
    a: "noble",
    options: [
      "I'm confident and articulate.",
      "I manage, but it’s stressful.",
      "I avoid it or freeze up."
    ]
  },
  {
    q: "How do you respond when others are in conflict?",
    a: "noble",
    options: [
      "I help resolve and mediate.",
      "I stay out of it.",
      "I escalate or take sides."
    ]
  },
  {
    q: "How strategic is your long-term thinking?",
    a: "noble",
    options: [
      "I cast vision and plan far ahead.",
      "I have goals but no long view.",
      "I mostly live in the moment."
    ]
  },
  {
    q: "Do you mentor or guide others?",
    a: "noble",
    options: [
      "Yes — I actively mentor or parent.",
      "Sometimes — informally or rarely.",
      "No — I don’t feel qualified."
    ]
  },
  {
    q: "Do you regularly reflect on right/wrong or justice?",
    a: "noble",
    options: [
      "Yes — I read, study, and think deeply.",
      "Occasionally.",
      "Rarely or never."
    ]
  },
  {
    q: "How often do you engage in inner reflection or spiritual practice?",
    a: "noble",
    options: [
      "Often — journaling, prayer, meditation, etc.",
      "Sometimes — when needed.",
      "Rarely or never."
    ]
  },
  {
    q: "Do people naturally listen when you speak?",
    a: "noble",
    options: [
      "Yes — I carry presence and weight.",
      "Sometimes — depends on the group.",
      "Rarely — I feel ignored or unsure."
    ]
  },
  {
    q: "Do you understand legal or civic systems (laws, voting, etc.)?",
    a: "noble",
    options: [
      "Yes — I follow and understand them.",
      "Somewhat — I know the basics.",
      "Not really."
    ]
  },
  {
    q: "How often do you follow culture, ethics, or politics?",
    a: "noble",
    options: [
      "Regularly and thoughtfully.",
      "Occasionally — headlines only.",
      "Rarely or never."
    ]
  }
];

// Shuffle questions each time page loads
const shuffled = [...questions].sort(() => Math.random() - 0.5);

// Render questions
shuffled.forEach((item, index) => {
  const qBlock = document.createElement("div");
  qBlock.className = "question";
  qBlock.innerHTML = `
    <p><strong>Q${index + 1}.</strong> ${item.q}</p>
    ${item.options.map((opt, i) =>
      `<label><input type="radio" name="q${index}" value="${2 - i}" required> ${String.fromCharCode(65 + i)}. ${opt}</label>`).join("")}
  `;
  quizForm.appendChild(qBlock);
});

// Submit logic
submitBtn.addEventListener("click", () => {
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
