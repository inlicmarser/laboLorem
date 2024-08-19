const format = d3.timeFormat;
const formatWeek = format("%b %d");

// Example usage
const date = new Date(2024, 5, 22); // June 22, 2024
console.log(formatWeek(date)); // Output: "Jun 22"
