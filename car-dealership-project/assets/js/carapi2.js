
const make = prompt("Enter the make:");
const model_family = prompt("Enter the model family:");

// Set fetch URL with CDN instance, API name, customer key, and query parameters
const fetchUrl = `https://cdn.imagin.studio/getImage?customer={inkushgargcompany}&make=${make}&model_family=${model_family}`;

// Make API call using fetch()
fetch(fetchUrl)
  .then(response => response.json())
  .then(data => {
    // Handle response data
    console.log(data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
