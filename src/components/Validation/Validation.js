export function validateEmail(value) {

    let error
    if (!value) return;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = '**Invalid email address';
    }



    return error;

}



export function validateName(value) {

    let error;

    if (!value) {

        error = '**Required Field';

    }

    return error;

}

export function validateAge(value) {
    let error;

    if (!value) {
        error = '**Required Field'
    } 
    let check_Date_Format =
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    let check_for_number = /^[0-9]*$/gm;
    let isValid_date = check_Date_Format.test(value);
    let isValid_age = check_for_number.test(value);
    if (!isValid_date && !isValid_age || (value < 0 && value > 100)) {
        error = 'Enter valid Date Format(DD/MM/YY) or Valid Age'
    } else if (isValid_date && !isValid_age) {
        let input_Year = new Date(value).getFullYear()
        let today_Year = new Date().getFullYear();
        let dateDifference = today_Year - input_Year;
        console.log(dateDifference)
        dateDifference < 18 ? error = 'Age Must be at least 18 years.' : null

    }


    return error;
}

export function validateSex(value) {

    let error;

    if (!value) {

        error = '**Required Field';

    }

    return error;

}
export function validateMobile(value) {
    let error;
    if (!value) {
        return;
        // error = '**Required Field';
    } 
    if (!(/^[789]\d{9}$/.test(value))) {
        error = '**Invalid Mobile Number';
    }
    return error;
}
export function validatePin(value) {
    var error;
    if (!value) return;
    let validPin = (/^[1-9][0-9]{5}$/).test(value);


    if (!validPin) {
        error = '**Invalid Pincode'
    }
    console.log(error);
    return error;
}