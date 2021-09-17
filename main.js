const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

 const player1 = {
        number: 1,
        name: 'scorpion',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: ['Мачете', 'Меч', 'Нунчаки'],
        attack: function(){
            console.log(this.name + ' ' + 'Fight...')
        }
    
    };
    
const player2 = {
    number: 2,
        name: 'sonya',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        weapon: ['Мачете', 'Меч', 'Нунчаки'],
        attack: function(){
            console.log(this.name + ' ' + 'Fight...')
        }
    }

player1.attack();
player2.attack();

function createElement(tag, className){
    const $tag = document.createElement(tag);

    if (className){
        $tag.classList.add(className);    
    }
    
    return $tag
}

function createPlayer(name, player){

    const $player = createElement('div', 'player' + player.number);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
     const $life =createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = player.hp +'%';
    $name.innerHTML = player.name;
    $img.setAttribute('src', player.img);

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    
 return $player
}

function changeHP(player){
    const $playerLife = document.querySelector('.player'+ player.number +' .life');

    let max = 20;
    let min = 1;
    const random = Math.ceil(Math.random()*(max-min-1)+min);
    // console.log('random', random);
    player.hp -=random;

    if(player.hp <= 0){
       
        $playerLife.style.width = '0%';
        player.hp = 0;
        
        $randomButton.disabled = true

        if (player1.hp <= 0){
            // console.log('player1', player1.hp);
            $arenas.appendChild(playerWin(player2.name))
            
        } else {
            // console.log('player2', player2.hp);
            $arenas.appendChild(playerWin(player1.name))
            // const $src = document.querySelector('.player1 .character img');
            // console.log($src);
            // $src.src= 'http://reactmarathon-api.herokuapp.com/assets/scorpion-win.gif';
        }

    } else {
        $playerLife.style.width = player.hp +'%';
    }

}

function playerWin(name){
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerHTML = name + '  WON';
    return $loseTitle;
}


$randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);
    // console.log('player1', player1);
    // console.log('player2', player2);

})

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));

