function load(src , callback){
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = () =>{
        callback(88)
        console.log(src);
    }

    document.body.appendChild(script);
}

function meth(temp){
    console.log("I am a call back method " + temp);
}

load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , meth)
