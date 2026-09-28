export function costCalculator(transaccion) {
    const monto = Number(transaccion);
    const tarifaFija = 3;
    const intereses = monto * 0.01;
    const total = tarifaFija + intereses + monto;
    return total;
}