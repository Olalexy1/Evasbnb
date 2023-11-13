const paymentTypes = {
    "result": [
        {
            "name": "American Express",
            "payment_id": 1,
            "bookable": true
        },
        {
            "name": "Visa",
            "payment_id": 2,
            "bookable": true
        },
        {
            "name": "Euro/Mastercard",
            "payment_id": 3,
            "bookable": true
        },
        {
            "name": "Carte Bleue",
            "payment_id": 4,
            "bookable": false
        },
        {
            "name": "Diners Club",
            "payment_id": 5,
            "bookable": true
        },
        {
            "name": "JCB",
            "payment_id": 7,
            "bookable": true
        },
        {
            "name": "PIN",
            "payment_id": 8,
            "bookable": false
        },
        {
            "name": "Red 6000",
            "payment_id": 9,
            "bookable": false
        },
        {
            "name": "Maestro",
            "payment_id": 10,
            "bookable": false
        },
        {
            "name": "Discover",
            "payment_id": 11,
            "bookable": true
        },
        {
            "name": "Bancontact",
            "payment_id": 12,
            "bookable": false
        },
        {
            "name": "Solo",
            "payment_id": 13,
            "bookable": false
        },
        {
            "name": "Switch",
            "payment_id": 14,
            "bookable": true
        },
        {
            "name": "Carte Blanche",
            "payment_id": 15,
            "bookable": true
        },
        {
            "name": "NICOS",
            "payment_id": 16,
            "bookable": false
        },
        {
            "name": "UC",
            "payment_id": 17,
            "bookable": false
        },
        {
            "name": "No creditcards accepted, only cash",
            "payment_id": 18,
            "bookable": false
        },
        {
            "name": "Bankcard",
            "payment_id": 19,
            "bookable": false
        },
        {
            "name": "CartaSi",
            "payment_id": 21,
            "bookable": false
        },
        {
            "name": "Argencard",
            "payment_id": 22,
            "bookable": true
        },
        {
            "name": "Cabal",
            "payment_id": 23,
            "bookable": false
        },
        {
            "name": "Red Compra",
            "payment_id": 25,
            "bookable": false
        },
        {
            "name": "Other Cards",
            "payment_id": 26,
            "bookable": false
        },
        {
            "name": "Greatwall",
            "payment_id": 27,
            "bookable": false
        },
        {
            "name": "Peony",
            "payment_id": 28,
            "bookable": false
        },
        {
            "name": "Dragon",
            "payment_id": 29,
            "bookable": false
        },
        {
            "name": "Pacific",
            "payment_id": 30,
            "bookable": true
        },
        {
            "name": "Jin Sui",
            "payment_id": 31,
            "bookable": false
        },
        {
            "name": "Eftpos",
            "payment_id": 32,
            "bookable": false
        },
        {
            "name": "Hipercard",
            "payment_id": 34,
            "bookable": true
        },
        {
            "name": "UnionPay debit card",
            "payment_id": 35,
            "bookable": false
        },
        {
            "name": "UnionPay credit card",
            "payment_id": 36,
            "bookable": true
        },
        {
            "name": "EC-Card",
            "payment_id": 37,
            "bookable": false
        },
        {
            "name": "BC-Card",
            "payment_id": 38,
            "bookable": false
        },
        {
            "name": "KH Széchényi Pihenõkártya",
            "payment_id": 41,
            "bookable": false
        },
        {
            "name": "MKB Széchényi Pihenõkártya",
            "payment_id": 42,
            "bookable": false
        },
        {
            "name": "OTP Széchényi Pihenõkártya",
            "payment_id": 43,
            "bookable": false
        },
        {
            "name": "UnionPay credit card",
            "payment_id": 44,
            "bookable": true
        },
        {
            "name": "Cash",
            "payment_id": 45,
            "bookable": false
        },
        {
            "name": "PayPal",
            "payment_id": 46,
            "bookable": false
        },
        {
            "name": "Cheque (domestic only)",
            "payment_id": 47,
            "bookable": false
        },
        {
            "name": "ANCV chèques-vacances",
            "payment_id": 48,
            "bookable": false
        },
        {
            "name": "PayPlug",
            "payment_id": 49,
            "bookable": false
        },
        {
            "name": "Euro 6000",
            "payment_id": 50,
            "bookable": false
        },
        {
            "name": "Postepay",
            "payment_id": 51,
            "bookable": false
        },
        {
            "name": "Sistema 4B",
            "payment_id": 52,
            "bookable": false
        },
        {
            "name": "PagSeguro",
            "payment_id": 53,
            "bookable": false
        },
        {
            "name": "Elo Creditcard",
            "payment_id": 54,
            "bookable": true
        },
        {
            "name": "Bcash",
            "payment_id": 55,
            "bookable": false
        },
        {
            "name": "Interac e-Transfer",
            "payment_id": 56,
            "bookable": false
        },
        {
            "name": "M-Pesa",
            "payment_id": 57,
            "bookable": false
        },
        {
            "name": "Knet",
            "payment_id": 58,
            "bookable": false
        },
        {
            "name": "Western Union",
            "payment_id": 59,
            "bookable": false
        },
        {
            "name": "Apple Pay",
            "payment_id": 60,
            "bookable": false
        },
        {
            "name": "Square Cash",
            "payment_id": 61,
            "bookable": false
        },
        {
            "name": "iDeal",
            "payment_id": 62,
            "bookable": false
        },
        {
            "name": "BankAxept",
            "payment_id": 63,
            "bookable": false
        },
        {
            "name": "Reka-Check",
            "payment_id": 64,
            "bookable": false
        },
        {
            "name": "Paysera.com",
            "payment_id": 65,
            "bookable": false
        },
        {
            "name": "BankLink",
            "payment_id": 66,
            "bookable": false
        },
        {
            "name": "Alipay",
            "payment_id": 67,
            "bookable": false
        },
        {
            "name": "Tenpay",
            "payment_id": 68,
            "bookable": false
        },
        {
            "name": "Lastschrift",
            "payment_id": 69,
            "bookable": false
        },
        {
            "name": "Sadad",
            "payment_id": 70,
            "bookable": false
        },
        {
            "name": "Qiwi",
            "payment_id": 71,
            "bookable": false
        },
        {
            "name": "AirPlus",
            "payment_id": 72,
            "bookable": false
        },
        {
            "name": "Virtual Credit Card",
            "payment_id": 73,
            "bookable": false
        },
        {
            "name": "Mir",
            "payment_id": 76,
            "bookable": false
        }
    ]
}

export default paymentTypes;