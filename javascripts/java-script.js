
document.addEventListener("DOMContentLoaded", function() {
    let imageUpload = document.getElementById('imageUpload');
    let container = document.getElementById('container');
    
    imageUpload.addEventListener('change', function(event) {
    let file = event.target.files[0];
    
    if (file) {
        let reader = new FileReader();
    
        reader.onload = function(e) {
        let imageURL = e.target.result;
        container.style.backgroundImage = `url(${imageURL})`;
        };
    
        reader.readAsDataURL(file);
    }
    });
    
    
});
