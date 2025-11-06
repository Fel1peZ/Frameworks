const tela = document.getElementsByTagName("tela");

const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext('2d');
tela[0].appendChild(canvas);

const arcos = tela[0].getElementsByTagName("arco");

for (let i = 0; i < arcos.length; i++) {
    const c = arcos[i];
    const x = parseFloat(c.getAttribute("px"));
    const y = parseFloat(c.getAttribute("py"));
    const raio = parseFloat(c.getAttribute("raio"));
    const cor = c.getAttribute("cor") || "green";
    const anguloInicial = parseFloat(c.getAttribute("anguloInicial")) || 0;
    const anguloFinal = parseFloat(c.getAttribute("anguloFinal")) || 360;
    const orientacao = c.getAttribute("orientacao") === "true";

    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial * Math.PI / 180, anguloFinal * Math.PI / 180, orientacao);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
}