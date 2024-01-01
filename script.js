let titleValue;
let authorValue;
let pagesValue;
let readValue;
let name;
let bookName;

const myLibrary = [];

function addBookButton(){

    document.querySelector('#btn').disabled = true;
    
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content)
    content.setAttribute('style','margin-left: 35%; position: absolute; border: 4px solid rgb(45,45,45); background-color: rgb(35, 35, 35); border-radius: 10px; display: flex; text-align: center; width: 300px; height: 450px;')

    const painelDiv = document.createElement('div');
    painelDiv.classList.add('painelDiv');
    content.appendChild(painelDiv)
    painelDiv.setAttribute('style','width: 100%; padding:20px;')

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    painelDiv.appendChild(titleDiv);
    titleDiv.textContent = "Add Book"
    titleDiv.setAttribute('style','margin-top: 10px; margin-bottom: 10px; height: 50px; font-size: 30px; color: white; width: 100%;')
    
    const nameInput = document.createElement('input');
    nameInput.classList.add('nameInput');
    painelDiv.appendChild(nameInput);
    nameInput.textContent = "Name"
    nameInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    nameInput.placeholder = 'Title'
    nameInput.setAttribute('id','titleId')
    nameInput.required = true;
    
    const authorInput = document.createElement('input');
    authorInput.classList.add('authorInput');
    painelDiv.appendChild(authorInput);
    authorInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    authorInput.placeholder = 'Author'
    authorInput.setAttribute('id','authorId');
    authorInput.required = true;

    const pagesInput = document.createElement('input');
    pagesInput.classList.add('pagesInput');
    painelDiv.appendChild(pagesInput);
    pagesInput.setAttribute('style','color: white; margin-bottom: 25px; border: none; border-radius: 7px; background-color: rgb(50,50,50); height: 50px; width: 100%;')
    pagesInput.placeholder = 'Pages'
    pagesInput.setAttribute('type','number')
    pagesInput.setAttribute('id','pagesId')
    pagesInput.required = true;

    const isReadDiv = document.createElement('div');
    isReadDiv.classList.add('isReadDiv');
    painelDiv.appendChild(isReadDiv);
    isReadDiv.setAttribute('style','margin-bottom:10px; width: 100%; height: 40px;')

    const labelDiv = document.createElement('label');
    labelDiv.classList.add('labelDiv');
    isReadDiv.appendChild(labelDiv);
    labelDiv.textContent = 'Have you read it?'
    labelDiv.setAttribute('style','color: white; font-size: 20px;')

    const readInput = document.createElement('input');
    readInput.classList.add('readInput');
    isReadDiv.appendChild(readInput);
    readInput.setAttribute('type','checkbox')
    readInput.setAttribute('style','margin-left: 5px; background-color: rgb(45,45,45);')
    readInput.setAttribute('id','readId')
    readInput.required = true;

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirmButton');
    painelDiv.appendChild(confirmButton);
    confirmButton.textContent = "Submit"
    confirmButton.setAttribute('style','margin-right: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancelButton');
    painelDiv.appendChild(cancelButton);
    cancelButton.textContent = "Cancel"
    cancelButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')

    cancelButton.addEventListener('mouseover', () => {
        cancelButton.setAttribute('style','margin-left: 5px; transition: 0.2s; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: black; border: 3px solid white; background-color: rgb(76,0,0);')
    });

    cancelButton.addEventListener('mouseout', () => {
        cancelButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        content.remove();
        document.querySelector('#btn').disabled = false;

    })

    confirmButton.addEventListener('mouseover', () => {
        confirmButton.setAttribute('style','margin-right: 5px; transition: 0.2s; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: black; border: 3px solid white; background-color: white;')
    });

    confirmButton.addEventListener('mouseout', () => {
        confirmButton.setAttribute('style','margin-right: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    });

    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();

        const titleInput2 = document.querySelector('#titleId');
        const authorInput2 = document.querySelector('#authorId');
        const pagesInput2 = document.querySelector('#pagesId');
        const readInput2 = document.querySelector('#readId');

        titleValue = titleInput2.value;
        authorValue = authorInput2.value;
        pagesValue = pagesInput2.value;
        readValue = readInput2.checked;     

        bookName = new addBook(titleValue, authorValue, pagesValue, readValue)

        myLibrary.push(bookName)
        document.querySelector('#btn').disabled = false;
        content.remove();
    })
}

function addBook(titleValue,authorValue,pagesValue,readValue){
    this.titleValue = titleValue;
    this.authorValue = authorValue;
    this.pagesValue = pagesValue;
    this.readValue = readValue;
    this.info = function(){
        console.log(this.titleValue + ' by ' + this.authorValue + ', ' + this.pagesValue + ' pages, ' + this.readValue)
    }
    addBookToLibrary();
}

