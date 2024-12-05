document.getElementById('upload-button').addEventListener('click', function() {
  document.getElementById('upload-input').click();  
});

document.getElementById('upload-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
    
  if (file) {
      const reader = new FileReader();
      
      reader.onloadend = function() {
          const imageUrl = reader.result;
          //bu calismiyor buraya api entegre edecegiz.
          const googleLensUrl = `https://lens.google.com/search?ep=gisbubb&hl=en-TR&re=df&p=${encodeURIComponent(imageUrl)}`;
          window.open(googleLensUrl, '_blank');
      };
      
      reader.readAsDataURL(file);
  } else {
      alert("No image selected.");
  }
});
