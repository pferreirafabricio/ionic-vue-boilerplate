/* eslint-disable no-useless-escape */
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex = /(.+){5,60}/;
const nameRegex = /([a-zA-Z]){2,60}/;
const telephoneRegex = /(\([1-9][1-9]{1}\))([\d\s\-?]{8,11})/;
const cpfRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
const cnpjRegex = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;
const cepRegex = /\d{5}\-\d{3}/;
const addressNumberRegex = /(\d){1,4}/;
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
/**
 * @definition YYYY/MM/DD
 */
const dateRegex = /([2][0][1-2][0-9]{1})\-([0-1][0-9]{1})\-([0-3][0-9]{1})/;

const defaultAcceptedFilesTypes = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export default {
  email(email) {
    return (
      email !== null
      && emailRegex.test(email)
      && email.length <= 80
    );
  },
  password(password) {
    return (
      password !== null
      && passwordRegex.test(password)
      && password.length <= 60
    );
  },
  name(name) {
    return (
      name !== null
      && nameRegex.test(name)
      && name.length <= 60
    );
  },
  date(date) {
    return (
      date !== null
      && dateRegex.test(date)
    );
  },
  telephone(telephone) {
    return (
      telephone !== null
      && telephoneRegex.test(telephone)
      && telephone.length >= 14
      && telephone.length <= 15
    );
  },
  cpf(cpf) {
    return (
      cpf !== null
      && cpfRegex.test(cpf)
      && cpf.length === 14
    );
  },
  cnpj(cnpj) {
    return (
      cnpj !== null
      && cnpjRegex.test(cnpj)
      && cnpj.length === 18
    );
  },
  rg(rg) {
    return (
      rg !== null
      && rg.length >= 10
      && rg.length <= 13
    );
  },
  cep(cep) {
    return (
      cep !== null
      && cepRegex.test(cep)
      && cep.length === 8
    );
  },
  address(address) {
    return (
      address !== null
      && address !== ''
      && address.length >= 5
      && address.length <= 70
    );
  },
  neighborhood(neighborhood) {
    return (
      neighborhood !== null
      && neighborhood !== ''
      && neighborhood.length <= 40
    );
  },
  addressNumber(number) {
    return (
      number !== null
      && addressNumberRegex.test(number)
      && number.length <= 4
    );
  },
  files(files,
    maxNumberOfFiles,
    acceptedFilesTypes = defaultAcceptedFilesTypes,
    maxSizeFile = 5242880,
  ) {
    let errors = [];

    function validateFileType(image) {
      if (!acceptedFilesTypes.includes(image.type)) {
        errors.push("The file's type is invalid");
        return false;
      }

      return true;
    }

    function validateFileSize(image) {
      if (!(image.size <= maxSizeFile)) {
        errors.push("The file's size is more than 5MB");
        return false;
      }

      return true;
    }

    if (files.length === 0) {
      errors.push("You don't selected any file");
    }

    if (files.length > maxNumberOfFiles) {
      errors.push(`You selected more than ${maxNumberOfFiles} files`);
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const image of files) {
      if (!validateFileType(image) || !validateFileSize(image)) {
        return errors;
      }
    }

    return errors;
  },
  url(url) {
    return (
      url
      && urlRegex.test(url)
    );
  },
};
