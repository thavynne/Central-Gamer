function simularCompra() {
    const respostaHeadset = prompt("Quantos headsets gamers você deseja?");
    if (respostaHeadset === null) return;

    const respostaTeclado = prompt("Quantos teclados mecânicos você deseja?");
    if (respostaTeclado === null) return;

    const respostaMouse = prompt("Quantos mouses gamers você deseja?");
    if (respostaMouse === null) return;

    const respostaPC = prompt("Quantos PCs gamers você deseja?");
    if (respostaPC === null) return;

    const headset = Number(respostaHeadset);
    const teclado = Number(respostaTeclado);
    const mouse = Number(respostaMouse);
    const pc = Number(respostaPC);

    if (
        !Number.isInteger(headset) || headset < 0 ||
        !Number.isInteger(teclado) || teclado < 0 ||
        !Number.isInteger(mouse) || mouse < 0 ||
        !Number.isInteger(pc) || pc < 0
    ) {
        alert("Digite quantidades inteiras iguais ou maiores que zero.");
        return;
    }

    if (headset === 0 && teclado === 0 && mouse === 0 && pc === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    const valorHeadset = headset * 150;
    const valorTeclado = teclado * 220;
    const valorMouse = mouse * 90;
    const valorPC = pc * 4700;
    const total = valorHeadset + valorTeclado + valorMouse + valorPC;

    alert(
        "RESUMO DA COMPRA\n\n" +
        "Headset Gamer: " + headset + " unidade(s) - R$ " +
        valorHeadset.toFixed(2).replace(".", ",") + "\n" +
        "Teclado Mecânico: " + teclado + " unidade(s) - R$ " +
        valorTeclado.toFixed(2).replace(".", ",") + "\n" +
        "Mouse Gamer: " + mouse + " unidade(s) - R$ " +
        valorMouse.toFixed(2).replace(".", ",") + "\n" +
        "PC Gamer: " + pc + " unidade(s) - R$ " +
        valorPC.toFixed(2).replace(".", ",") + "\n\n" +
        "TOTAL DA COMPRA: R$ " + total.toFixed(2).replace(".", ",")
    );
}
