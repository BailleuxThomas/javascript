for (let i=1; i<6; i++){
    let image =`image${i}`;
    const img = document.getElementById(image);
    
    img.addEventListener("mouseenter", function(){
    img.setAttribute('src', `${image}.png`);
    });
    }
