

const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
//let chaptersArray = [];

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = "❌"
    li.append(deleteButton);
    list.append(li)
    deleteButton.addEventListener('click', () => {
        list.removeChild(li)
        deleteChapter(li.textContent);
        input.focus();
        input.value = '';
    });

}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('FavouriteList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    const favouriteList = JSON.parse(localStorage.getItem('FavouriteList'));
    return favouriteList
}

function deleteChapter(chapter) {
    console.log("chapter", chapter)
    chapter = chapter.slice(0, chapter.length - 1);
    console.log("chapterRe", chapter)
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}



button.addEventListener('click', () => {
    console.log("Button click")
    if (input.value != '') {
        console.log("button clicked!")
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
    else {
        alert('Field is empty');
        input.focus();

    }
});



// button.addEventListener('click', () => {
//     console.log("Button click")
//     if (input.value != '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.textContent = input.value;
//         deleteButton.textContent = "❌"
//         li.append(deleteButton);
//         list.append(li)
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li)
//             input.focus();

//             input.focus();
//             input.value = '';
//         })


//     }
//     else {
//         alert('Field is empty');
//         input.focus();

//     }
// });
// button.addEventListener('click', () => { });

