let MCUEl = document.getElementById('mcu-app')!;
let nxtBtn = document.getElementById('nxt-btn')!;
let preBtn = document.getElementById('pre-btn')!;
const url = "https://mcuapi.herokuapp.com/api/v1/movies";
const p = fetch(url)
.then(response => {
    return response.json();
}).then(marvel => {
    let i = -1;
    nxtBtn.addEventListener('click', function(e){
        e.preventDefault();
        MCUEl.innerHTML = "";
        i++;
        preBtn.disabled = false;
        foo();
         if (i >= 39) {
             nxtBtn.disabled = true;
         }
             if (i <= 38) {
             nxtBtn.disabled = false;
        }

    })

    preBtn.addEventListener('click', function(e){
        e.preventDefault();
        MCUEl.innerHTML = "";
        foo();
        nxtBtn.disabled = false;
        if (i <= 0) {
            preBtn.disabled = true;
        }
        if (i >= 1) {
            preBtn.disabled = false;
            i--
        }
    })

    //for(let i = 0; i < marvel.data.length; i++){
    const foo = function(){
        let div1 = document.createElement('div') as HTMLElement;
        let info = document.createElement('p') as HTMLParagraphElement;
        let release = document.createElement('p') as HTMLParagraphElement;
        let img = document.createElement("div") as HTMLElement;
        let title = document.createElement('h2') as HTMLElement;

        MCUEl.append(div1, title, info, release, img);

        div1.className = 'card';
        info.className = 'info hidden';
        img.className = 'cover-img';
        title.className = 'title hidden';
        release.className = 'release hidden';

        info.innerHTML = marvel.data[i].overview;
        title.innerHTML = marvel.data[i].title;
        release.innerHTML = marvel.data[i].release_date;
        img.innerHTML = marvel.data[i].cover_url;


        //div1.innerHTML = (`Title: ${marvel.data[i].title} <br />`); 
        info.innerHTML = (`info: ${marvel.data[i].overview} <br />`);
        release.innerHTML = (`release date: ${marvel.data[i].release_date}<br />`); 
        img.innerHTML = (`<img class="cover" src="${marvel.data[i].cover_url}">`);
    }
})
