//opera di riferimento: https://www.arts-in-the-city.com/2023/12/07/disparition-de-vera-molnar-lexposition-hommage-de-la-galerie-la-galerie-8-4/

function setup() {
  createCanvas(windowWidth, windowHeight); // schermo che si adatta
  background(255); // Imposta lo sfondo bianco

  let r = 10; 
  let diameter = r * 2; // raggio e diametro dei cerchi
  let rows = floor(height / diameter); // righe
  let cols = floor(width / diameter); // colonne
  let centerRow = floor(rows / 2);
  let centerCol = floor(cols / 2);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * diameter + r; 
      let y = i * diameter + r; // Posizione x e y al centro 

      // cerchi verticali e orizzontali
      let distanceFromVerticalCenter = abs(j - centerCol);
      let distanceFromHorizontalCenter = abs(i - centerRow);
      let minDistance = min(distanceFromVerticalCenter, distanceFromHorizontalCenter);

      // Spessore del cerchio che diminuisce gradualmente con la distanza dalla linea centrale
      let maxThickness = 15; // Spessore massimo 
      let minThickness = 1;  // Spessore minimo
      let thicknessVariation = map(minDistance, 0, max(centerRow, centerCol), maxThickness, minThickness);
      let randomThickness = random(thicknessVariation / 2, thicknessVariation); // metto casuale lo spessore in base alla distanza

      strokeWeight(randomThickness); // 
      noFill(); //nessun riempimento
      ellipse(x, y, diameter, diameter); // cerchio
    }
  }
}

