let header = document.querySelector('#page-header')
header.style.textAlign="left"
// Select some elements...

let dogImages = document.querySelectorAll('.dog-image')
//creates and array called dogImages of all dog images with the class "dog-image" using the class selector "."
for(let i = 0; i < dogImages.length; i++)
{
    dogImages[i].style.borderRadius = '50px'
}

let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++)
{
    dogName[i].style.textAlign="left"
}

let footer = document.querySelector('.footer')
footer.style.color="green"

let dogImagesFlip = document.querySelectorAll('.dog-image')
//creates and array called dogImagesFlip
for(let i = 0; i < dogImagesFlip.length; i++)
{
    dogImagesFlip[i].style.transform="scaleY(-1)"
}

//adding comment for change