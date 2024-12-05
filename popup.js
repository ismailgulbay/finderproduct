document.getElementById('findProductBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('image-upload');
  const file = fileInput.files[0];

  if (file) {
      const formData = new FormData();
      formData.append('image', file);

      const reader = new FileReader();
      reader.onloadend = function() {
          const imageUrl = reader.result;
          window.open(`https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}`, '_blank');
      };
      reader.readAsDataURL(file);
  } else {
      alert("Please select an image to upload.");
  }
});
