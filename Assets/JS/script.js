// Select all buttons
const buttons = document.querySelectorAll('.myBtn');
const images = document.querySelectorAll('.food-container .img img');

// Add event listener to each button
buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('You clicked a button!');
        });

        images.forEach((image) => {
            image.addEventListener('mouseover', () => {
                image.classList.add('img-zoom');
            });
        
            image.addEventListener('mouseout', () => {
                image.classList.remove('img-zoom');
            }); 
        });
    }); 
