const form = document.forms.full;
form.onsubmit = function (e){
    e.preventDefault();

    const wrapper = document.createElement('div');
    const name = document.createElement('div');
    const surname = document.createElement('div');
    const age = document.createElement('div');

    name.innerText = `Name:${this.name.value}`
    surname.innerText = `Surname :${this.surname.value}`
    age.innerText = `Age :${this.age.value}`

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    wrapper.append(name, surname,age);
    document.body.appendChild(wrapper);


    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';


    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';
}