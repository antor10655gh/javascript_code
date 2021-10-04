let info1 = {
    Name: "Antor",
    Id: "181-15-10655"
}

let info2 = {
	Section: "I",
	Department: "CSE"
}

let info = {...info1, ...info2};

console.log(info);