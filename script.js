// Console check
console.log("SRD Design Website Loaded Successfully");

// Future mein yahan Navbar scroll effect aur Lightbox ka code aayega.


// Load More Services Functionality
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 1. Select all hidden services
            const hiddenServices = document.querySelectorAll('.hidden-service');
            
            // 2. Show them with animation
            hiddenServices.forEach(function(service) {
                service.classList.remove('d-none'); 
                service.classList.add('fade-in-up'); 
            });

            // 3. Hide the button itself
            this.style.display = 'none';
        });
    }
});

// ==================== Gallery Section =======================
// Load More Gallery
document.addEventListener("DOMContentLoaded", function () {
    const loadMoreGalleryBtn = document.getElementById('loadMoreGalleryBtn');
    
    if(loadMoreGalleryBtn) {
        loadMoreGalleryBtn.addEventListener('click', function() {
            const hiddenGalleryItems = document.querySelectorAll('.hidden-gallery');
            hiddenGalleryItems.forEach(function(item) {
                item.classList.remove('d-none');
                item.classList.add('fade-in-up');
            });
            this.style.display = 'none';
        });
    }
});

// Update Lightbox Image
function updateLightbox(imgElement) {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imgElement.src;
}

// ================= Whatsapp Form Send =====================
// WhatsApp Form Submission Logic
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('whatsappForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Page reload hone se rokega

            // 1. Data collect karein
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var service = document.getElementById('service').value;
            var messageDetails = document.getElementById('message').value;

            // Agar email khali hai to "Not Provided" likh do
            if(email === "") email = "Not Provided";

            // 2. WhatsApp Message Format karein
            // \n ka use new line ke liye hota hai
            var whatsappMessage = 
                "*Hello SRD Design, I have a project inquiry.*" + "\n\n" +
                "👤 *Name:* " + name + "\n" +
                "📞 *Phone:* " + phone + "\n" +
                "✉️ *Email:* " + email + "\n" +
                "🛠️ *Service Interest:* " + service + "\n" +
                "📝 *Details:* " + messageDetails;

            // 3. WhatsApp URL banayein
            // Aapka number: 918591867199
            var myPhoneNumber = "918591867199"; 
            var url = "https://wa.me/" + myPhoneNumber + "?text=" + encodeURIComponent(whatsappMessage);

            // 4. New tab mein open karein
            window.open(url, '_blank').focus();
        });
    }
});