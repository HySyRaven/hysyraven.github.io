const body = document.querySelector('body');


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



]

// Object array and images
const objectArray = [
  { src: 'glasses.png', size: 590 },
  { src: 'lipstick.png', size: 375 },
  { src: 'wallet.png', size: 490 },
  { src: 'airpod1.png', size: 330 },
  { src: 'airpod2.png', size: 190 },
  { src: 'keys.png', size: 575 },
  { src: 'clip.png', size: 530 },
  { src: 'inhaler.png', size: 280 }
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

  objectArray.forEach((obj) => {
    const img = document.createElement('img');
    img.src = obj.src;
    img.style.width = `${obj.size}px`; 
    img.style.height = `${obj.size}px`; 
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

// move away from mouse
function updateObjects() {
  objects.forEach((obj) => {
    const dx = obj.x + obj.width / 2 - mouse.x; 
    const dy = obj.y + obj.height / 2 - mouse.y; 
    const distance = Math.sqrt(dx * dx + dy * dy);

    
    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      obj.dx += Math.cos(angle) * force * pushStrength;
      obj.dy += Math.sin(angle) * force * pushStrength;
      obj.rotation += Math.cos(angle) * force * pushStrength;
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