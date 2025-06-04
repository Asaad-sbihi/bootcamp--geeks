function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();


// resolveAfter2Seconds()

// C’est une fonction qui retourne une Promise.

// Cette promesse se résout après 2 secondes (2000 ms), avec la valeur "resolved".

// asyncCall()

// Fonction asynchrone (déclarée avec async).

// Elle commence par afficher "calling" dans la console.

// Ensuite, elle attend (await) la résolution de resolveAfter2Seconds(), ce qui prend 2 secondes.

// Une fois la promesse résolue, elle stocke la valeur "resolved" dans result.

// Puis elle affiche result (donc "resolved") dans la console.