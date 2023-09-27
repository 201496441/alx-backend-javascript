export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    task = true;     // No need to redeclare with let or var inside the block
    task2 = false;   // No need to redeclare with let or var inside the block
  }

  return [task, task2];
}
