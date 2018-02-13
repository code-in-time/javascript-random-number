/**
 * This is script that will generate 7 unique numbers
 * 
 */

var uniqueNumberBuilder = {

    /**
     * This is the amount of numbers that the can be created
     */
    maxNumberCount: 7,

    /**
     * This will hold the final array of unique numbers
     */
    finalUniqueNumbers: [],

    /**
     * Get a random number between 0 and 9
     */
    getNumber0to9: function () {
        return Math.floor((Math.random() * 10))
    },

    /**
     * Check if this number exists in the array
     * @param n - int
     * @param arr - array 
     * 
     * @return a boolean value to indicate if the number already exists
     */
    CheckIfNumberExists: function(arr, n) {
        var i,
        arrLength = arr.length,

        doesNumExist = false;

        // Loop over the array
        for (i=0; i<arrLength; i++) {
            // Check if the 'getNumb' number exists in the 'finalUniqueNumbers' array
            if (n===arr[i]) {
                // The number exists
                // Exit and get a new number
                doesNumExist = true;
                break;
            }

        }

        return doesNumExist;

    },

    /**
     * Make the random number array
     */
    makeUniqueArray: function(){
        var rn = this.getNumber0to9();

        // Check if the number exists in the array
        if (this.CheckIfNumberExists(this.finalUniqueNumbers, rn)===false) {
            // The number does not exist
            // Add it to the array
            this.finalUniqueNumbers.push(rn);
        }

        if (this.finalUniqueNumbers.length<this.maxNumberCount) {
            //Use recursion to make a new number
            this.makeUniqueArray();
        }
    },

    /**
     * Build the lotto numbers
     * @return the unique set of numbers
     */
    build: function () {

        var result;
        // Make the uniques numbers.
        this.makeUniqueArray();
        // Log the final numbers. 
        console.log(this.finalUniqueNumbers);
        // Create a copy of the final numbers so that they become
        // a value and are not reset
        result =  this.finalUniqueNumbers.slice();
        // Reset the array with the values
        this.finalUniqueNumbers = [];

        // Return the final numbers
        return result;
    }
};

uniqueNumberBuilder.build();
