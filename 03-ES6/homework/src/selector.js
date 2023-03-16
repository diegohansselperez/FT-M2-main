var traverseDomAndCollectElements = function (matchFunc, startEl = document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQU
if(matchFunc(startEl)) resultSet.push(startEl)

for (let i = 0; i < startEl.children.length; i++) {
  let aux = traverseDomAndCollectElements(matchFunc,startEl.children[i])
  resultSet = [...resultSet,...aux]
  
}

return resultSet
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí

  const regexId = /#/;
  if (regexId.test(selector)) {
    return "id";
  }

  const regexClass = /^\./;
  if (regexClass.test(selector)) {
    return "class";
  }

  // if(selector[0] === "."){
  //   return "class";
  // }

  if (selector.includes(".")) {
    return "tag.class";
  }

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (elemento) => {
      if (`#${elemento.id}` === selector) {
        return true;
      }
      return false;
    };
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      for (const classOne of elemento.classList) {
        if (`.${classOne}` === selector) {
          return true;
        }
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      const [tag, classOne] = selector.split(".")
      return matchFunctionMaker(tag)(elemento) && matchFunctionMaker(`.${classOne}`)(elemento);
    }
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => {
      if (elemento.tagName.toLowerCase() === selector) {
        return true;
      }
      return false;
    };
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
