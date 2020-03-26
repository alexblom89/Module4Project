//COMP-1073 Module 4 Project
//Alex Blom - 867295
//3/26/2020

async function XHR(){
    let requestURL = 'https://alexblom89.github.io/Module4Lab/weird.json';
    let request = new XMLHttpRequest();
    await request.open('GET', requestURL);
    request.responseType = 'json';
    await request.send();
    request.onload = async () => {
        let weirdDeal = await request.response;
        console.log(weirdDeal);
        return weirdDeal;
    }
}


XHR().then((jsonObject) => {

    let weirdItems = jsonObject.weirdItems;

    for(let i = 0; i < weirdItems.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let section = document.querySelector('section');

        img.setAttribute('src', 'https://alexblom89.github.io/Module4Lab/resources/' + weirdItems[i].image);
        img.setAttribute('alt', weirdItems[i].image);
        h2.textContent = weirdItems[i].name;
        p1.textContent = 'Price: ' + weirdItems[i].price;
        p2.textContent = 'Details: ' + weirdItems[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        section.appendChild(article);

    }
});

