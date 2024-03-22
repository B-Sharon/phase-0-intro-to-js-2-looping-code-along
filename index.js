const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names){
    let cards = []; //new array to be returned
    for(let i =0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countDown(number){
    number = 0;
    while(number <= 10){
        console.log(number++);
    } 
}