function addBookToLibrary(){
    const painelItem = document.createElement('div');
    painelItem.classList.add('painelItem');
    container.appendChild(painelItem);
    painelItem.setAttribute('style','color: white; border-radius:7px; border: 3px solid rgb(60,60,60); width: 300px; height: 250px; background-color: rgb(45,45,45);')
    //painelItem.textContent = "Title: " + titleValue + "\n\nAuthor: " + authorValue + "\n\n Pages: " + pagesValue;

    //Titulo no painel

    const painelInfoTitle = document.createElement('div');
    painelInfoTitle.classList.add('painelInfoTitle');
    painelItem.appendChild(painelInfoTitle);
    painelInfoTitle.setAttribute('style','')

    const painelTitle = document.createElement('p');
    painelTitle.classList.add('painelTitle');
    painelInfoTitle.appendChild(painelTitle);
    painelTitle.setAttribute('style','margin-top: 10px; font-size: 35px; color: White')
    painelTitle.textContent = titleValue;

    //Autor no painel

    const painelInfoAuthor = document.createElement('div');
    painelInfoAuthor.classList.add('painelInfoAuthor');
    painelItem.appendChild(painelInfoAuthor);
    painelInfoAuthor.setAttribute('style','b')

    const painelAuthor = document.createElement('p');
    painelAuthor.classList.add('painelAuthor');
    painelInfoAuthor.appendChild(painelAuthor);
    painelAuthor.setAttribute('style','font-size: 15px; color: white')
    painelAuthor.textContent = 'By ' + authorValue;
    
    //Paginas no painel

    const painelInfoPages = document.createElement('div');
    painelInfoPages.classList.add('painelInfoPages');
    painelItem.appendChild(painelInfoPages);
    painelInfoPages.setAttribute('style','')

    const painelPages = document.createElement('p');
    painelPages.classList.add('painelPages');
    painelInfoPages.appendChild(painelPages);
    painelPages.setAttribute('style','color: white; margin-bottom: 10px;')
    painelPages.textContent = pagesValue + ' pages';

    //Lido no painel
/*
    const painelInfoRead = document.createElement('div');
    painelInfoRead.classList.add('painelInfoRead');
    painelItem.appendChild(painelInfoRead);
    painelInfoRead.setAttribute('style','')

    const painelRead = document.createElement('p');
    painelRead.classList.add('painelRead');
    painelInfoRead.appendChild(painelRead);
    painelRead.setAttribute('style','color: white; margin-bottom: 10px;')
    painelRead.textContent = readValue;
*/
    const painelButton = document.createElement('div');
    painelButton.classList.add('painelButton');
    painelItem.appendChild(painelButton);
    painelButton.setAttribute('style','margin-top: 100px;')

    const painelDeleteButton = document.createElement('button');
    painelDeleteButton.classList.add('painelDeleteButton');
    painelButton.appendChild(painelDeleteButton);
    painelDeleteButton.setAttribute('style','margin-right: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    painelDeleteButton.textContent = 'Delete'

    painelDeleteButton.addEventListener('mouseover', () => {
        painelDeleteButton.setAttribute('style','margin-right: 5px; transition: 0.2s; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(35,35,35);')
    })

    painelDeleteButton.addEventListener('mouseout', () => {
        painelDeleteButton.setAttribute('style','margin-right: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    })

    painelDeleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        painelItem.remove();
    })

    const painelReadButton = document.createElement('button');
    painelReadButton.classList.add('painelReadButton');
    painelButton.appendChild(painelReadButton);
    painelReadButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: rgb(45,45,45);')
    painelReadButton.setAttribute('id','readButton');
    painelReadButton.setAttribute('class','readButton');

    if(readValue == false){
        painelReadButton.textContent = 'Not Read';
        painelReadButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: red;')
    }else{
        painelReadButton.textContent = 'Read';
        painelReadButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: green;')
    }

    painelReadButton.addEventListener('click', () => {
        if(readValue == false){
            greenButton();
        }else {
            redButton();
        }
    })

    function redButton(){
        painelReadButton.textContent = 'Not Read';
        painelReadButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: red;')
        readValue = false;
    }

    function greenButton(){
        painelReadButton.textContent = 'Read';
        painelReadButton.setAttribute('style','margin-left: 5px; font-size: 17px; cursor: pointer; height: 50px; width: 40%;border-radius: 7px; color: white; border: 3px solid white; background-color: green;')
        readValue = true;
    }
} 