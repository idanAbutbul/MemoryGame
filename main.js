const section = document.querySelector('section');

var player1 = document.querySelector('.score1');
var score = 0;

const cards = () => [
    {imgSrc:'./img/911.jpg', name:'911'},
    {imgSrc:'./img/speedy.jpg', name:'speedy'},
    {imgSrc:'./img/maybach.jpg', name:'maybach'},
    {imgSrc:'./img/corvete.jpg', name:'corvete'},
    {imgSrc:'./img/Huracan.jpg', name:'Huracan'},
    {imgSrc:'./img/Delorean.jpg', name:'Delorean'},
    {imgSrc:'./img/Toyota.jpg', name:'Toyota'},
    {imgSrc:'./img/Deus.jpg', name:'Deus'},
    {imgSrc:'./img/Delorean.jpg', name:'Delorean'},
    {imgSrc:'./img/Huracan.jpg', name:'Huracan'},
    {imgSrc:'./img/speedy.jpg', name:'speedy'},
    {imgSrc:'./img/Deus.jpg', name:'Deus'},
    {imgSrc:'./img/maybach.jpg', name:'maybach'},
    {imgSrc:'./img/Toyota.jpg', name:'Toyota'},
    {imgSrc:'./img/911.jpg', name:'911'},
    {imgSrc:'./img/corvete.jpg', name:'corvete'},
    {imgSrc:'./img/bently.jpg', name:'bently'},
    {imgSrc:'./img/supra.jpg', name:'supra'},
    {imgSrc:'./img/bently.jpg', name:'bently'},
    {imgSrc:'./img/SC18.jpg', name:'SC18'},
    {imgSrc:'./img/lexusls500.jpg', name:'lexusls500'},
    {imgSrc:'./img/supercar.png', name:'supercar'},
    {imgSrc:'./img/supercar.png', name:'supercar'},
    {imgSrc:'./img/supra.jpg', name:'supra'},
    {imgSrc:'./img/racecar.jpg', name:'racecar'},
    {imgSrc:'./img/SC18.jpg', name:'SC18'},
    {imgSrc:'./img/lexusls500.jpg', name:'lexusls500'},
    {imgSrc:'./img/racecar.jpg', name:'racecar'},
    {imgSrc:'./img/m4gts.jpg', name:'m4gts'},
    {imgSrc:'./img/m4gts.jpg', name:'m4gts'},


];

const randomize = () =>{
    const cardData = cards();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const RandomCards = () => {
    const cardData = randomize();
    
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e)
        });
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    
    if(flippedCards.length == 2){
        if(flippedCards[0].getAttribute('name') == flippedCards[1].getAttribute('name')){
            score += 1;
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents= 'none';
                player1.textContent = 'playerOne:'+score;
            })
        }else{
            flippedCards.forEach( card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
                
            });

        }
    }
    if(toggleCard.length === 30){
        setTimeout( function ( ) { alert( "YOU WON !" ); }, 500 );  
        setTimeout( function ( ){window.location.reload();}, 3000);
    }
}

RandomCards()

/*

*/