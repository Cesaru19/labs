export function rubricPerfect(score) {
    let desicion = "Pass";
    if (score == 11) {
        desicion = "Perfect";
    } else if (score > 8) {
        desicion = "Excellent";
    } else if (score < 5) {
        desicion = "Fail";
    }
    return desicion;
}