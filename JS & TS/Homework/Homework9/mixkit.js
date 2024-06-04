let arr = document.querySelector('.item-grid__items');
if (arr) {
    let items = arr.children;

    for (let item of items) {
        let containerDiv = item.querySelector('.item-grid-card');
        if (!containerDiv) {
            console.log('Container div not found');
            continue;
        }

        let songNameElement = containerDiv.querySelector('.item-grid-card__title');
        let songName = songNameElement ? songNameElement.innerText.trim() : 'Unknown';

        let authorNameElement = containerDiv.querySelector('.item-grid-music-preview__author');
        let authorName = authorNameElement ? authorNameElement.innerText.trim() : 'Unknown';

        let songLinkElement = containerDiv.querySelector('audio');
        let songLink = songLinkElement ? songLinkElement.src : 'No link';

        console.log(`Song Name: ${songName}`);
        console.log(`Author: ${authorName}`);
        console.log(`Link: ${songLink}`);
    }
} else {
    console.log('Item grid not found');
}