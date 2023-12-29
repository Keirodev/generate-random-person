class GenerateRandomPerson {
  constructor() {
    this.pictures = []
  }

  async getImage(nbImage) {
    try {

      const response = await fetch(`https://randomuser.me/api/?results=${nbImage}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const jsonResponse = await response.json()
      // console.log(jsonResponse)

      let elementsToAdd = ''
      jsonResponse.results.forEach(result => {
        elementsToAdd += `<div class="person-card">
          <img src="${result.picture.large}" alt="${result.name.first}">
        </div>`;
      })


      document.getElementById('root').innerHTML = elementsToAdd;
    } catch (error) {
      console.error(error);
    }
  }
}
