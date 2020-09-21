(function () {
    const firebaseConfig = {


        //  REMOVED FOR GITHUB

        
    };
    firebase.initializeApp(firebaseConfig);   
}());

// Database reference

const dbRefObject = firebase.database().ref('comments');

// Contact Form

function firebasePush(inputName,inputComment){
    dbRefObject.push().set(
        {
            'name': inputName.value,
            'comment': inputComment.value
        }
    );
}

let contactButton = document.getElementById('contact');
let contactExit = document.getElementById('exit');
let contactBox = document.getElementById('contactBox');

const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const comment = document.getElementById('comment');

contactButton.addEventListener('click',()=>{
    contactBox.style.display = 'block';
});

contactExit.addEventListener('click',()=>{
    contactBox.style.display = 'none';
    form.reset();
});

if(form){
    form.addEventListener('submit', (event)=>{
        contactBox.style.display = 'none';
        event.preventDefault();
        firebasePush(name,comment);
        form.reset();
    });
}