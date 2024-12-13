const canvas = document.getElementById('canvas1');                                                                                
const ctx = canvas.getContext('2d');
const dropdown = document.getElementById('animation');
dropdown.addEventListener('change', function(e){
    playerState=e.target.value;
});

const CANVAS_WIDTH =canvas.width=600;
const CANVAS_HEIGHT =canvas.height=600;

const playerImage = new Image();//built in image class constructor creats html image element same as image tag
                                    
playerImage.src = "shadow_dog.png";
const sW=575;
const sH=523;
let playerState='idle';

let gameFrame=0;// to slow down the animations of frames     
let staggerFrames=10;//same as game frames int indicates the factor by which it slows down
const spriteAnimation = [];
const animationStates = [
    {
    
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 7,
    },
    {
        name:'run',
        frames: 9,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12,
    },
    {
        name:'getHit',
        frames: 4,
    },
];
animationStates.forEach((state,index)=>{
        let frames ={
            loc:[],
        }
        for (let j=0;j<state.frames;j++){
            let positionX = j*sW;
            let positionY = index*sH;
            frames.loc.push({x:positionX,y:positionY});
        }
        spriteAnimation[state.name] = frames; 
    });

console.log(animationStates);
function animate()
{
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position=Math.floor(gameFrame/staggerFrames)%spriteAnimation[playerState].loc.length;
    let frameX=sW*position;
    let frameY=spriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,sW,sH,0,0,sW,sH);
   
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();