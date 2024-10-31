// Function to handle when the LogIn button is clicked
function toggleLogIn() {
    var login = document.getElementById('js_login');
    var signup = document.getElementById('js_signup');

    // Check and change display status
    if (login.style.display === 'flex') {
        login.style.display = 'none'; // Hide LogIn if it’s currently displayed
    } else {
        login.style.display = 'flex'; // Display LogIn
        signup.style.display = 'none'; // Hide SignUp if it’s currently displayed
    }
}

// Function to handle when the SignUp button is clicked
function toggleSignUp() {
    var login = document.getElementById('js_login');
    var signup = document.getElementById('js_signup');

    // Check and change display status
    if (signup.style.display === 'flex') {
        signup.style.display = 'none'; // Hide SignUp if it’s currently displayed
    } else {
        signup.style.display = 'flex'; // Display SignUp
        login.style.display = 'none'; // Hide LogIn if it’s currently displayed
    }
}

function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

// Optional: Close the dropdown if a link inside it is clicked
document.querySelectorAll('#dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdownMenu = document.getElementById("dropdown-menu");
        dropdownMenu.classList.remove("show");
    });
});

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleButton.textContent = body.classList.contains('dark-theme') ? '🌜' : '🌞';
});
//Add a js script with a function that changes the color of the nav-bar each time we find a new color

        window.addEventListener('scroll' , function(){
            const headerNav = document.querySelector('.header-nav');

            if(window.scrollY > 0){
                headerNav.classList.add('scrolled');
            }else{
                headerNav.classList.remove('scrolled');
            }
        });
