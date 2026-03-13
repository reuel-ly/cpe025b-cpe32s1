/**
 * Solves the Tower of Hanoi puzzle recursively.
 *
 * @param {number} n The number of discs to move.
 * @param {string} source The name of the source peg (e.g., 'A').
 * @param {string} auxiliary The name of the auxiliary/spare peg (e.g., 'B').
 * @param {string} destination The name of the destination peg (e.g., 'C').
 */
function towerOfHanoi(n, source, auxiliary, destination) {
  // Base case: If there is only 1 disc, move it directly from source to destination.
  if (n === 1) {
    console.log(`Move disc 1 from ${source} to ${destination}`);
    return;
  }

  // Step 1: Move n-1 discs from source to auxiliary, using destination as the auxiliary peg.
  towerOfHanoi(n - 1, source, destination, auxiliary);

  // Step 2: Move the largest (nth) disc from source to destination.
  console.log(`Move disc ${n} from ${source} to ${destination}`);

  // Step 3: Move the n-1 discs from auxiliary to destination, using source as the auxiliary peg.
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const numberOfDiscs = 3;
const sourcePeg = 'A';
const auxiliaryPeg = 'B';
const destinationPeg = 'C';

console.log(`\n--- Tower of Hanoi for ${numberOfDiscs} discs ---`);
towerOfHanoi(numberOfDiscs, sourcePeg, auxiliaryPeg, destinationPeg);
console.log('--- End of moves ---');
