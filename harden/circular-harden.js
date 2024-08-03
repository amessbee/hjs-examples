require('ses');

lockdown();

const nodeA = { value: 'A' };
const nodeB = { value: 'B', next: nodeA };
nodeA.next = nodeB;

// Harden the circular structure
harden(nodeA);

// Attempt to modify the circular structure
try {
  nodeA.value = 'New A';
} catch (error) {
  console.error('Error:', error.message);
}

try {
  nodeA.next.value = 'New B';
  nodeB.next.value = 'New B->A';
} catch (error) {
  console.error('Error:', error.message);
}

console.log(nodeA);
console.log(nodeB);