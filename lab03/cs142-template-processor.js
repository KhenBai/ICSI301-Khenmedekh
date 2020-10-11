class Cs142TemplateProcessor {
  constructor(template) {
    this.template = template;
  }
  fillIn(dictionary, el) {
    let t = this.template;
    let arr = el.map((elem) => elem.slice(2, elem.length - 2));
    arr.map((el) => {
      let rep = `{{${el}}}`;
      if (dictionary[el]) {
        t = t.replace(rep, dictionary[el]);
      } else {
        t = t.replace(rep, "");
      }
    });
    let tr = document.createElement("tr");
    tr.innerHTML = t;
    return tr;
  }
}
