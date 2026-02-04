let customers = [
    {
        name: "Mario Rodriguez",
        email: "mariorgz@gmail.com",
        purchases: ["protein shake", "acai bowl", "granola bar"]
    },
    {
        name: "Francesco Plazza",
        email: "fplazza@hotmail.com",
        purchases: ["acai bowl", "flatbread"]
    },
    {
        name: "Elizabeth Bartow",
        email: "elliebartow123@gmail.com",
        purchases: ["acai bowl", "green juice", "ham sandwich"]
    }
];

customers.push({
    name: "Araceli Roman",
    email: "aroman04@yahoo.com",
    purchases: ["protein shake", "flatbread", "burrito bowl"]
});

customers.shift(0)

ellie = customers.find(customer => customer.name === "Elizabeth Bartow");
if (ellie) {
    ellie.email = "elliebupdated@gmail.com";
}

plazza = customers.find(customer => customer.name === "Francesco Plazza");
if (plazza) {
    plazza.purchases.push("protein shake");
}

customers.forEach(customer => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
});