const getTotalIsles = function (grid) {
  if(!grid || grid.length===0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  

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
    while (stack.length)
  }
  
};

module.exports = getTotalIsles;