var inverted = false;


function Invert(){
    if(inverted){
        document.documentElement.style.setProperty('--bg', "#F0F0F0");
        document.documentElement.style.setProperty('--bg2', "#EAEAEA");
        document.documentElement.style.setProperty('--bg3', "#DEDEDE");
        document.documentElement.style.setProperty('--font', "#000");
        document.documentElement.style.setProperty('--accent', "#3875B7");
        document.documentElement.style.setProperty('--accent2', "#DF643A");
        inverted = false;
    }
    else{
        document.documentElement.style.setProperty('--bg', "#101010");
        document.documentElement.style.setProperty('--bg2', "#202020");
        document.documentElement.style.setProperty('--bg3', "#303030");
        document.documentElement.style.setProperty('--font', "#f0f0f0");
        document.documentElement.style.setProperty('--accent', "#3875B7");
        document.documentElement.style.setProperty('--accent2', "#DF643A");
        inverted = true;
    }
}

Invert();