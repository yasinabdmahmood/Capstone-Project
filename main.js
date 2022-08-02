import {createMobileMenu} from './mobile_menu.js';
let speackersInfo=[
    {
        name1:'yohai benkler',
        name2:'Yochai Benkler',
        img:'./img/speaker_01.png',
        occupation:'Professor at Harvard Law School',
        discription:'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. '

    },
    {
        name1:'Jeon Gil-nam',
        name2:'Kilnam Chon',
        img:'./img/speaker_02.png',
        occupation:'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        discription:'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990, it ushered in the era of the Internet in earnest'

    },
    {
        name1:'Noh So-young',
        name2:'Sohyeong Noh',
        img:'./img/speaker_03.png',
        occupation:'Art Center Nabi Director, CC Korea Director',
        discription:'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi, Koreas first digital art institution in 2000, and is currently serving.'

    },
    {
        name1:'Julia Leda',
        name2:'Julia Reda',
        img:'./img/speaker_04.png',
        occupation:'Head of the Young Pirates of Europe',
        discription:'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.'

    },
    {
        name1:'Layla Tretikov',
        name2:'Lila Tretikov',
        img:'./img/speaker_05.png',
        occupation:'./img/speaker_04.png',
        discription:'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. '

    },
    {
        name1:'Ryan Merkley',
        name2:'Ryan Merkley',
        img:'./img/speaker_06.png',
        occupation:'Creative Commons CEO, Former Mozilla Foundation COO',
        discription:'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. '

    },
];
let sec3Content=`
<div class="sec3-header-wrapper">
    <h1 class="sec3-header ">
        Featured Speakers
    </h1>
</div>
<div class="guide_bar"></div>
<div class="speaker" id=speaker>
   
</div>
<div class="show-less" id="show">
    <span id="card-display-control">MORE </span>
    <img id="arrow-direction" src="./img/chevron-down.svg" alt="">
</div>
`

document.getElementById('sec3').innerHTML=sec3Content;
function addCards(numOfCards){
    speackersInfo.forEach(
        (currntValue,index)=>{
            let card=`<div class="speaker-card ${index>=2? 'hide-on-demand':''}">
            <div class="img-name">
                <div class="card-item1">
                    <img class="card-img" src="${speackersInfo[index].img}" alt="">
                </div>
                <div class="card-item2">
                    <h3 class="speaker-h3">${speackersInfo[index].name1}</h3>
                    <p class="speaker-p">${speackersInfo[index].occupation}</p>
                    <p class="card-p">${speackersInfo[index].discription}</p>
                </div>
            </div>
            
        </div>`;
        if(index<=numOfCards){
            document.getElementById('speaker').innerHTML+=card;
        }
        
    
        }
    )
}
addCards(1);

let bol=true;

document.getElementById('show').onclick=()=>{
    document.getElementById('speaker').innerHTML=""
    if(bol){
        addCards(5); 
    document.getElementById('card-display-control').innerHTML='SHOW LESS';
    document.getElementById('arrow-direction').style.transform='rotate(180deg) scale(1.3)';
    bol=!bol;
    
    }
    else {
        addCards(1); 
    document.getElementById('card-display-control').innerHTML='MORE';
    document.getElementById('arrow-direction').style.transform='rotate(0deg) scale(1.3)';
    bol=!bol;

    }
   
}


////////////////mobile menu implementation////////////////

createMobileMenu('about','./about.html')
