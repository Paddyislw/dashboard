import data from "../static/tableData.json";
const activeUsers = data.filter((item) => item.status === "Active").length;
const inActiveUsers = data.filter((item) => item.status === "Inactive").length;
const allUsers = data.length;
export const optionForLine = {
  xAxis: {
    data: ["Active", "Inactive", "All"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [activeUsers, inActiveUsers, allUsers],
      type: "line",
    },
  ],
};
export const optionForBar = {
  xAxis: {
    data: ["Active", "Inactive", "All"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [activeUsers, inActiveUsers, allUsers],
      type: "bar",
    },
  ],
};
export const optionForPie = {
  title: {
    text: "Type of users",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      data: [
        { name: "Active", value: activeUsers },
        { name: "Inactive", value: inActiveUsers },
        { name: "All", value: allUsers },
      ],
      type: "pie",
    },
  ],
};

// option = {
//     title: {
//       text: 'Referer of a Website',
//       subtext: 'Fake Data',
//       left: 'center'
//     },
//     tooltip: {
//       trigger: 'item'
//     },
//     legend: {
//       orient: 'vertical',
//       left: 'left'
//     },
//     series: [
//       {
//         name: 'Access From',
//         type: 'pie',
//         radius: '50%',
//         data: [
//           { value: 1048, name: 'Search Engine' },
//           { value: 735, name: 'Direct' },
//           { value: 580, name: 'Email' },
//           { value: 484, name: 'Union Ads' },
//           { value: 300, name: 'Video Ads' }
//         ],
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           }
//         }
//       }
//     ]
//   };
