setTimeout(() => {

    let yuan_usd = 0.15
    let yuan_eur = 0.13

    const yuanPriceElements = document.querySelectorAll('.f_Strong');

    yuanPriceElements.forEach(element => {
        const yuanPrice = element.innerHTML.trim().split(' ')[1].replace(/\D/g, "");;

        const usdPrice = (yuanPrice * yuan_usd).toFixed(2);
        const eurPrice = (yuanPrice * yuan_eur).toFixed(2);


        element.innerHTML = `${usdPrice}$ / ${eurPrice}€`;
    })
}, 1000);

