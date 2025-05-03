function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  
  console.log(ucFirst("привіт"));

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("росі") || lowerStr.includes("xxx");
  }
  
  console.log(checkSpam("Це повідомлення від Росі"));
  console.log(checkSpam("Нічого підозрілого"));

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }
  
  console.log(truncate("Це дуже довгий рядок тексту", 20));

  function strikeStr(str) {
  let words = str.split(" ");
  if (words.length > 3) {
    return words.join("\n");
  }
  return str;
}

console.log(strikeStr("Це речення має більше трьох слів"));

  