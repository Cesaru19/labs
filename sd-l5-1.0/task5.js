export function rubricPassFail(score) {
    let disicion = "Pass";
    if (score < 5) {
        disicion = "Fail"
    }
    return disicion;
}