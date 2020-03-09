const user = {
    id: 120,
    name: "Jon",
    address: "123 Main St"
};

// Method: 1
for(key in user) {
    console.log(key);
}

// Method: 2
Object.keys(user).forEach(key => console.log(key));

Object.entries(user).forEach((key, value)  => console.log(key));

