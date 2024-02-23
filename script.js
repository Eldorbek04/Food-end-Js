let food = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kccal: 500,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },

    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kccal: 650,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kccal: 800,
        get calcSum() {
            return this.price * this.amount
        },
        get kccalSum() {
            return this.kccal * this.amount
        },


    },
}

let btn = [...document.querySelectorAll(".main__product-btn")]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        prepare(this)
    })
}

function prepare(item) {
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector(".main__product-num")
    let price = parent.querySelector(".main__product-price span")
    let kccal = parent.querySelector(".main__product-kccal span")

    let sym = item.getAttribute("data-symbol")

    let count = food[parentId].amount
    console.log(count)

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kccal.innerHTML = food[parentId].kccalSum
}



    let Level = document.querySelector(".header__timer-extra");
    let sanoq = 0;
    let tezlik = 0;

    function lvl() {

    setTimeout(() => {
        sanoq++
        if (sanoq < 30) {
            tezlik = 80
        } else if (tezlik <= 40) {
            tezlik = 100
        }else if (sanoq <= 50) {
            tezlik = 120
        } else if (sanoq <= 60) {
            tezlik = 140
        } else if (sanoq <= 75) {
            tezlik = 160
        } else if (sanoq <= 90) {
            tezlik = 185
        }else if (sanoq <= 100) {
            tezlik = 190}
             else {
            tezlik = 0
            return
        }

        Level.innerHTML = sanoq
        lvl()

    }, tezlik)

}

lvl()


let receipt = document.querySelector(".receipt")
let receiptWindow = receipt.querySelector(".receipt__window")
let receiptWindowOut = receipt.querySelector(".receipt__window-out")
let receiptWindowBtn = receipt.querySelector(".receipt__window-btn")
let addCart = document.querySelector(".addCart")






let imgcamburger = document.querySelector(".imgcamburger")
let imgcambo = document.querySelector(".imgcambo")


let viewClose = document.querySelector(".view__close")
let imgburger = document.querySelector(".imgburger")


let admin = document.querySelector('#info')
let darten = document.querySelector('#info2')



let recret = document.querySelector('#info3')
let view = document.querySelector(".view")

viewClose.addEventListener("click", function () {
    view.classList.remove("active")
})


admin.addEventListener("click", function () {
    view.classList.add("active")

    imgburger.style.display = "block"
    imgcamburger.style.display = "none"
    imgcambo.style.display = "none"


})


darten.addEventListener("click", function () {
    view.classList.add("active")
    imgburger.style.display = "none"
    
    imgcambo.style.display = "none"

    imgcamburger.style.display = "block"

})



recret.addEventListener("click", function () {
    view.classList.add("active")
  
    imgcamburger.style.display = "none"
    imgcambo.style.display = "block"
    imgburger.style.display = "none"
})







addCart.addEventListener("click", function () {
    receipt.style.display = "flex"

    setTimeout(() => {
        receipt.style.opacity = "1"
        receiptWindow.style.top = "25%"
    }, 150);

    let menu = "Your cart : \n\n"
    let totalPrice = 0
    let totalKcall = 0

    for (const key in food) {
        console.log(food[key].img)
        if (food[key].amount) {
            menu = menu + `${food[key].name}    ${food[key].amount}x ${food[key].price}  = ${food[key].calcSum}\n\n`
            totalPrice = totalPrice + food[key].calcSum
            totalKcall = totalKcall + food[key].kccalSum


        }

    }

    receiptWindowOut.innerHTML = `${menu} total price ${totalPrice} sum \n total kaloriya ${totalKcall} kaloriya`




    receiptWindowBtn.addEventListener("click", function () {

        location.reload()
        if (e.target) {
            receipt.style.opacity = "0"
            receipt.style.top = "-100"

            setTimeout(() => {
                receipt.style.display = "block"
            }, 180);
        }
    })
})