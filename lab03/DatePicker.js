class DatePicker {
  constructor(id, logger) {
    this.id = id;
    this.logger = logger;
    this.fixedDate = {};
  }

  render(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.fixedDate.year = date.getFullYear();
    this.fixedDate.month = date.getMonth();
    this.fixedDate.day = date.getDate();
    let all_days = alldays(this.fixedDate.year, this.fixedDate.month);
    this.el = window.document.getElementById(this.id);
    this.el.innerHTML = `<div><div class="button" onclick='${
      this.id
    }.render(new Date("${
      date.getMonth() > 0 ? date.getMonth() : 12
    }/${date.getDate()}/${
      date.getMonth() > 0 ? date.getFullYear() : date.getFullYear() - 1
    }"))'>&#8592</div>${months.filter(
      (el, ind) => ind === this.fixedDate.month
    )} ${this.fixedDate.year}<div class="button" onclick='${
      this.id
    }.render(new Date("${
      date.getMonth() < 11 ? date.getMonth() + 2 : 1
    }/${date.getDate()}/${
      date.getMonth() < 11 ? date.getFullYear() : date.getFullYear() + 1
    }"))'>&#8594;</div></div>`;
    this.el.innerHTML =
      this.el.innerHTML +
      "<div><div>su</div><div>mo</div><div>tu</div><div>we</div><div>th</div><div>fr</div><div>sat</div></div>";
    this.el.innerHTML = this.el.innerHTML + "<div></div>";
    all_days.map((el) => {
      this.el.lastChild.innerHTML =
        this.el.lastChild.innerHTML +
        `<div class="d${el.ind} ${
          el.day === this.fixedDate.day ? "active" : ""
        }" onclick='${this.id}.render(new Date("${date.getMonth() + 1}/${
          el.day
        }/${date.getFullYear()}"))'>${el.day}</div>`;
    });
    this.logger(this.id, this.fixedDate);
  }
}
alldays = function (year, month) {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push({ day: date.getDate(), ind: date.getDay() });
    date.setDate(date.getDate() + 1);
  }
  return days;
};
