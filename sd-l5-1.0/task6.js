export function rubricExcellent(score) {
    let desicion = "Pass";
    if (score < 5) {
        desicion = "Fail";
    } else if (score > 8) {
        desicion = "Excellent";
    }
    return desicion;
}