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

  const isValid = ()

};

module.exports = getTotalIsles;