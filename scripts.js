function conversor() {valorPokeCoin = prompt ("Digite um valor em PokeCoin")

PokeCoinUSD = 0.01;
PokeCoinBR = 0.05;
PokeCoinEUR = 0.009;
alert("O valor convertido em dolar e " + (valorPokeCoin * PokeCoinUSD).toLocaleString("en-US", { style: "currency", currency: "USD" }))
alert("O valor convertido em real e " + (valorPokeCoin * PokeCoinBR).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
alert("O valor convertido em euro e " + (valorPokeCoin * PokeCoinEUR).toLocaleString("eu-EU", { style: "currency", currency: "EUR" }))
}
