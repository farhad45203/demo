const lans = [
    { description: "Capcicum", lanName: "1", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "2", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "3", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "4", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "5", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "6", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "7", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "8", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "9", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "10", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "11", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "12", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "13", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "14", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "15", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "16", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "17", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Capcicum", lanName: "18", height: "37.5px", weight: "100%", bgColour:"#3aff00" },
    { description: "Kaca moric", lanName: "19", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "20", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "21", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "22", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "23", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "24", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "25", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "26", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "27", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "28", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "29", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Kaca moric", lanName: "30", height: "45px", weight: "100%", bgColour:"#ff0013" },
    { description: "Begun", lanName: "31", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "40", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "33", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "34", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "35", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "36", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "37", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "38", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "39", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "40", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "41", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Begun", lanName: "42", height: "45px", weight: "100%", bgColour:"#b600ff" },
    { description: "Sosa", lanName: "43", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "44", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "45", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "46", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "47", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "48", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "49", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "50", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "51", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "52", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "53", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "54", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "55", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "56", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "57", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "58", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "59", height: "30px", weight: "100%", bgColour:"#0417ff" },
    { description: "Sosa", lanName: "60", height: "30px", weight: "100%", bgColour:"#0417ff" },    
];

const plantingLan = document.querySelector(".plantingLan");

plantingLan.innerHTML = ""; // Clear existing content

lans.forEach(lan => {
    const lanItem = document.createElement('div');
    lanItem.classList.add('lan-item');

    lanItem.style.backgroundColor = lan.bgColour;
    lanItem.style.width = lan.weight;
    lanItem.style.height = lan.height;

    lanItem.innerHTML = `
        <p>${lan.description} ${lan.lanName}</p>
    `;

    
    plantingLan.appendChild(lanItem);
});


const pepeLans = [
    { description: "Tomato", lanName: "1", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "1", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "2", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "2", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "3", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "3", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "4", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "4", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "5", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "5", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "6", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "6", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "7", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "7", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "8", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "8", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Tomato", lanName: "9", height: "37.5px", weight: "100%", bgColour:"#ff041b" },
    { description: "Pepe", lanName: "9", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "1", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "10", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "2", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "11", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "3", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "12", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "4", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "13", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "5", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "14", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "6", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "15", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "7", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "16", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "8", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "17", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "9", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
    { description: "Pepe", lanName: "18", height: "30px", weight: "100%", bgColour:"#ffb108" },
    { description: "Fulkopi", lanName: "10", height: "37.5px", weight: "100%", bgColour:"#1ac869" },
]

const papayaTreeArea = document.querySelector(".papayaTreeArea");

papayaTreeArea.innerHTML = ""; // Clear existing content

pepeLans.forEach(pepeLan => {
    const pepeLanItem = document.createElement('div');
    pepeLanItem.classList.add('lan-item');

    pepeLanItem.style.backgroundColor = pepeLan.bgColour;
    pepeLanItem.style.width = pepeLan.weight;
    pepeLanItem.style.height = pepeLan.height;

    pepeLanItem.innerHTML = `
        <p>${pepeLan.description} ${pepeLan.lanName}</p>
    `;

    
    papayaTreeArea.appendChild(pepeLanItem);
});