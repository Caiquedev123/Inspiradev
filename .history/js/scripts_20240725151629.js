document.addEventListener('DOMContentLoaded', () => {
    const plants = [
        { name: 'Monstera Deliciosa', description: 'Easy to care for and grows fast.', image: 'images/monstera.jpg' },
        { name: 'Snake Plant', description: 'Great for beginners, very low maintenance.', image: 'images/snakeplant.jpg' },
        // Add more plants here
    ];

    const plantList = document.getElementById('plant-list');
    
    plants.forEach(plant => {
        const plantDiv = document.createElement('div');
        plantDiv.classList.add('plant');
        
        const plantName = document.createElement('h3');
        plantName.textContent = plant.name;
        
        const plantDesc = document.createElement('p');
        plantDesc.textContent = plant.description;
        
        const plantImg = document.createElement('img');
        plantImg.src = plant.image;
        plantImg.alt = plant.name;
        
        plantDiv.appendChild(plantName);
        plantDiv.appendChild(plantDesc);
        plantDiv.appendChild(plantImg);
        
        plantList.appendChild(plantDiv);
    });
});