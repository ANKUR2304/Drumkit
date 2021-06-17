var arr=["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"];

for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        kpf(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    kpf(event.key);
});

function kpf(key){
    var soundSource="sounds/";
        switch(key){
            case "w":
                soundSource+=arr[0]+".mp3";
                break;
            case "a":
                soundSource+=arr[1]+".mp3";
                break;
            case "s":
                soundSource+=arr[2]+".mp3";
                break;
            case "d":
                soundSource+=arr[3]+".mp3";
                break;
            case "j":
                soundSource+=arr[4]+".mp3";
                break;
            case "k":
                soundSource+=arr[5]+".mp3";
                break;
            case "l":
                soundSource+=arr[6]+".mp3";
                break;
            default:
                soundSource+=arr[Math.floor(Math.random()*7)]+".mp3";
        }
        var audio=new Audio(soundSource);
        audio.play();
}

