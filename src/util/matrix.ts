export function transpose(matrix: string[][]) {
  let transposed: string[][] = [[], [], []];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}

export function diagonals(matrix: string[][]) {
  let diagonals: string[][] = [[], []];

  for (var i = 0; i < 3; i++) {
    diagonals[0][i] = matrix[i][i];
    diagonals[1][i] = matrix[i][2 - i];
  }

  return diagonals;
}
