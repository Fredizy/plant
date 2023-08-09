
    //===============Assuming you have the JSON data in a variable named 'plants'
    const plants = [
      {
        "id": "plant001",
        "name": "Rose",
        "description": "Beautiful flowering plant known for its vibrant colors and lovely fragrance.",
        "image": "rose.jpg",
        "price": 15.99,
        "species": "Rosa"
      },
      // ... (other plant objects)
      {
        "id": "plant020",
        "name": "Fiddle Leaf Fig",
        "description": "Trendy indoor tree with large, glossy leaves that add a touch of elegance to any room.",
        "image": "fiddle_leaf_fig.jpg",
        "price": 34.99,
        "species": "Ficus lyrata"
      }
    ];

    const catalog = document.getElementById('catalog');

    plants.forEach(plant => {
      const plantCard = document.createElement('div');
      plantCard.className = 'plant-card';

      const plantImage = document.createElement('img');
      plantImage.className = 'plant-image';
      plantImage.src = plant.image;
      plantImage.alt = plant.name;
      plantCard.appendChild(plantImage);

      const plantName = document.createElement('h2');
      plantName.textContent = plant.name;
      plantCard.appendChild(plantName);

      const plantDescription = document.createElement('p');
      plantDescription.textContent = plant.description;
      plantCard.appendChild(plantDescription);

      const readMoreButton = document.createElement('a');
      readMoreButton.href = '#' + plant.id;
      readMoreButton.className = 'read-more';
      readMoreButton.textContent = 'Read More';
      plantCard.appendChild(readMoreButton);

      catalog.appendChild(plantCard);
    });


    // ================================================