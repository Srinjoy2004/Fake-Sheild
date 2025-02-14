document.addEventListener("DOMContentLoaded", () => {
    const dropArea = document.getElementById("upload-area");
    const fileInput = document.getElementById("file-input");
    const previewImage = document.getElementById("image-preview");
    
    // 📌 Click to Upload
    dropArea.addEventListener("click", () => fileInput.click());
    
    // 📤 File Input Change
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        handleFile(file);
    });

    // 🚀 Drag & Drop Functionality
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.style.borderColor = "#ff0266"; // Highlight on drag
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "#03dac6"; // Reset border
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.style.borderColor = "#03dac6"; // Reset border
        const file = event.dataTransfer.files[0];
        handleFile(file);
    });

    // 📷 Handle File Upload
    function handleFile(file) {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                previewImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file!");
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("signInBtn");
    const loginBtn = document.getElementById("loginBtn");

    const signInModal = document.getElementById("signInModal");
    const loginModal = document.getElementById("loginModal");

    const closeSignIn = document.getElementById("closeSignIn");
    const closeLogin = document.getElementById("closeLogin");

    // Open Modals
    signInBtn.addEventListener("click", () => {
        signInModal.style.display = "block";
    });

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    // Close Modals
    closeSignIn.addEventListener("click", () => {
        signInModal.style.display = "none";
    });

    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    // Close if clicking outside modal
    window.addEventListener("click", (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = "none";
        }
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});
