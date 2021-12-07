// Desafio 10
function techList(list, owner) {
  let orderedList = list.sort();
  let techListname = [];
  for (let index = 0; index < orderedList.length; index += 1) {
    techListname.push({ tech: orderedList[index], name: owner });
  }
  if (orderedList.length <= 0) {
    return 'Vazio!';
  } return techListname;
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto';
  } if (phone.length === 11) {
    for (let index = 0; index <= 11; index += 1) {
      if (phone[index] < 0 || phone[index] > 9) {
        return 'Não é possível gerar um número de telefone com esses valores.';
      }
    }
    if (phone.length === 11) {
      let str = phone.toString();
      let numbers = str.replace(/,/g, '');
      let result = `(${numbers.substr(0, 2)})${numbers.substr(2, 5)}-${numbers.substr(7, 10)}`;
      return result;
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
