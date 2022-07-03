const feedbackEl = document.forms.feedback;

// const fullname1El = feedbackEl.elements[0];    // bad practice
// console.log(fullname1El);
// // (OR)
// const fullnameEl = feedbackEl.elements.fullname;
// console.log(fullnameEl);
// // (OR)
// const fullnameEl = feedbackEl.fullname;
// console.log(fullnameEl);
// // (OR)
// Object Destructing :
const { fullname, type, email, description, terms } = feedbackEl.elements;
console.log(fullname, type, email, description, terms);

// const fullnameEl = feedbackEl.elements.fullname;
// const typeEl = feedbackEl.elements.type;
// const emailEl = feedbackEl.elements.email;
// const description = feedbackEl.elements.description;
// const terms = feedbackEl.elements.terms;

// console.log(fullnameEl, typeEl, emailEl, description, terms);
