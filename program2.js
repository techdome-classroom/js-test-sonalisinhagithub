const decodeTheRing = function (s, p) {

    function matches (i,j){
      if(i===s.length && i===p.length){
        return 1;
      }
      if(i>s.length || j>p.length){
        return 0;
      }

      if(p[j]==='*'){
        return matches(i,j+1) || (s.)
      }
    }

  };
  
  module.exports = decodeTheRing;