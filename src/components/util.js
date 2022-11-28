export const stringFix = (input) => {
    if (typeof input !== 'string') {
        return input
    } else return input[0].toUpperCase() + input.slice(1).replace('_', ' ') 
};
