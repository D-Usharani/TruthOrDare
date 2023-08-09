const addPlayerButton = document.getElementById("addPlayerButton");

 

const inputContainer = document.getElementById("inputContainer");

 

const playerNameInput = document.getElementById("playerName");

 

const addToTeamButton = document.getElementById("addToTeamButton");

 

const playButton = document.getElementById("playButton");

 

const refreshButton = document.getElementById("refreshButton");

 

const truthButton = document.getElementById("truthButton");

 

const dareButton = document.getElementById("dareButton");

 

const resultContainer = document.getElementById("result");

const playerArray = [];

 

let selectedPlayerIndex = null;

 

let truthMessage = "";

 

let dareMessage = "";

 

let selectedPlayerName = "";

addPlayerButton.addEventListener("click", () => {

 

  inputContainer.style.display = "block";

 

  updateResult();

 

});

addToTeamButton.addEventListener("click", () => {

 

  const playerName = playerNameInput.value;

 

  if (playerName) {

 

    playerArray.push(playerName);

 

    playerNameInput.value = "";

 

    updateResult();

 

  }

 

});

playButton.addEventListener("click", () => {

  if (playerArray.length > 0) {

    selectedPlayerIndex = Math.floor(Math.random() * playerArray.length);

    selectedPlayerName = playerArray[selectedPlayerIndex];

 

    truthMessage = getRandomTruth();

    dareMessage = getRandomDare();

 

    // Check if either truth or dare message is available

    if (truthMessage || dareMessage) {

      refreshButton.style.display = "block";

      truthButton.style.display = "block";

      dareButton.style.display = "block";

 

      // Enable truth and dare buttons if messages are available

      truthButton.disabled = !truthMessage;

      dareButton.disabled = !dareMessage;

 

      playButton.disabled = true; // Disable the Play button initially

      resultContainer.textContent = `Selected Player: ${selectedPlayerName}`;

    } else {

      resultContainer.textContent = "Please select Truth or Dare.";

    }

  } else {

    resultContainer.textContent = "No players added yet.";

  }

});

 

// Add event listeners for the Truth and Dare buttons to enable the Play button

truthButton.addEventListener("click", () => {

  playButton.disabled = false;

});

 

dareButton.addEventListener("click", () => {

  playButton.disabled = false;

});

truthButton.addEventListener("click", () => {

 

  dareButton.disabled = true;

 

  resultContainer.innerHTML = `

 

      Selected Player: ${selectedPlayerName}<br>

 

      Truth: ${truthMessage}`;

 

});

dareButton.addEventListener("click", () => {

 

  truthButton.disabled = true;

 

  resultContainer.innerHTML = `

 

      Selected Player: ${selectedPlayerName}<br>

 

      Dare: ${dareMessage}

 

    `;

 

});

refreshButton.addEventListener("click", () => {

 

  location.reload(); // Reload the page to reset the game

 

});

 

function updateResult() {

 

  if (playerArray.length > 0) {

 

    playButton.style.display = "block";

 

    playButton.disabled = playerArray.length <= 1;

 

  } else {

 

    playButton.style.display = "none";

 

    refreshButton.style.display = "none";

 

    truthButton.style.display = "none";

 

    dareButton.style.display = "none";

 

  }

 

}

 

