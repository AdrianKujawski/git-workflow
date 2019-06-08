class Player {

    isOnAir = false;
    
    walk() {
        console.log('walking...');
    }
    
    jump() {
        !isOnAir && console.log("Jump!");
    }
    
}
