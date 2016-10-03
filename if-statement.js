var fruit = 'orange';
function fruitLength(fruitVar) {
  if(fruitVar.length > 5) {
    console.log('The fruit name has more than five characters.');
  }
  else {
    console.log('The fruit name has five characters or less.');
  }
}

fruitLength(fruit);
