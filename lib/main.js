function validateThaiCitizenID(id) {
    if(
        id.length != 13 ||
        id.charAt(0).match(/[09]/)
    ) return false;

    var sum = 0;
    for( i=0; i < 12; i++ ){
        sum += parseInt(id.charAt(i))*(13-i);
    }

    if( (11 - sum%11 )%10 != parseInt(id.charAt(12)) ){
        return false;
    }

    return true;
}
