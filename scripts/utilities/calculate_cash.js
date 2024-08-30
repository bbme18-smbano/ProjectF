export function formatCurrency(dollar) {
    return (Math.round(dollar) * 1734).toFixed(2);
}

export default formatCurrency;