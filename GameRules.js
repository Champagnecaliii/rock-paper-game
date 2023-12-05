class GameRules {
    static determineWinner(userMove, computerMove, moves) {
      const userIndex = moves.indexOf(userMove);
      const computerIndex = moves.indexOf(computerMove);
  
      if (userIndex === computerIndex) return 'Draw';
      if ((userIndex + 1) % moves.length === computerIndex || (userIndex + 3) % moves.length === computerIndex) {
        return 'You Win';
      }
  
      return 'Computer Wins';
    }
  }
  
  module.exports = GameRules;
  