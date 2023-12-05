class HelpTableGenerator {
    static generateHelpTable(moves) {
      const table = [['Moves', ...moves]];
  
      for (let i = 0; i < moves.length; i++) {
        const row = [moves[i]];
        for (let j = 0; j < moves.length; j++) {
          if (i === j) {
            row.push('Draw');
          } else {
            row.push(''); 
          }
        }
        table.push(row);
      }
  
      return table;
    }
  }
  
  module.exports = HelpTableGenerator;
  