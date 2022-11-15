const calculateTemp = () => {
    const numberTemp = parseInt(document.getElementById('temp').value);
    const tempselected = document.getElementById('temp_diff');
    const valueTemp = tempselected.options[tempselected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahranheit = Math.round(((cel *9)/5)+32);
        return fahranheit;
    }
    const fahTocel = (fahr) => {
        let celsuis = Math.round((fahr - 32)* 5/9);
        return celsuis;
    }
    let result;
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = result+"F";
    }
    else{
        result = fahTocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML = result+"C";

    }
}