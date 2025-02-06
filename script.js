const body = document.querySelector('body');
const audio = document.querySelector('.bagAudio');
const audio2 = document.querySelector('.bagAudio2');
const audio3 = document.querySelector('.bagAudio3');
const audio4 = document.querySelector('.bagAudio4');
const audio5 = document.querySelector('.bagAudio5');

document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector('p.message');
  if (message) {
      message.textContent = messageArray[Math.floor(Math.random() * messageArray.length)];
  }
});




// Text list
const messageArray = [
  "I insta-stalk my ex's pet." ,
  "I still have an apology text in my notes app. I cringe at how dramatic I am." , 
  "I can't give their hoodie back. its *objectively* the best thing I own. I lie and say its thrifted." ,  
  "I made a playlist for them. Spotify's algorithm still suggests their favorite song." ,
  "We were half-way through Breaking Bad when we broke up. I can't finish it, it was *our* show." , 
  "His mom said I was the best thing to ever happen to him." , 
  "I stil own them $34.50. It's not the money, it's the *principle*." , 
  "My brother became bestfriends with my ex. I see him sometimes when I get home from work." ,
  "I liked one of their instagram post from 2016...who didn't love 2016...right?" , 
  "I rewatch our old Schapchat memories for research purposes." , 
  "My Netflix password is still our names." ,
  "I started listening to the Beatles because he was obsessed with them. I still love them." , 
  "I text during sex." ,
  "I quit my job and faked that I had to move to end my relationship." ,
  "I regifted my exes' presents to my girlfriend." , 
  "I still check their instagram page." ,
  "I've blocked and and unblocked them for the last 4 years since we brokeup." , 
  "I lost my virginity on my exes's birthday." , 
  "They can be very loud very suddenly and it stresses me out." , 
  "We're still friends on Costar." ,
  "Tiktok always recommends my ex's account under 'people you may know'." ,
  "My mom was really mad when she found out I brokeup with my boyfriend. The support is zeroooo." ,
  "My bestfriend comforted my ex after I broke up with them." ,
  "I re-read our final messages and think of better responses I could've had." , 
  "He sent me a letter after we broke up and I still kept it." ,
  "I avoid listening to the songs we used to share with each other to escape the memories." ,
  "The moon reminds me of them." ,
  "They left me for someone who inexplicably hated me with no warning, for no apparent reason." ,
  "I can't see a gray Prius anywhere without my heart droppng."
]




const objectArray = [
  { src: 'glasses.png', size: 590 },
  { src: 'lipstick.png', size: 370 },
  { src: 'condom.png', size: 200 },
  { src: 'wallet.png', size: 455 },
  { src: 'airpod1.png', size: 330 },
  { src: 'airpod2.png', size: 190 },
  { src: 'keys.png', size: 575 },
  { src: 'clip.png', size: 500 },
  { src: 'inhaler.png', size: 280 },
  { src: 'lighter.png', size: 200 },
  { src: 'brush.png', size: 660 },
  { src: 'scrunchie.png', size: 340 },
  { src: 'birthControl.png', size: 350 },
  { src: 'gum.png', size: 250 },
  { src: 'handCream.png', size: 280 },
  { src: 'mascara.png', size: 420}, 
  { src: 'sanitizer.png', size: 290},
  { src: 'passport.png', size: 380},
  { src: 'nailPolish.png', size: 220},
  { src: 'keychain.png', size: 180},
  { src: 'chapstick.png', size: 250},
  { src: 'charger.png', size: 400},
  { src: 'pillBox.png', size: 240},
  { src: 'crackers.png', size: 200},
  { src: 'pen.png', size: 330},
  { src: 'pepperSpray.png', size: 240},

  


];

let mouse = { x: 0, y: 0, radius: 75 }; // Mouse interaction
const objects = [];
const friction = .95; // friction
const pushStrength = 5; // strength of mouse push
const smoothFactor = 0.07; 

 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function placeObjects() {
  shuffleArray(objectArray); 

  const objectsToDisplay = objectArray.slice(0,12);

  objectsToDisplay.forEach((obj) => {
    const img = document.createElement('img');
    img.src = obj.src;
    img.style.width = `${obj.size}px`; 
    img.style.height = 'auto';
    img.style.position = 'absolute';

    const object = {
      element: img,
      x: Math.random() * (window.innerWidth - obj.size - 50) + 25, 
      y: Math.random() * (window.innerHeight - obj.size - 50) + 25,
      width: obj.size, // Use the correct size from the object
      height: obj.size, // Use the correct size from the object
      dx: 0, 
      dy: 0,
      rotation: 0
    };

    img.style.left = `${object.x}px`;
    img.style.top = `${object.y}px`;
    body.appendChild(img);

    objects.push(object);
  });
}




// Audio
let lastPlayedAudio = null; // Track the last played audio

function playRandomAudio() {
  const audioFiles = [audio, audio2, audio3, audio4, audio5];

  let chosenAudio;
  do {
    chosenAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
  } while (chosenAudio === lastPlayedAudio); // Ensure it's not the last played audio

  lastPlayedAudio = chosenAudio; // Update last played

  if (chosenAudio) {
    chosenAudio.volume = Math.random() * 0.9 + 0.1; 
    chosenAudio.playbackRate = Math.random() * 0.3 + 0.7; // Random speed between 0.8x and 1.2x
    chosenAudio.play();
  }
}
/*function playRandomAudio() {
  const audioFiles = [audio, audio2, audio3, audio4, audio5]; 
  const chosenAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)]; 
  
  if (chosenAudio) {
    //chosenAudio.currentTime = 0; // Restart the audio from the beginning
    chosenAudio.play(); 
  }
} */

  /*function playAudio() {
    if (audio) {
      //audio.currentTime = 0; // Reset the audio to start from the beginning
      audio.play(); // Play the audio
  
    }
  }*/




// mouse interaction stuff
function updateObjects() {
  objects.forEach((obj) => {
    const dx = obj.x + obj.width / 2 - mouse.x; 
    const dy = obj.y + obj.height / 2 - mouse.y; 
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;

      // Move object away from mouse
      obj.dx += Math.cos(angle) * force * pushStrength;
      obj.dy += Math.sin(angle) * force * pushStrength;
      obj.rotation += Math.cos(angle) * force * pushStrength;

      // Play random audio when object is close to the mouse
      playRandomAudio();
      //playAudio();
    }

    
    obj.dx *= friction;
    obj.dy *= friction;

   
    obj.x += obj.dx;
    obj.y += obj.dy;
   
    // Prevent objects from going outside page
    if (obj.x < 0) obj.x = 0;
    if (obj.x + obj.width > window.innerWidth) obj.x = window.innerWidth - obj.width;
    if (obj.y < 0) obj.y = 0;
    if (obj.y + obj.height > window.innerHeight) obj.y = window.innerHeight - obj.height;

    // Update the DOM element's position
    obj.element.style.left = `${obj.x}px`;
    obj.element.style.top = `${obj.y}px`;
    obj.element.style.transform = `rotate(${obj.rotation}deg)`;
  });
}


function animate() {
  updateObjects();
  requestAnimationFrame(animate);
}

// Track mouse
body.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});


placeObjects();
animate();