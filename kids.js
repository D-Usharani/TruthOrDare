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



let lastTwoPlayerTruth = false;





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

 

      Truth: ${truthMessage}

 

    `;



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

    "Give someone a piggyback ride!",

    "Do not blink for a minute!",

    "Any time someone takes a drink, ask them for a sip!",

    "Do your best Buzz Lightyear impression!",

    "Run around the outside of the house three times!",

    "Go outside and yell, “I pick my nose!” to the first person you see!",

      "Have you ever pretended to like a certain type of music to fit in?",

    "What's the most embarrassing nickname you've been given?",

    "Have you ever had a crush on someone you met at a family event?",

    "What's a food you dislike that most people seem to enjoy?",

    "What's a moment you felt truly confident and empowered?",

    "Have you ever made a big decision based on a gut feeling or intuition?",

    "What's something you've learned recently that you think is fascinating?",

    "Have you ever had a crush on someone you met through online gaming or a virtual platform?",

    
    "What is your favorite sleeping position?",

    "Who do you want to be when you grow up?",

    "Would you rather have a sibling or a pet?",

    "Have you held a tarantula?",

    "Have you ever watched Blues Clues?",

    "What is a secret you have?",

    "What is your favorite amusement park ride?"

    // Add more truth questions here

  ];

  return truthOptions[Math.floor(Math.random() * truthOptions.length)];

}





function getRandomDare() {

  const dareOptions = [

    "Call a local grocery store and ask if they have any square watermelons.",

    "Write and perform a short rap about your favorite food.",

    "Put on a blindfold and try to draw a self-portrait on a piece of paper.",

    "Call a friend and try to convince them that you've just won the lottery (be creative!).",

    "Take a selfie imitating your favorite emoji and share it with your group.",

    "Pretend you're a sports commentator and give a play-by-play of you doing a simple task.",

    "Call a family member and tell them you're practicing to be a professional animal impersonator.",

    "Wear your socks on your hands and try to eat a snack without using your hands.",

    "Write a short and funny poem about a talking vegetable and read it aloud to the group.",

    "Take a selfie while trying to balance a spoon on your nose.",

    
    "Touch your nose with your tongue!",

    "Chug a cup of milk, water, juice, etc.!",

    "Talk and act like a robot!",

    "Blindfold yourself for your next 3 turns!",

    "Ask someone to tango!",

    "Act like a gorilla and pretend to pick bugs out of your friend’s hair!",

    "Do the cha-cha until it is your turn again!",

    "Make animal sounds for a minute straight!"



    // Add more dare challenges here

  ];

  return dareOptions[Math.floor(Math.random() * dareOptions.length)];

}







updateResult();



