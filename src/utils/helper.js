export const isName = name => {
  const re = /^[a-zA-Z0-9_ ]*$/;
  return re.test(String(name).toLowerCase());
};

export const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = password => {
  const re = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Za-z]).*/;
  return re.test(String(password));
};

export const isValidPhone = phone => {
  const re = /^([0-9]{8,15})$/;
  return re.test(String(phone));
};
