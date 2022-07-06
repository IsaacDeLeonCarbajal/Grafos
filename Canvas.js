class Canvas {

    canvas; //Elemento HTML del canvas
    context; //Contexto para poder dibujar obtenido del canvas

    /**
     * Crear un manejador para el canvas para que se pueda dibujar en él
     * 
     * @param {string} idCanvas Atributo id del canvas en el HTML
     */
    constructor(idCanvas) {
        this.canvas = document.getElementById(idCanvas);
        this.context = this.canvas.getContext("2d");
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.font = "bold 18px cursive";
        this.context.lineWidth = 4;
    }

    /**
     * Dibujar una circunferencia vacío con centro en el punto especificado y del radio deseado
     * 
     * @param {number} x Posición x del centro de la circunferencia
     * @param {number} y Posición y del centro de la circunferencia
     * @param {number} radio Radio del círculo
     */
    dibujarCirculo(x, y, radio) {
        this.context.strokeStyle = "rgb(20, 20, 20)";
        this.context.moveTo(x, y);
        this.context.beginPath();
        this.context.arc(x, y, radio, 0, Math.PI * 2, false);
        this.context.stroke();
    }

    /**
     * Dibujar un círculo lleno con centro en el punto especificado y del radio y color deseados
     * 
     * @param {number} x Posición x del centro del círculo
     * @param {number} y Posición y del centro del círculo
     * @param {number} radio Radio del círculo
     * @param {string} fillStyle Color del círculo. Si no es especifíca, se dibujará en blanco
     */
    dibujarCirculoLleno(x, y, radio, fillStyle) {
        this.context.fillStyle = (fillStyle) ? fillStyle : "rgb(0, 0, 0)";
        this.context.moveTo(x, y);
        this.context.beginPath();
        this.context.arc(x, y, radio, 0, Math.PI * 2, false);
        this.context.fill();
    }

    /**
     * Dibujar un texto con centro en el punto especificado y del color deseado
     * 
     * @param {number} x Posición x del centro del texto
     * @param {number} y Posición y del centro del texto
     * @param {string} texto Texto a dibujar
     * @param {string} fillStyle Color del texto. Si no es especifíca, se dibujará en blanco
     */
    dibujarTexto(x, y, texto, fillStyle) {
        this.context.fillStyle = (fillStyle) ? fillStyle : "rgb(0, 0, 0)";
        this.context.fillText(texto, x, y);
    }

    /**
     * Dibujar una línea entre los puntos especificados
     * 
     * @param {number} x1 Posición x del primer punto
     * @param {number} y1 Posición y del primer punto
     * @param {number} x2 Posición x del segundo punto
     * @param {number} y2 Posición y del segundo punto
     * @param {Object | undefined} strokeStyle Estilo del color de la línea a dibujar
     */
    dibujarLinea(x1, y1, x2, y2, strokeStyle) {
        this.context.strokeStyle = strokeStyle;
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    crearGradienteLinear(x1, y1, x2, y2) {
        return this.context.createLinearGradient(x1, y1, x2, y2);
    }

    /**
     * Limpiar todos los dibujos en el canvas
     */
    limpiar() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
