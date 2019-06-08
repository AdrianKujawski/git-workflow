class Player {

    ammo = 0;
    isOnAir = false;
    
    walk() {
        console.log('walking faster!');
    }
    
    jump() {
        !isOnAir && console.log("Jump!!!!");
    }

    shoot() {
        if (ammo > 0) console.log('fire!');
    }
    
}
