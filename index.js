 /*
 421
  */
 
  /* un chiffre entier aléatoire entre 1 et 6 */
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
 
  /* 1er chiffre */
  var a = getRandomIntInclusive(1,6);
  /* 2e */
  var b = getRandomIntInclusive(1,6);
  /* 3e */
  var c = getRandomIntInclusive(1,6);
 
  var tableau = [a,b,c];
 
  console.log(tableau);
 
  /* a-t-on un 4 ET */
  /* a-t-on un 2 ET */
  /* a-t-on un 1 ? */
 
 
  if(
    tableau.some(function(e){return e === 4;}) && 
    tableau.some(function(e){return e === 2;}) && 
    tableau.some(function(e){return e === 1;})
  ){
   console.log('421'); 
  }else{
   console.log('Relance');
  }
