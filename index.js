// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */
const formatPlayers = (players) => {
  players.map((player, index) => {
    console.log("PLAYER ", index + 1);
    for (const property in player) {
      console.log(`${property.toUpperCase()}: ${player[property]}`);
    }
  });
};

formatPlayers(data.getPlayers());
// Your code

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

const orderPlayers = (players) => {
  console.log(
    players
      .sort((a, b) => b.name.length - a.name.length)
      .map((player) => player.name)
  );
};
orderPlayers([...data.getPlayers()]);
// Your code

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.19
 */

// Your code
const goalsPerMatch = (arr) =>
  console.log(
    "Goals per match:",
    arr.reduce((r, c) => r + parseInt(c.scoringChance), 0) / 100
  );

goalsPerMatch(data.getPlayers());
/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

const positionFinder = (player) => {
  console.log(data.getPlayers().find((o) => o.name == player).position);
};

positionFinder("Tammy");

// Your code

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const randomizeArray = (array) => {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    x = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = x;
  }

  return array;
};

const averageGoals = (arr) =>
  Math.round(arr.reduce((r, c) => r + parseInt(c.scoringChance), 0) / 100);

const scoreCalculator = (input) => {
  const teamA = randomizeArray([...input]);
  const teamB = teamA.splice(0, Math.ceil(input.length / 2));

  console.log(`Team A: ${averageGoals(teamA)} Team B: ${averageGoals(teamB)}`);
};

scoreCalculator(data.getPlayers());
