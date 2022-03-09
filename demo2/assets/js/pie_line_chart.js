//Dashboard RevenueChart starts here
const revenueChartData = {
    labels: [
      "Appointments",
      "Today's Earning",
      "Monthly Earning"
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [280, 150, 80],
      backgroundColor: [
        'rgb(78 115 223)',
        'rgb(28 200 138)',
        'rgb(54 185 204)'
      ],
      hoverOffset: 4
    }]
};

const revenueChartConfig = {
    type: 'doughnut',
    data: revenueChartData,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10
                }
            }
        }
    }
};

const myrevenueChart = new Chart(
    document.getElementById('myRevenueChart'),
    revenueChartConfig
);
// Dashboard Revenue Chart end here

// Dashboard Appointment History Starts Here
const labels = [
    'Jan',
    'Mar',
    'May',
    'Jul',
    'Sep',
    'Nov',
];
const data = {
    labels: labels,
    datasets: [        
        {
            label: "Earnings 2020",
            lineTension: 0.3,
            backgroundColor: "#fff",
            borderColor: "#FAC032",
            pointRadius: 3,
            pointBackgroundColor: "#FAC032",
            pointBorderColor: "#FAC032",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
          },
          {
            label: "Earnings 2021",
            lineTension: 0.3,
            backgroundColor: "#fff",
            borderColor: "#336CFB",
            pointRadius: 3,
            pointBackgroundColor: "#336CFB",
            pointBorderColor: "#336CFB",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 5000, 10000, 7000, 1000, 40000, 19000, 23000, 35000],
          }
    ]
};
const appointmentHistoryConfig = {
    type: 'line',
    data: data,
    options: {
    }
};
const myAppointmentHistory = new Chart(
    document.getElementById('myAppointmentHistory'),
    appointmentHistoryConfig
);
// Dashboard Appointment History Starts Here