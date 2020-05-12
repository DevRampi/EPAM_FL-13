const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

const numberClick = 2;
const menu = document.createElement('ul');
menu.classList.add('menu');
rootNode.prepend(menu);

let menuFirstChild = document.createElement('li');
menuFirstChild.classList.add('FirstChild');
menu.append(menuFirstChild);
let menuSecondChild = document.createElement('li');
menuSecondChild.classList.add('SecondChild');
menu.append(menuSecondChild);

let menuSpanOne = document.createElement('span');
menuSpanOne.classList.add('menuSpanOne');
menuSpanOne.innerText = 'Rename';
menuFirstChild.append(menuSpanOne);
let menuSpanTwo = document.createElement('span');
menuSpanTwo.classList.add('menuSpanTwo');
menuSpanTwo.innerText = 'Delete item';
menuSecondChild.append(menuSpanTwo);


    
const documentTree = data => {
  const wrap = document.createElement('ul');
  wrap.classList.add('wrap');
  
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement('li');
    let img = document.createElement('i');
    let text = document.createElement('span');
    let input = document.createElement('input');

    item.classList.add('item');
    img.classList.add('material-icons');
    text.innerText = data[i].title;
    input.classList.add('input');
    input.setAttribute('disabled', 'disabled');

    wrap.append(item);
    item.append(img);
    item.append(text);
    item.append(input);

    if (data[i].folder) {
      let items = document.createElement('ul');
      items.classList.add('items', 'hidden');
      wrap.append(items);

      img.innerText = 'folder';
      img.classList.add('img');

      item.addEventListener('click', () => {
        items.classList.toggle('hidden');
        if (img.innerText === 'folder') {
          img.innerText = 'folder_open';
        } else {
          img.innerText = 'folder';
        }
      });
      
      
rootNode.addEventListener( 'contextmenu', event => {
  event.preventDefault();
  menu.style.top = `${event.clientY}px`;
  menu.style.left = `${event.clientX}px`;
  menu.classList.add('active');
}, false);

document.addEventListener('click', event => {
  if (event.button !== numberClick) {
      menu.classList.remove('active');
  }
}, false);

menu.addEventListener('click', event => {
  event.stopPropagation();
}, false);

menuFirstChild.addEventListener('click', () => {
  console.log('Rename item');
}, false);
menuSecondChild.addEventListener('click', () => {
  console.log('Delete item');
}, false);
      
      if (data[i].children) {
        items.append(documentTree(data[i].children));
      } else {
        let span = document.createElement('span');
        span.innerText = 'Folder is empty';
        span.classList.add('font-italic');
        items.append(span);
      }
    } else {
      img.innerText = 'insert_drive_file';
      img.classList.add('file-img');
    }
  }
  return wrap;
};

rootNode.append(documentTree(data));