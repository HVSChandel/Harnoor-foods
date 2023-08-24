const searchBar = document.getElementById('searchBar');
const popup = document.getElementById('popupWindow');
const suggestionsList = document.getElementById('suggestions');

// Show popup when search bar is clicked
//searchBar.addEventListener('click', () => {
    //popup.style.display = 'block';
    //document.body.style.overflow = 'hidden';
//});



// Close the popup
function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const products = [
    'Product A',
    'Product B',
    'Product C',
    'Another Product',
    'Some Product',
    'Different Product',
];

// Function to display suggestions based on search query
function showSuggestions() {
    const enteredValue = searchBar.value.toLowerCase();
    const matchingProducts = products.filter(product => product.toLowerCase().includes(enteredValue));

    suggestionsList.innerHTML = ''; // Clear previous suggestions
    matchingProducts.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = product;
        suggestionsList.appendChild(li);
    });
}

// Event listener for search input
searchBar.addEventListener('input', () => {
    showSuggestions();
});

// Event listener for clicking on a suggestion
suggestionsList.addEventListener('click', (event) => {
    const selectedValue = event.target.textContent;
    searchBar.value = selectedValue;
    suggestionsList.innerHTML = ''; // Clear suggestions after selecting one
});
