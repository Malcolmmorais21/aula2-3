let a = [[2, 4, 5, 1, 4],[7, 6, 5, 4, 3],[6, 7, 4, 3, 2]
];

let b = [[2, 4, 5, 1, 4],[7, 6, 5, 4, 3],[6, 7, 4, 3, 2]
];

let c = [];

for (let i = 0; i < 3; i++) {
    c[i] = [];

    for (let j = 0; j < 5; j++) {
        c[i][j] = a[i][j] + b[i][j];
    }
}

console.log("Matriz A:");
for (let i = 0; i < 3; i++) {
    console.log(a[i]);
}

console.log("Matriz B:");
for (let i = 0; i < 3; i++) {
    console.log(b[i]);
}

console.log("Matriz C (A + B):");
for (let i = 0; i < 3; i++) {
    console.log(c[i]);
}
