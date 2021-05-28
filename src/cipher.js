
const cipher = {
  encode: (n, string) =>{
    let newString = "";
    for (let i=0; i < string.length; i++){
            let ascNum = string.charCodeAt(i);
            if(ascNum >= 65 && ascNum <= 90){
            ascNum = (((ascNum-65)+n)%26)+65;
        }
        else if (ascNum >=97 && ascNum <=122){
            ascNum = (((ascNum-97)+n)%26)+97;
        }
        newString+=String.fromCharCode(ascNum);
    }

    return newString;
  },
decode: (nDec, stringDec) =>{
    let newStringDec = "";
    for (let i=0; i < stringDec.length; i++){
            let ascNumDec = stringDec.charCodeAt(i);
            if(ascNumDec >= 65 && ascNumDec <= 90){
            ascNumDec = (((ascNumDec-65)-nDec)%26)+65;
        }
        else if (ascNumDec>=97 && ascNumDec <=122){
            ascNumDec = (((ascNumDec-97)-nDec)%26)+97;
        }
        newStringDec+=String.fromCharCode(ascNumDec);
    }
    return newStringDec;
  }
};

// export default cipher;