function getRandomTruth() {

  const truthOptions = [

    "What's the most daring thing you've ever done?",

    "Describe your ideal vacation destination.",

    "Share a funny childhood memory.",

    "If you could meet any celebrity, who would it be and why?",

    "What's your go-to comfort food?",

    "What's a skill you wish you had?",

    "Have you ever had a paranormal experience?",

    "What's your favorite way to unwind after a long day?",

    "Describe a moment when you felt truly proud of yourself.",

    "If you could time travel, where and when would you go?",

    "What's a book that has had a significant impact on you?",

    "Share a dream you've always wanted to pursue.",

    "What's the best piece of advice you've received about relationships?",

    "If you could have any job for a day, what would it be?",

    "Describe a personal goal you're currently working on.",

    "What's your favorite guilty pleasure?",

    "Share a hobby or interest that not many people know about.",

    "If you had one day left to live, how would you spend it?",

    "What's the most spontaneous thing you've ever done?",

    "Describe a lesson you've learned from a past mistake.",

    "If you could have dinner with any historical figure, who would it be?",

    "What's your most embarrassing moment from high school?",

    "Share a favorite memory from your childhood.",

    "What's something you've always wanted to learn?",

    "Describe your idea of a perfect day.",

    "If you could switch lives with someone for a week, who would it be?",

    "What's a movie or TV show you can watch over and over again?",

    "Share a moment when you felt completely out of your comfort zone.",

    "What's a song that always makes you emotional?",

    "If you could donate a large sum of money to any cause, what would it be?",

    "Describe a time when you faced a fear and overcame it.",

    "What's a place you've traveled to that left a lasting impression on you?",

    "Share a unique or quirky talent you have.",

    "If you could go back in time and change one decision, what would it be?",

    "What's the best compliment you've ever received?",

    "Describe a challenging experience that made you stronger.",

    "What's your favorite way to spend a lazy weekend?",

    "If you could be famous for one thing, what would it be?",

    "Share a moment when you felt truly inspired.",

    "What's a book or movie that changed your perspective on life?",

    "Describe a favorite childhood game or activity.",

    "If you could have any animal as a pet, what would it be?",

    "What's your favorite way to de-stress?",

    "Share a dream you've had that you'll never forget.",

    "If you could have any fictional character's qualities, who would you choose?",

    "Describe a valuable life lesson you've learned from a family member.",

    "What's a hidden talent you have that surprises people?",

    "If you could visit any time period, past or future, where would you go?",

    "Share a memorable experience from a concert or live event.",

    "What's something you've always wanted to ask your parents?",

    "Describe a moment when you were unexpectedly brave.",

    "If you could trade lives with someone for a day, who would it be and why?",

    "What's a cause or issue that you're passionate about?",

    "Share a funny or awkward dating experience.",

    "Describe a time when you had to make a difficult decision.",

    "If you could have any job in the world, regardless of qualifications, what would it be?",

    "What's a hobby you've been wanting to take up?",

    "Share a moment when you felt genuinely happy.",

    "Describe a lesson you learned from a failure or setback.",

    "If you could have any superpower, what would it be?",

    "What's a quote or saying that resonates with you?",

    "Share a memory from a major life event, like a wedding or graduation.",

    "Describe a time when you pushed yourself beyond your limits.",

    "If you could spend a day with any fictional character, who would it be?",

    "What's a cause that you believe is worth fighting for?",

    "Share a moment when you felt genuinely connected with nature.",

    "Describe a time when you went out of your way to help someone else.",

    "If you could have a conversation with any animal, what would it be?",

    "What's a decision you made that you regret, and what did you learn from it?",

    "Share a moment when you felt a strong sense of accomplishment.",

    "Describe a lesson you learned from a past relationship.",

    "If you could travel anywhere in the world, all expenses paid, where would you go?",

    "What's a skill you wish you could teach others?",

    "Share a moment when you felt truly humbled.",

    "Describe a time when you felt a strong sense of community.",

    "If you could have any talent instantly, what would it be?",

    "What's a movie that always makes you cry?",

    "Share a memory from a childhood holiday or celebration.",

    "Describe a time when you stood up for something you believed in.",

    "If you could witness any historical event, what would it be?",

    "What's a skill you admire in others and wish you had?",

    "Share a moment when you felt truly inspired by someone's actions.",

    "Describe a time when you learned a valuable lesson from a mistake.",

    "If you could instantly gain fluency in any language, which one would you choose?",

    "What's a skill or talent that you're proud of mastering?",

    "Share a moment when you had to step out of your comfort zone to grow.",

    "Describe a memorable encounter you've had with a stranger.",

    "If you could have a conversation with any historical figure, who would it be and why?",

    "What's a personal achievement that you often reflect on with pride?",

    "Share a story of a time when you made a positive impact on someone's life.",

    "Describe a time when you were pleasantly surprised by an unexpected turn of events.",

    "If you could visit any country for a month, where would you go?",

    "What's something you've always wanted to do but haven't had the chance?",

    "Share a moment when you felt a strong connection with a work of art.",

    "Describe a time when you felt like you were in the presence of something magical.",

    "If you could choose any career, regardless of qualifications, what would it be?",

    "What's a dream you've had that made a lasting impression on you?",

    "Share a moment when you felt truly content and at peace.",

 

 

    "What's a lesson you've learned from a moment of unexpected joy?",

    "Share a story of a time when you illuminated someone's path with your guidance.",

    "Describe a moment when you felt a strong connection to the universe's grand design."

  ];

 

 

  return truthOptions[Math.floor(Math.random() * truthOptions.length)];

}

 

 

 

