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
var index = 0; // başlangıç index'i. Sayfa yüklendiğinde bunu kullanacağım.
var prev; // önceki index'i tutacak.



// sayfa yüklendiğinde index = 0 olan fotoğraf bilgilerini getir. default değer kullandım.
window.onload = function(){
    image.setAttribute('src', `${photos[index].link}`);   
    cardTitle.textContent = `${photos[index].title}`;
}


// shuffle'a basıldığında random index oluştur.

shuffle.addEventListener('click',function(){

    console.log("Önceki İndex:",prev); // önceki index'i yaz. Kontrol amaçlı

    do {
        index = Math.floor(Math.random()*3); //0-2 arası (0 ve 2 dahil) yeni bir index oluştur.

    }while(prev == index) /* önceki index üretilen index'e eşit olduğu sürece DO ile index üret. 
                            Bu sayede önceki index ile üretilen index'İn farklı olduğundan emin oldum */
    
    console.log("Üretilen index:",index); // üretilen index'i yaz. Kontrol amaçlı.

    prev = index; // üretilen index'i bir sonraki karşılaştırma için prev'de sakla.
    
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
    console.log('gelen index', index); //gelen index'i kontrol etmek için.
    image.setAttribute('src', `${photos[index].link}`);
    cardTitle.textContent = `${photos[index].title}`;

}






