// JavaScript for Contact Links Interaction
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');

    // Email link interaction
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const email = "kunalpatwari67@gmail.com";
        const confirmEmail = confirm('Are you sure you want to email me?');
        
        if (confirmEmail) {
            window.location.href = `mailto:${email}`;
        }
    });

    // LinkedIn link interaction
    linkedinLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const linkedinUrl = "https://www.linkedin.com/in/kunal-patwari-aa29b3233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        const confirmLinkedIn = confirm('Are you sure you want to visit my LinkedIn profile?');

        if (confirmLinkedIn) {
            window.open(linkedinUrl, '_blank');
        }
    });
});
