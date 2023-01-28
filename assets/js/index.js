// choose level - returns rows, columns, lives
function level(choice) {
  switch(choice) {
    case 'easy':
      return [3, 4, 6];
      break;
    case 'moderate':
      return [4, 5, 8];
      break;
    case 'hard':
      return [6, 6, 12];
  }
}

let l = level('hard');