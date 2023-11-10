
// ====================================
// nav bar scripts
// =====================================
function checkWindowSize() {
	var myDiv = document.getElementById("sidenav");
	var myTopnav = document.getElementById("myTopnav");
	if (window.innerWidth <= 950) { // Adjust the breakpoint as needed
		myDiv.style.display = "block";
		myTopnav.style.display = "none";
	} else {
		myDiv.style.display = "none";
		myTopnav.style.display = "flex";

	}
}
// =======================================
// search auto fill
// ==========================================
var searchInput = document.getElementById('role');
var autofillList = document.getElementById('autofill-list');

var data = ['front-end', 'back-end', 'full-stack', 'mobile devs', 'graphics', 'cyber security', 'networking', 'ios developer'];

searchInput.addEventListener('input', function() {
    var searchlens= document.getElementById('lens');
    searchlens.style.display="none";
    var inputValue = searchInput.value.toLowerCase();
    var matchedItems = data.filter(function(item) {
        return item.toLowerCase().includes(inputValue);
    });

    autofillList.innerHTML = '';

    matchedItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemElement.classList.add('autofill-item');

        itemElement.addEventListener('click', function() {
            searchInput.value = item;
            autofillList.innerHTML = '';
        });

        autofillList.appendChild(itemElement);
    });
});

// Close autofill list when clicking outside
document.addEventListener('click', function(event) {
    if (!autofillList.contains(event.target) && event.target !== searchInput) {
        autofillList.innerHTML = '';
    }
});
// JavaScript code to toggle the dropdown when any button is clicked
// Function to close all dropdowns with the "active" class
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(function (content) {
        content.parentElement.classList.remove('active');
    });
}

document.querySelectorAll('.dropbtn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var dropdown = this.parentElement;
        dropdown.classList.toggle('active');
    });
});

document.querySelectorAll('.dropdown-content').forEach(function (content) {
    content.addEventListener('mouseleave', function () {
        var dropdown = this.parentElement;
        dropdown.classList.remove('active');
    });
});

// Add event listener to the document to close dropdowns when the mouse moves outside of buttons and their dropdown-content
document.addEventListener('mousemove', function (event) {
    var isInsideDropdown = false;
    document.querySelectorAll('.dropbtn, .dropdown-content').forEach(function (element) {
        if (element.contains(event.target)) {
            isInsideDropdown = true;
        }
    });

    if (!isInsideDropdown) {
        closeAllDropdowns();
    }
});

// =============================================
// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the first .job element and add the 'bd-color' class
    var firstJob = document.querySelector('.job');
    if (firstJob) {
        firstJob.classList.add('bd-color');
    }
});

document.querySelectorAll('.job').forEach(function(job) {
    job.addEventListener('click', function() {
        this.classList.add('bd-color');
    });
});

//  remove the class when another ".job" element receives focus
document.querySelectorAll('.job').forEach(function(job) {
    job.addEventListener('click', function() {
        document.querySelectorAll('.job').forEach(function(otherJob) {
            if (otherJob !== this) {
                otherJob.classList.remove('bd-color');
            }
        }, this);
    });
});

// =================================
//  sticky
// =========================
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainsection2');

    if ((window.pageYOffset >= 25) && (window.pageXOffset <= 40)) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});




// Initial check when the page loads
checkWindowSize();

// Listen for window resize events
window.addEventListener("resize", checkWindowSize);
function openNav() {
	document.querySelector(".sidenav").style.width = "250px";
	document.querySelector(".main").style.marginRight = "250px"; // Changed from marginLeft
}

function closeNav() {
	document.querySelector(".sidenav").style.width = "0";
	document.querySelector(".main").style.marginRight = "0"; // Changed from marginLeft
}


// ==================================================
//  dochange of job desc
document.addEventListener('DOMContentLoaded', function() {
    var myjobs = [];

    var job1 = {
        name: 'Full Stack Junior Developer Alliance for Young Artists & Writers',
        place: 'usa',
        place2: 'turkey',
        job_type: "part time",
        pay: '$57000',
        Cmt: "  Lorem ipsum dolor sit amet consectetu adipisicing elit. Atque labore dolorsequi ipsam facere commodi,thanks for this amazing video you made my day",
        desc1: " Experience in debugging and optimization skills, unit/integration testingBachelors degree (or equivalent) or technical certification (e.g. Bootcamp) in computer science, information technology, or engineering strongly preferredInterest in learning new tools, languages, workflows, and philosophiesInterest in creative fields (e.g. art and writing) and/or mission-driven non-profits a plus",
        desc2: "  mission-driven non-profits a plus Strong collaboration and interpersonal skills and the ability to work with both technically savvy colleagues and those with limited technological expertiseTime Type:",
    };

    var job2 = {
        name: 'Developpeur back end',
        place: 'douala',
        place2: 'yaounde',
        job_type: "full time",
        pay: '53k',
        Cmt: "WebÊtes-vous à la prochaine étape de votre carrière ? Sur Indeed, accédez à des millions ",
        desc1: "By continuing to sign in through Google, you agree to Indeeds Terms, Cookie, and Privacy Policies. An Indeed account will be created for you with the same email address used for your Google account, if you don’t already have an Indeed account associated with that email. Indeed will send you marketing emails unless you object to these and you can unsubscribe at any time.",
        desc2: "  mission-driven non-profits a plus Strong collaboration and interpersonal skills and the ability to work with both technically savvy colleagues and those with limited technological expertiseTime Type:",
    };

    var job3 = {
        name: 'Developpeur full stack',
        place: 'bamalang',
        place2: 'south asia',
        job_type: "permanent",
        pay: 7000,
        Cmt: "WebInside Indeed • November 10, 2022. Indeed employees have the following workspace options depending on job role eligibility: In-Office, Remote, or a combination of both called Flex.",
        desc1: " Go Make Something Awesome Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes. philosophiesInterest in creative fields (e.g. art and writing) and/or mission-driven non-profits a plus",
        desc2: "  mission-driven non-profits a plus Strong collaboration and interpersonal skills and the ability to work with both technically savvy colleagues and those with limited technological expertiseTime Type:",
    };

    myjobs.push(job1);
    myjobs.push(job2);
    myjobs.push(job3);

    var jobElements = document.querySelectorAll('.job');

    jobElements.forEach(function(element, index) {
        element.addEventListener('click', function() {
            dochange(index);
        });
    });

    function dochange(i) {
        document.getElementById('name').textContent = myjobs[i].name;
        document.getElementById('place').textContent = myjobs[i].place;
        document.getElementById('place2').textContent = myjobs[i].place2;
        document.getElementById('job_type').textContent = myjobs[i].job_type;
        document.getElementById('pay').textContent = myjobs[i].pay;
        document.getElementById('cmts').textContent = myjobs[i].Cmt;
        document.getElementById('desc1').textContent = myjobs[i].desc1;
        document.getElementById('desc2').textContent = myjobs[i].desc2;
    }
});
