class Player {

    isOnAir = false;
    
    walk() {
        console.log('walking faster!');
    }
    
    jump() {
        !isOnAir && console.log("Jump!");
    }
    
}
