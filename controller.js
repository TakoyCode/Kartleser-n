// Modell

function addEggs(region) {
    switch (region) {
        case 'north':
            model.eggs.north++;
            break;
        case 'middle':
            model.eggs.middle++;
            break;
        case 'west':
            model.eggs.west++;
            break;
        case 'east':
            model.eggs.east++;
            break;
        case 'south':
            model.eggs.south++;
            break;
    }
    updateView();
}