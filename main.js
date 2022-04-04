//jquery equivalent of document.createElement
//create a new element
let div = $('<div>Hello, world</div>');

//jquery equivalent of document.querySelector
//get an existing element from the DOM
let body = $('body');

//jquery equivalent of appendChild
//insert element in parenthesis() inside of element that you are calling the method on
body.append(div);

//jquery equivalent of addEventListener
div.on('click', function () {
    alert("Hello, world");
    console.log('It is working!');
});
//div2
let div2 = $('<div>Hi, Just an emoty div, nonthing fancy</div>');
let c=$('<canvas id="myChart"></canvas>');
div2.append(c);
body.append(div2);
//Canvas



const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