function getRandomDare() {

  const dareOptions = [

    "Pretend to passionately confess your dream about someone in the room, complete with dramatic details.",

    "Stand up and perform a silly dance in a public place for at least 30 seconds.",

    "Send a random text to a friend, saying something cheeky or flirty, just for fun.",

    "Act out an awkward encounter with an ex's new significant other in front of the group.",

    "Wear an article of clothing inside out for the next round of the game.",

    "Share an embarrassing story about your attempt to impress someone's parents.",

    "Deliver your best pick-up line to a group member as if they were significantly older or younger than you.",

    "Write and send a flirtatious message to someone from your contact list or social media.",

    "Strike a pose and make an exaggerated show of checking someone out in the room.",

    "Attempt to demonstrate an athletic skill of your choice, but make it intentionally exaggerated and comedic.",

    "Describe a made-up story about a romantic encounter in a fictional public place.",

    "Confess a funny and harmless lie you once told to get out of a commitment.",

    "Share a fictional story about having a crush on a friend's ex-partner and how you handled it.",

    "Dramatically reenact the most awkward or embarrassing text message you've received from your parents.",

    "Tell a short and funny anecdote about the time you accidentally stumbled upon adult content.",

    "Imagine your boss or supervisor is in the room, and try to impress them with an elaborate and humorous demonstration of your skills.",

    "Declare your secret celebrity crush and attempt to impersonate them for a minute.",

    "Share a humorous story about something embarrassing you did while under the influence of substances (keeping it light and safe).",

    "Reenact an amusing encounter with a neighbor or roommate.",

    "Act out a funny and cringe-worthy romantic moment, adding over-the-top dialogue.",

    "Perform an exaggerated, comical impression of a co-worker you once had a crush on.",

    "Describe an over-the-top version of the wildest party you've ever 'attended.'",

    "Share a funny and fictional story about the aftermath of a one-night stand.",

    "Attempt to act out a flirtatious scenario while pretending to be under the influence of alcohol (without actually being intoxicated).",

   

   

    "Perform a comically unrealistic and fictional action related to lying to get out of a speeding ticket.",

    "Reenact a humorous and exaggerated version of something embarrassing you did in a job interview.",

    "Act out an absurd and funny version of accidentally revealing a secret you were supposed to keep.",

    "Share an over-the-top and fictional story about attempting to meet your partner's parents.",

    "Perform a hilarious and comical action related to a wardrobe malfunction you didn't notice until later.",

    "Invent a exaggerated and funny scenario about embarrassing yourself on social media.",

   

    "Describe an absurd and fictional scenario involving an attempt to flirt, complete with exaggerated gestures.",

    "Perform an exaggerated and comical action related to a public bathroom mishap."

    // Add more dare challenges here

  ];

  return dareOptions[Math.floor(Math.random() * dareOptions.length)];

 


 

}

 

updateResult();

 

 

 

 