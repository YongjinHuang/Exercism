/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    switch (remainingTime) {
        case undefined:
            return 'You forgot to set the timer.'
        case 0:
            return 'Lasagna is done.'
        default:
            return 'Not done, please wait.';
    }
}

export function preparationTime(layers, timePerLayerInMinutes = 2) {
    return layers.length * timePerLayerInMinutes;
}

export function quantities(layers) {
    return layers.reduce((acc, layer) => {
        if (layer === 'noodles') {
            acc.noodles += 50;
        }
        if (layer === 'sauce') {
            acc.sauce += 0.2;
        }
        return acc;
    }, { noodles: 0, sauce: 0 });
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    return Object.fromEntries(
        Object.entries(recipe).map(([k, v]) => [k, v * portions / 2])
    );
}