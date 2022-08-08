const saveFormInStorage = () => {
  const saveForm = (form) => { // запись в Local Starage
    const formName = form.id;
    const formData = new FormData(form);
    const object = {};

    formData.forEach(function (value, key) {
      object[key] = value;
    });

    const json = JSON.stringify(object);
    localStorage.setItem('form[' + formName + ']', json);
  };

  const synchronizeForm = (formName) => { // обновление данных
    const form = document.getElementById(formName);

    form.addEventListener('submit', (evt) => {
      saveForm(evt.target);
    });
  };

  synchronizeForm('bookingForm');
};

export {saveFormInStorage};
