document.addEventListener('DOMContentLoaded', function() {
    var slider1 = document.getElementById('slider1');
    var slider1Value = document.getElementById('slider1Value');
    var slider2 = document.getElementById('slider2');
    var slider2Value = document.getElementById('slider2Value');
    var slider3 = document.getElementById('slider3');
    var slider3Value = document.getElementById('slider3Value');
    var slider4 = document.getElementById('slider4');
    var slider4Value = document.getElementById('slider4Value');
    var imageUpload = document.getElementById('imageUpload');
    var uploadedImage = document.getElementById('uploadedImage');

    var sliders = [slider1, slider2, slider3, slider4];
    sliders.forEach(function(slider) {
        slider.classList.add('slider');
    });

    uploadedImage.classList.add('uploaded-image');

    chrome.storage.sync.get(['slider1Value', 'slider2Value', 'slider3Value', 'slider4Value', 'dropdownValue'], function(data) {
        slider1.value = data.slider1Value || 92;
        slider1Value.textContent = slider1.value;
        slider2.value = data.slider2Value || 75;
        slider2Value.textContent = slider2.value;
        slider3.value = data.slider3Value || 100;
        slider3Value.textContent = slider3.value;
        slider4.value = data.slider4Value || 165;
        slider4Value.textContent = slider4.value;

    });

    slider1.addEventListener('input', function() {
        slider1Value.textContent = slider1.value;
        chrome.storage.sync.set({ 'slider1Value': slider1.value });
    });

    slider2.addEventListener('input', function() {
        slider2Value.textContent = slider2.value;
        chrome.storage.sync.set({ 'slider2Value': slider2.value });
    });

    slider3.addEventListener('input', function() {
        slider3Value.textContent = slider3.value;
        chrome.storage.sync.set({ 'slider3Value': slider3.value });
    });

    slider4.addEventListener('input', function() {
        slider4Value.textContent = slider4.value;
        chrome.storage.sync.set({ 'slider4Value': slider4.value });
    });

    dropdown.addEventListener('change', function() {
        var selectedOption = dropdown.value;
        chrome.storage.sync.set({ 'dropdownValue': selectedOption });
    });

    imageUpload.addEventListener('change', function(event) {
        handleFileUpload(event.target.files[0]);
    });

    uploadedImage.addEventListener('dragover', function(event) {
        event.preventDefault();
        uploadedImage.classList.add('drag-over');
    });

    uploadedImage.addEventListener('dragleave', function(event) {
        event.preventDefault();
        uploadedImage.classList.remove('drag-over');
    });

    uploadedImage.addEventListener('drop', function(event) {
        event.preventDefault();
        uploadedImage.classList.remove('drag-over');
        handleFileUpload(event.dataTransfer.files[0]);
    });

    function handleFileUpload(file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});