let submitButton = document.getElementById('generate-coupon');
submitButton.addEventListener('click', () =>{
    //This will run when the generate coupon button is clicked
    const coupon = document.getElementById('code-value');
    const custom = document.getElementById('custom-value');

    let code;

    if(custom.value != ''){
        code = custom.value;
    } else {
        code = coupon.value;
    }

    //This generates the code
    const couponCode = lowes.generateCoupon(code);

    //let codePlaceholder = document.getElementById('code-placeholder');
    //codePlaceholder.innerHTML = couponCode;

    //Now, create the barcode
    JsBarcode('#barcode-placeholder',couponCode,{
        format: 'CODE39'
    })
});