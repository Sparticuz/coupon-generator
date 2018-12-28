let submitButton = document.getElementById('generate-coupon');
submitButton.addEventListener('click', () =>{
    //This will run when the generate coupon button is clicked
    const prefix = document.getElementById('prefix');
    const custom = document.getElementById('custom-value');

    //This generates the code
    const couponCode = lowes.generateCoupon(prefix.value, custom.value);

    // let codePlaceholder = document.getElementById('code-placeholder');
    // codePlaceholder.innerHTML = couponCode;

    //This generates the code
    const couponCode = lowes.generateCoupon(code);

    //let codePlaceholder = document.getElementById('code-placeholder');
    //codePlaceholder.innerHTML = couponCode;

    //Now, create the barcode
    JsBarcode('#barcode-placeholder',couponCode,{
        format: 'CODE39'
    });
});