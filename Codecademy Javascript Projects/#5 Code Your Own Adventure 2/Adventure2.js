var user = prompt("What do you do for fun?").toUpperCase();

switch (user){
    case 'exercise':
        if(user === 'exercise' && user === 'eat'){
    console.log("For the heart!");
    }else{
        console.log("Great!");
    }
    break;
        
    case 'eat':
        if(user === 'eat' || user === 'play video games'){
    console.log("For the stomach!");
    }else{
        console.log("Don't forget to exercise!");
    }
    break;
    
    case 'play video games':
    console.log("For the eyes!");
    break;
    
    default:
    console.log("Awesome, that's what I like to do!");
    break;
    
}