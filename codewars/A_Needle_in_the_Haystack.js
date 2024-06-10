//Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]--> "found the needle at position 5"
const findNeedle = (haystack) => {
    let index = -1;
    haystack.map((t, i) => {
        if (t === 'needle') {
            index = i;
        }
    });
    return index !== -1 ? `found the needle at position ${index}` : 'needle not found';
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));