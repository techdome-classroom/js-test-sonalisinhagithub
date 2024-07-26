const getTotalIsles = function (grid) {
  if(!grid || grid.length===0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({length : rows} , ()=> Array(cols).file(false));
  

  const directions =[
    [0,1], //right
    [1,0], //down
    [1,-1], //left
    [-1,0] //up
  ];

  const isValid = (r,c) => {
    return r >= 0 && r < row && c>=0 && c<cols && grid[r][c] === 'L' && !visited[r][c];
  };

  const dfs = (r,c) => {
    const stack =[[r,c]];
    while (stack.length){
      const [curRow , curCol] = stack.pop();
      if(!isValid (curRow , curCol)) continue;
      visited[curRow][curCol] = true;
      for (const [dr,dc] of directions){
        stack.push([curRow + dr, curCol +dc]);
      }
    }
  };

  let numIsland = 0;

  for (let i=0; i<row ; i++){
    for (let j=0;j<cols ;j++){
      if(grid [i][j]==='L' && !visited[i][j])
    }
  }
  
};

module.exports = getTotalIsles;