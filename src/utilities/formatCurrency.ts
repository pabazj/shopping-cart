const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency: "LKR",
    style: "currency"
})

export function formatCurrency(amount: number){
return CURRENCY_FORMATTER.format(amount);
}