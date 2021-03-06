let submitButton = document.getElementById('generate-coupon');
submitButton.addEventListener('click', () =>{
    //This will run when the generate coupon button is clicked
    const prefix = document.getElementById('prefix');
    const custom = document.getElementById('custom-value');

    //This generates the code
    const couponCode = lowes.generateCoupon(prefix.value, custom.value);

    // let codePlaceholder = document.getElementById('code-placeholder');
    // codePlaceholder.innerHTML = couponCode;

    const oldCodes = document.getElementById('old-codes');

    var code = document.createElement('input');
    code.value = couponCode;
    code.classList.add('form-control');
    oldCodes.appendChild(code);
    code.focus();
    code.select();
    document.execCommand('copy');
    

    //Now, create the barcode
    JsBarcode('#barcode-placeholder',couponCode,{
        format: 'CODE39'
    });
});