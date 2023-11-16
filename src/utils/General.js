const singularize = (word) => {
    // Check if the word ends with 's'
    if (word.endsWith('s')) {
        // Remove the 's' from the end
        return word.slice(0, -1);
    }
    // If not plural, return the word as it is
    return word;
}

export default singularize;