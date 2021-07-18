// fotoğraflarım ve bilgileri
var photos = [
    {
        title : 'Resim-1',
        link : 'images/1.jpeg'
    },
    {
        title : 'Resim-2',
        link : 'images/2.jpeg'
    },
    {
        title : 'Resim-3',
        link : 'images/3.jpeg'
    }
];

// tanımlamalar
const shuffle = document.querySelector('.btn-primary');
const image = document.querySelector('.card-img-top');
const card = document.querySelector('.card');
const cardTitle = document.querySelector('.card-title');
var index = 0;
var prev; // önceki index'i tutacak



// sayfa yüklendiğinde index = 0 olan fotoğraf bilgilerini getir. default değer kullandım.
window.onload = function(){
    image.setAttribute('src', `${photos[index].link}`);   
    cardTitle.textContent = `${photos[index].title}`;
}


// shuffle'a basıldığında random index oluştur.
shuffle.addEventListener('click',function(){

    console.log("Önceki İndex:",prev); // önceki index'i yaz

    do {
        index = Math.floor(Math.random()*3);//0-2 arası (2 dahil)yeni bir index oluştur.

    }while(prev == index) // önceki index retilen index'e eşit olduğu sürece DO ile index üret
    console.log("Üretilen index:",index); // üretilen index'i yaz

    prev = index; // üretilen index'i karşılaştırma için prev'de sakla.
    
    /* 
    // burası iptal. 
    console.log('üretilen index', index)
    console.log('prev', prev.slice(-1)[0]);
    prev.push(index);
    console.log(prev); 
    */
// random index'i foto gösterme fonksiyonuna gönder.

    show(index);// index'i resim gösterme fonkiyonuna gönder
    
  
})

function show(index){
    //console.log('gelen index', index); gelen index'İ kontrol içindi.
    image.setAttribute('src', `${photos[index].link}`);
    cardTitle.textContent = `${photos[index].title}`;

}






