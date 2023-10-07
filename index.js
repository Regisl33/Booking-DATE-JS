const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
};

//convert date
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//convert input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    let dayFormat = day.toISOString().split("T")[0];
    end_date.value = dayFormat;
  }
  bookingCalc();
});
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
  bookingCalc();
});
