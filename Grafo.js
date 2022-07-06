/**
 * Representación de un grafo que guarda arreglos de vértices y aristas.
 * 
 * Se utiliza un sistema basado en cero para los índices de los vértices y las aristas.
 * 
 * No se deberían usar números para nombrar a los vértices, ya que podría causar un comportamiento inesperado
 * 
 */
class Grafo {

    esDirigido = false; //Valor por defecto
    esPonderado = false; //Valor por defecto

    vertices;
    aristas;

    vistasVertices = null;

    /**
     * Crear un grafo en el que se pueden insertar y eliminar vértices y aristas, crear la representación gráfica, etc.
     * 
     * @param {boolean} esDirigido Indica si el grafo es dirigido
     * @param {boolean} esPonderado Indica si el grafo es ponderado
     * @param {string} idCanvas Atributo id del canvas en el HTML
     */
    constructor(esDirigido, esPonderado, idCanvas) {
        this.canvas = new Canvas(idCanvas);
        this.esDirigido = esDirigido;
        this.esPonderado = esPonderado;
        this.vertices = [];
        this.aristas = [];

        //Caso de prueba 1
        this.insertarVertice("A");
        this.insertarVertice("B");
        this.insertarVertice("C");
        this.insertarVertice("D");
        this.insertarVertice("E");
        this.insertarVertice("F");
        this.insertarVertice("G");
        this.insertarVertice("H");
        this.insertarVertice("I");
        this.insertarVertice("J");
        this.insertarVertice("K");
        this.insertarVertice("L");
        this.insertarVertice("M");
        this.insertarVertice("N");
        this.insertarVertice("P");
        this.insertarArista(["A", "B"], 8);
        this.insertarArista(["A", "D"], 5);
        this.insertarArista(["A", "E"], 4);
        this.insertarArista(["B", "C"], 3);
        this.insertarArista(["B", "E"], 12);
        this.insertarArista(["B", "F"], 4);
        this.insertarArista(["C", "F"], 9);
        this.insertarArista(["C", "G"], 11);
        this.insertarArista(["D", "E"], 9);
        this.insertarArista(["D", "H"], 6);
        this.insertarArista(["E", "F"], 3);
        this.insertarArista(["E", "I"], 8);
        this.insertarArista(["E", "J"], 5);
        this.insertarArista(["F", "G"], 1);
        this.insertarArista(["F", "K"], 8);
        this.insertarArista(["G", "K"], 8);
        this.insertarArista(["G", "L"], 7);
        this.insertarArista(["H", "I"], 2);
        this.insertarArista(["H", "M"], 7);
        this.insertarArista(["I", "J"], 10);
        this.insertarArista(["I", "M"], 6);
        this.insertarArista(["J", "K"], 6);
        this.insertarArista(["J", "N"], 9);
        this.insertarArista(["K", "L"], 5);
        this.insertarArista(["K", "P"], 7);
        this.insertarArista(["L", "P"], 6);
        this.insertarArista(["M", "N"], 2);
        this.insertarArista(["N", "P"], 12);

        /*
        //Caso de prueba 2
        this.insertarVertice("O");
        this.insertarVertice("A");
        this.insertarVertice("B");
        this.insertarVertice("C");
        this.insertarVertice("D");
        this.insertarVertice("E");
        this.insertarVertice("F");
        this.insertarVertice("T");
        this.insertarArista(["O", "A"], 3);
        this.insertarArista(["O", "B"], 2);
        this.insertarArista(["A", "C"], 1);
        this.insertarArista(["A", "D"], 4);
        this.insertarArista(["B", "C"], 3);
        this.insertarArista(["B", "E"], 4);
        this.insertarArista(["C", "E"], 2);
        this.insertarArista(["C", "F"], 2);
        this.insertarArista(["D", "T"], 6);
        this.insertarArista(["E", "F"], 3);
        this.insertarArista(["E", "T"], 5);
        this.insertarArista(["F", "T"], 4);
        */

        /*
        //Caso de prueba 3
        this.insertarVertice("S");
        this.insertarVertice("B");
        this.insertarVertice("C");
        this.insertarVertice("D");
        this.insertarVertice("E");
        this.insertarVertice("T");
        this.insertarArista(["S", "B"], 4);
        this.insertarArista(["S", "C"], 2);
        this.insertarArista(["B", "C"], 1);
        this.insertarArista(["B", "D"], 5);
        this.insertarArista(["C", "D"], 8);
        this.insertarArista(["C", "E"], 10);
        this.insertarArista(["D", "E"], 2);
        this.insertarArista(["D", "T"], 6);
        this.insertarArista(["E", "T"], 2);
        */

        /*
        //Caso de prueba 4
        this.insertarVertice("A");
        this.insertarVertice("B");
        this.insertarVertice("C");
        this.insertarVertice("D");
        this.insertarVertice("E");
        this.insertarVertice("F");
        this.insertarVertice("G");
        this.insertarVertice("H");
        this.insertarVertice("I");
        this.insertarVertice("J");
        this.insertarArista(["A", "B"], 1);
        this.insertarArista(["B", "C"], 2);
        this.insertarArista(["C", "D"], 3);
        this.insertarArista(["D", "E"], 4);
        this.insertarArista(["A", "F"], 5);
        this.insertarArista(["E", "J"], 6);
        this.insertarArista(["F", "G"], 7);
        this.insertarArista(["G", "H"], 8);
        this.insertarArista(["H", "I"], 9);
        this.insertarArista(["I", "J"], 10);
        */

        /*
        //Caso de prueba 5
        this.insertarVertice("A");
        this.insertarVertice("B");
        this.insertarVertice("C");
        this.insertarArista(["A", "B"], 1);
        this.insertarArista(["B", "C"], 2);
        */

        let indiceVertice = undefined;

        this.canvas.canvas.addEventListener('mousedown', (ev) => {
            if (indiceVertice == undefined) { //Si no hay un vértice habilitado
                let x = ev.offsetX;
                let y = ev.offsetY;

                for (let i = 0; i < this.vertices.length; i++) { //Recorrer los vértices
                    if (!this.getVertice(i)) { //Si el vértive ya fue eliminado
                        continue; //Ignorar
                    }

                    if (this.vistasVertices[i].contienePunto(x, y)) { //Si se dio click en el vértice
                        indiceVertice = i; //Habilitar el vértice
                        this.dibujarGrafo(indiceVertice); //Dibujar el grafo con el vértice habilitado
                        return; //No hacer nada más
                    }
                }
            }
        });

        this.canvas.canvas.addEventListener('mouseup', (ev) => {
            if (indiceVertice != undefined) { //Si ya hay un vértice habilitado
                indiceVertice = undefined; //Deshabilitar el vértice
                this.dibujarGrafo(); //Volver a dibujar el grafo sin vértices habilitados
            }
        });

        this.canvas.canvas.addEventListener('mousemove', (ev) => {
            if (indiceVertice != undefined) { //Si ya se habilitó un vértice
                let x = ev.offsetX;
                let y = ev.offsetY;

                this.vistasVertices[indiceVertice].x = x; //Actualizar la posición x del vértice
                this.vistasVertices[indiceVertice].y = y; //Actualizar la posición y del vértice

                this.dibujarGrafo(indiceVertice); //Volver a dibujar el grafo con el vértice habilitado
            }
        });
    }

    /**
     * Insertar un vértice en el grafo
     * 
     * @param {string} valor Valor del vértice a insertar
     * @returns {Array} El vértice insertado
     */
    insertarVertice(valor) {
        if (this.getVertice(valor)) { //Si existe un vértice con el mismo valor
            alert("El vértice ya existe"); //Mostrar un error
            return; //No hacer nada más
        }

        this.vertices.push({ //Agregar el nuevo vértice
            indice: this.vertices.length,
            valor: valor
        });

        this.limpiarGrafo(); //Borrar el dibujo del grafo

        return this.vertices[this.vertices.length - 1]; //Retornar el vértice insertado
    }

    /**
     * Eliminar un vértice del grafo
     * 
     * @param {string | number} clave Valor o índice del vértice a eliminar
     * @returns {boolean} true si se eliminó el vértice, false si no 
     */
    eliminarVertice(clave) {
        let v = this.getVertice(clave); //Obtener el vértice a eliminar

        if (!v) { //Si el vértice no existe
            alert("El vertice no existe"); //Mostrar un error
            return false; //Indicar que el vértice no se eliminó
        }

        for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
            if (!this.aristas[i]) { //Si la arista ya ha sido eliminada
                continue; //Ignorar
            }

            //Obtener los vértices que une esta arista
            let vertice1 = this.aristas[i].vertice1;
            let vertice2 = this.aristas[i].vertice2;

            if ((v == vertice1) || (v == vertice2)) { //Si la arista contiene al vértice a elminar
                this.eliminarArista(i); //Eliminar la arista
            }
        }

        this.vertices[v.indice] = null; //Eliminar el vertice

        this.limpiarGrafo(); //Borrar el dibujo del grafo

        return true; //Indicar que se eliminó el vértice
    }

    /**
     * Insertar una arista en el grafo
     * 
     * @param {Array} valores Arreglo de valores de los vértices que une la nueva arista
     * @param {number} ponderacion Ponderación de la arista
     * @returns {Array} La arista si se insertó correctamente, null si no se insertó
     */
    insertarArista(valores, ponderacion) {
        if (!valores) { //Si no se definieron los indices de los vértices
            return null;
        }

        //Buscar los vértices que une la nueva arista
        let vertice1 = this.getVertice(valores[0]);
        let vertice2 = this.getVertice(valores[1]);

        if (!vertice1 || !vertice2) { //Si alguno de los vertices no existe
            alert("Alguno de los vertices no se encuentra en el grafo"); //Avisar
            return null; //No hacer nada mas
        } else if (vertice1 == vertice2) { //Si se quiere crear un lazo
            for (let i = 0; i < this.aristas.length; i++) { //Recorrer todas las aristas
                let a = this.getArista(i); //Obtener la arista

                if (!a) { //Si la arista ya fue eliminada
                    continue; //Ignorar
                }

                //Obtener los vértices que une la arista
                let vertice1a = a.vertice1;
                let vertice2a = a.vertice2;

                if (((vertice1 == vertice1a) && (vertice2 == vertice2a)) || ((vertice2 == vertice1a) && (vertice1 == vertice2a))) { //Si el lazo ya existe
                    alert("El lazo ya existe"); //Mostrar un error
                    return null; //No hacer nada más
                }
            }
        }

        if (this.esPonderado) { //Si el grafo es ponderado
            if (!ponderacion) { //Si no se definió una ponderación
                alert("No se definió una ponderación"); //Mostrar un error
                return null;
            }
        } else { //Si el grafo es no ponderado
            ponderacion = 1; //La ponderación es 1
        }

        //Si todos los datos son correctos
        this.aristas.push({ //Agregar la nueva arista
            indice: this.aristas.length,
            ponderacion: ponderacion,
            vertice1: vertice1,
            vertice2: vertice2
        });

        this.limpiarGrafo(); //Borrar el dibujo del grafo

        return this.aristas[this.aristas.length - 1]; //Devolver la arista insertada
    }

    /**
     * Eliminar una arista del grafo
     * @param {number} indice Indice de la arista a eliminar
     * @returns {boolean} true si se eliminó la arista, false si no
     */
    eliminarArista(indice) {
        let a = this.getArista(indice); //Obtener la arista a eliminar

        if (!a) { //Si la arista no existe
            alert("La arista no existe"); //Mostrar un error
            return false; //Indicar que la arista no se eliminó
        }

        let vertice1 = this.aristas[indice].vertice1;
        let vertice2 = this.aristas[indice].vertice2;
        //Los vértices no podrían ser null, porque al eliminar un vértice se eliminan todas las aristas asociadas
        //De esta manera, si el vertice vertice1 o vertice2 ya fue eliminado, también la arista

        this.aristas[indice] = null; //Eliminar la arista

        this.limpiarGrafo(); //Borrar el dibujo del grafo

        return true; //Indicar que se eliminó la arista
    }

    /**
     * Crear un camino mínimo entre los vértices solicitados utilizando el algoritmo de Dijkstra
     * 
     * @param {number | string} claveOrigen Clave (índice o valor) del vértice origen del camino
     * @param {number | string} claveDestino Clave (índice o valor) del vértice destino del camino
     * @returns {Array | null} Información del camino o null si ocurrió un error
     */
    crearCaminoMinimo(claveOrigen, claveDestino) {
        if (!this.getVertice(claveOrigen) || !this.getVertice(claveOrigen)) { //Si alguno de los vértices no existe
            alert("Alguno de los vértices no existe"); //Mostrar un error
            return null; //No hacer nada más
        } else if (typeof (claveOrigen) != typeof (claveDestino)) { //Si las claves no son del mismo tipo
            alert("Las claves a usar en la búsqueda deben ser del mismo tipo (number o string)"); //Mostrar un error
            return null; //No hacer nada más
        }
        if (typeof (claveOrigen) == "string") { //Si se están buscando los vértices por el valor
            //Buscar por los índices
            claveOrigen = this.getVertice(claveOrigen).indice;
            claveDestino = this.getVertice(claveDestino).indice;
        }

        let costos = {}; //Arreglo de estructuras que representan los costos hasta cada vértice
        costos[claveOrigen] = { origen: claveOrigen, costo: 0 };
        let resueltos = []; //Índices de los vértices que ya fueron resueltos (ya no necesitan revisarse)
        let infoMin; //Información del vértice que se está procesando
        let cont = 0;

        do {
            infoMin = { //Reiniciar el vértice a procesar
                indice: -1,
                costo: Number.POSITIVE_INFINITY
            };

            for (const indice in costos) { //Para cada índice en los costos
                const costo = costos[indice]; //Obtener el elemento

                if (costo.costo < infoMin.costo && !(resueltos.includes(parseInt(indice)))) { //Si se encuentra un costo menor no resuelto
                    //Actualizar el vértice a procesar
                    infoMin.indice = parseInt(indice);
                    infoMin.costo = costo.costo;
                }
            }

            let indice = infoMin.indice;

            if (indice == -1) { //Si no se definió un índice a procesar
                alert("Ya se han visitado todos los nodos posibles desde " + this.getVertice(claveOrigen).valor + "\n"
                + "Tal vez los nodos no tienen un camino posible"); //Mostrar un error
                return null; //No hacer nada más
            }

            let vertice = this.getVertice(indice);
            let costoParcial = costos[indice].costo;

            for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
                let a = this.aristas[i]; //Obtener la arista

                if (!a) { //Si la arista no existe
                    continue; //Ignorar
                }

                //Obtener los vértices que une esta arista
                let vertice1 = a.vertice1;
                let vertice2 = a.vertice2;
                let vAdy = null; //Vértice adyacente

                if (vertice1.indice == vertice.indice) { //Si el vértice es el vértice 1 de la arista
                    vAdy = vertice2; //Vértice adyacente es el vértice 2 de la arista
                } else if (vertice2.indice == vertice.indice && !this.esDirigido) { //Si el grafo es no dirigido y el vértice es el vértice 2 de la arista
                    vAdy = vertice1; //Vértice adyacente es el vértice 1 de la arista
                }

                if (vAdy) { //Si hay un vértice adyacente
                    if (costos[vAdy.indice]) { //Si existe un costo asociado
                        if ((costoParcial + a.ponderacion) < costos[vAdy.indice].costo) { //Si el nuevo costo es mejor
                            //Actualizar el costo
                            costos[vAdy.indice].origen = indice;
                            costos[vAdy.indice].costo = (costoParcial + a.ponderacion);
                        }
                    } else { //Si no existe un costo asociado
                        costos[vAdy.indice] = { origen: indice, costo: (costoParcial + a.ponderacion) }; //Agregar el nuevo costo
                    }
                }
            }

            resueltos.push(indice); //Agregar a los vértices resueltos
        } while (!resueltos.includes(claveDestino)); //Mientras el vértice de destino no se haya resuelto

        let i = claveDestino; //Índice del vértice
        let recorrido = []; //Recorrido realizado

        /*
        Este while realiza el recorrido desde el vértice destino hasta el origen
        */
        while (i != claveOrigen) { //Mientras no se haya llegado al origen
            recorrido.unshift(i); //Agregar el índice al recorrido

            i = costos[i].origen; //Actualizar el índice
        }

        recorrido.unshift(claveOrigen); //Agregar el índice del origen

        return {
            recorrido: recorrido,
            costo: costos[claveDestino].costo
        };
    }

    /**
     * Recorrer el grafo a partir del vértice inicial y guardar la información obtenida.
     * 
     * La información consiste en:
     * - Los vértices recorridos en el camino de ida y regreso
     * - El costo total del recorrido completo
     * - Si el grafo es cíclico o acíclico
     * 
     * @param {Array} vertice Vértice a recorrer
     * @param {Array | undefined} infoGrafo Arreglo con la información del grafo
     * @returns {Array | null} Información del grafo o null si ocurrió un error
     */
    crearRecorrido(clave, infoGrafo) {
        if (!this.getVertice(clave)) { //Si el vértice no existe
            alert("El vértice " + clave + " no existe"); //Mostrar un error
            return null; //No hacer nada más
        } else if (typeof(clave) == "string") { //Si se está buscando el vértice por el valor
            //Buscar por el índice
            clave = this.getVertice(clave).indice;
        }

        if (!infoGrafo) { //Si el arreglo para el resultado no está definido (porque es el primer vértice a recorrer)
            infoGrafo = { //Definirlo
                recorrido: [],
                costo: 0,
                ciclico: false
            };
        }

        infoGrafo.recorrido.push(clave); //Agregar el vértice al recorrido
        let cont = 0; //Inicializar el contador de vértices adyacentes visitados anteriormente

        for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
            let a = this.getArista(i); //Obtener la arista

            if (!a) { //Si la arista ya fue eliminada
                continue; //Ignorar
            }

            //Obtener los indices de los vértices de la arista
            let vertice1 = a.vertice1;
            let vertice2 = a.vertice2;
            let vAdy = null; //Vértice siguiente

            if (vertice1.indice == clave) { //Si el vértice es el vértice 1 de la arista
                vAdy = vertice2; //Vértice siguiente es el vértice 2 de la arista
            } else if (vertice2.indice == clave && !this.esDirigido) { //Si el grafo es no dirigido y el vértice es el vértice 2 de la arista
                vAdy = vertice1; //Vértice siguiente es el vértice 1 de la arista
            }

            if (vAdy) { //Si se encontró un vértice siguiente
                if (!infoGrafo.recorrido.includes(vAdy.indice)) { //Si no se ha recorrido el vértice
                    infoGrafo.costo += a.ponderacion; //Sumar el costo del camino de ida
                    this.crearRecorrido(vAdy.indice, infoGrafo); //Agregar el recorrido del vértice siguiente al recorrido actual
                    infoGrafo.recorrido.push(clave); //Agregar el vértice al recorrido. Esto servirá para el regreso al punto inicial
                    infoGrafo.costo += a.ponderacion; //Sumar el costo del camino de vuelta
                } else if (!infoGrafo.ciclico) { //Si ya se recorrió el vértice y el grafo aún no es cíclico
                    cont++; //Agregar uno al contador

                    if (cont >= 2) { //Si hay dos o más adyacentes recorridos
                        infoGrafo.ciclico = true; //El grafo es cíclico
                    }
                }
            }
        }

        return infoGrafo; //Devolver la información obtenida
    }

    /**
     * Mostrar el recorrido realizado
     * 
     * @param {Array} recorrido Recorrido a mostrar
     * @returns {string} Texto con el recorrido realizado
     */
    mostrarRecorrido(recorrido) {
        let texto = ""; //Texto con el recorrido realizado

        for (let i = 0; i < recorrido.length; i++) {
            texto += this.getVertice(recorrido[i]).valor + " => "; //Agregar el vértice al texto
        }

        texto += "FIN"; //Agregar el fin al texto

        return texto; //Retornar el texto
    }

    /**
     * Crear y mostrar la matriz de incidencia del grafo
     * 
     * @returns {Array} Arreglo bidimensional que representa la matriz de incidencia del grafo
     */
    crearMatrizIncidencia() {
        let matriz = this.crearMatrizVacia(this.aristas.length, this.vertices.length); //Crear la matriz vacía

        for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
            let a = this.aristas[i]; //Obtener la arista

            if (!a) { //Si la arista no existe
                continue; //Ignorar
            }

            //Obtener los vértices que une esta arista
            let vertice1 = a.vertice1;
            let vertice2 = a.vertice2;

            //Actualizar la matriz de incidencia
            matriz[i][vertice1.indice] = 1;
            matriz[i][vertice2.indice] = 1;
        }

        return matriz; //Devolver la matriz de incidencia
    }

    /**
     * Crear y mostrar la matriz de adyacencia del grafo
     * 
     * @returns {Array} Arreglo bidimensional que representa la matriz de adyacencia del grafo
     */
    crearMatrizAdyacencia() {
        let matriz = this.crearMatrizVacia(this.vertices.length, this.vertices.length); //Crear la matriz vacía

        for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
            let a = this.aristas[i]; //Obtener la arista

            if (!a) { //Si la arista no existe
                continue; //Ignorar
            }

            //Obtener los vértices que une esta arista
            let vertice1 = a.vertice1;
            let vertice2 = a.vertice2;

            matriz[vertice2.indice][vertice1.indice] += a.ponderacion; //Actualizar la matriz de adyacencia

            if (!this.esDirigido) { //Si el grafo es no dirigido
                matriz[vertice1.indice][vertice2.indice] += a.ponderacion; //Actualizar la matriz de adyacencia
            }
        }

        return matriz;
    }

    /**
     * Crear y mostrar la lista de adyacencia del grafo
     * 
     * returns {Array} Arreglo bidimensional que representa la lista de adyacencia del grafo
     */
    crearListaAdyacencia() {
        let listas = []; //Crear un arreglo de arreglos que representan las listas de adyacencia de cada vértice

        for (let i = 0; i < this.vertices.length; i++) { //Recorrer los vértices
            if (!this.getVertice(i)) { //Si el vértice no existe
                continue; //Ignorar
            }

            let lista = [this.getVertice(i).valor]; //Crear la lista del vértice

            for (let j = 0; j < this.aristas.length; j++) { //Recorrer las aristas
                if (!this.getArista(j)) { //Si la arista no existe
                    continue; //Ignorar
                }

                //Obtener los vértices que une esta arista
                let vertice1 = this.aristas[j].vertice1;
                let vertice2 = this.aristas[j].vertice2;

                if (vertice1.indice == i) { //Si el nodo de salida es el vértice en cuestión
                    lista.push(vertice2.valor); //Agregar el otro vértice a la lista
                } else if ((vertice2.indice == i) && !this.esDirigido) { //Si el nodo de entrada es el vértice en cuestión y el grafo es no dirigido
                    lista.push(vertice1.valor); //Agregar el otro vértice a la lista
                }
            }

            listas.push(lista); //Guardar la lista de este vértice
        }

        return listas;
    }

    /**
     * Crear una matriz del tamaño especificado y llenarla con ceros
     * 
     * @param {number} ancho Cantidad de elementos en el ancho de la matriz
     * @param {number} alto Cantidad de elementos en el alto de la matriz
     * @returns {Array} Arreglo bidimensional que representa una matriz vacía
     */
    crearMatrizVacia(ancho, alto) {
        let matriz = [];

        for (let i = 0; i < ancho; i++) {
            let aux = [];

            for (let j = 0; j < alto; j++) {
                aux.push(0);
            }

            matriz.push(aux);
        }

        return matriz;
    }

    /**
     * Mostrar la matriz en el div correspondiente
     * 
     * @param {Array} matriz Matriz a mostrar
     * @param {string} tipo Tipo de matriz. Debe ser uno de inc o ady
     * @returns 
     */
    matrizATabla(matriz, tipo) {
        let texto = "<table border>\n"; //Texto HTML para mostrar la tabla

        texto += "    <tr>\n        <th>" + ((tipo == 'ady') ? "V/V" : "V/A") + "</th>\n";

        for (let x = 0; x < matriz.length; x++) { //Recorrer las filas
            if ((tipo == 'inc') && !this.getArista(x)) { //Si la arista no existe
                continue; //Ignorar
            } else if ((tipo == 'ady') && !this.getVertice(x)) { //Si el vértice no existe
                continue; //Ignorar
            }

            texto += "        <th>" + ((tipo == 'ady') ? (this.getVertice(x).valor) : x + 1) + "</th>\n"; //Mostrar los números del eje x
        }

        texto += "    </tr>\n"; //Cerrar la fila

        for (let y = 0; y < matriz[0].length; y++) { //Recorrer las columnas
            let v = this.getVertice(y); //Obtener el vértice

            if (!v) { //Si el vértice no existe
                continue; //Ignorar
            }

            texto += "    <tr>\n        <th>" + v.valor + "</th>\n"; //Mostrar los números o el valor del eje y

            for (let x = 0; x < matriz.length; x++) { //Recorrer las filas
                if ((tipo == 'inc') && !this.getArista(x)) { //Si es una matriz de incidencia y la arista no existe
                    continue; //Ignorar
                } else if ((tipo == 'ady') && !this.getVertice(x)) { //Si es una matriz de adyacencia y el vértice no existe
                    continue; //Ignorar
                }

                texto += "        <td>" + matriz[x][y] + "</td>\n"; //Mostrar cada una de las casillas
            }

            texto += "    </tr>\n"; //Cerrar la fila
        }

        texto += "</table>"; //Cerrar la tabla

        return texto; //Retornar el texto
    }

    /**
     * Dibujar una representación gráfica del grafo en el div correspondiente
     * Si existe un grafo previo, se elimina
     * Si existe un vértice habilitado, se pinta de un color diferente
     * 
     * @param {number} indiceHabilitado Indice del vértice habilitado
     */
    dibujarGrafo(indiceHabilitado) {
        this.canvas.limpiar();

        const radio = 20; //Radio de los vértices

        if (this.vistasVertices == null) { //Si el grafo debe ser redibujado desde su estado inicial
            this.vistasVertices = []; //Crear un arreglo para guardar las vistas de los vértices
            const cantAncho = 5; //Cantidad de vértices a lo ancho
            const cantAlto = Math.ceil(this.getVertices().length / cantAncho); //Cantidad de vértices a lo alto
            const ancho = this.canvas.canvas.width / cantAncho; //Espacio a lo ancho para cada vértice
            const alto = this.canvas.canvas.height / cantAlto; //Espacio a lo alto para cada vértice
            let cantEliminados = 0; //Se usa para dibujar los vértices en una posición correcta

            for (let i = 0; i < this.vertices.length; i++) { //Recorrer los vértices
                if (!this.getVertice(i)) { //Si el vértice ya no existe
                    this.vistasVertices.push(null); //Guardar null en la posición
                    cantEliminados++;
                    continue; //Ignorar
                }

                this.vistasVertices.push({
                    x: ((ancho / 2) + (ancho * ((i - cantEliminados) % cantAncho))), //Posición inicial en x
                    y: ((alto / 2) + (alto * parseInt((i - cantEliminados) / cantAncho))), //Posición inicial en y
                    /**
                     * Comprobar si el punto está dentro de los límites de este vértice
                     * 
                     * @param {number} pX Posición en x del punto a comprobar
                     * @param {number} pY Posición en y del punto a comprobar
                     * @returns {boolean} true si el punto está dentro del círculo, false si no
                     */
                    contienePunto: function (pX, pY) {
                        return !(pX < (this.x - radio) || pX > (this.x + radio) || pY < (this.y - radio) || pY > (this.y + radio));
                    }
                });
            }
        }

        /*
        Se deben dibujar primero las aristas para que aparezcan debajo de las vistas de los vértices
        */

        for (let i = 0; i < this.aristas.length; i++) { //Recorrer las aristas
            let a = this.getArista(i); //Obtener la arista

            if (!a) { //Si la arista ya no existe
                continue; //Ignorar
            }

            //Obtener los indices de los vértices de la arista
            let vertice1 = this.vistasVertices[a.vertice1.indice];
            let vertice2 = this.vistasVertices[a.vertice2.indice];

            if (vertice1 == vertice2) { //Si es un lazo
                this.dibujarLazo(vertice1.x, vertice1.y, a.ponderacion); //Dibujar el lazo
            } else { //Si es una arista
                this.dibujarArista(vertice1.x, vertice1.y, vertice2.x, vertice2.y, a.ponderacion); //Dibujar la arista
            }
        }

        for (let i = 0; i < this.vertices.length; i++) { //Recorrer los vértices
            if (!this.getVertice(i)) { //Si el vértice ya no existe
                continue; //Ignorar
            }

            let v = this.vistasVertices[i]; //Obtener la vista del vértice
            this.dibujarVertice(v.x, v.y, this.vertices[i].valor, radio, (i == indiceHabilitado)); //Dibujar el vértice
        }
    }

    /**
     * Dibujar un vértice en el canvas
     * 
     * @param {number} x Posición x del centro del vértice
     * @param {number} y Posición y del centro del vértice
     * @param {string} texto Texto a mostrar en el vértice
     * @param {number} radio Radio del vértice
     * @param {boolean} habilitado Indica si el vértice está habilitado
     */
    dibujarVertice(x, y, texto, radio, habilitado) {
        this.canvas.dibujarCirculoLleno(x, y, radio, ((habilitado) ? "rgb(81, 238, 50)" : "rgb(245, 245, 220)"));
        this.canvas.dibujarTexto(x, y, texto);
    }

    /**
     * Dibujar una arista en el canvas
     * 
     * @param {number} x1 Posición x del primer punto
     * @param {number} y1 Posición y del primer punto
     * @param {number} x2 Posición x del segundo punto
     * @param {number} y2 Posición y del segundo punto
     * @param {number} ponderacion Ponderación de la arista
     */
    dibujarArista(x1, y1, x2, y2, ponderacion) {
        let g;

        if (this.esDirigido) {
            g = this.canvas.crearGradienteLinear(x1, y1, x2, y2);
            g.addColorStop(0.6, 'black');
            g.addColorStop(0.65, 'red');
        }

        this.canvas.dibujarLinea(x1, y1, x2, y2, g);

        if (this.esPonderado) {
            this.canvas.dibujarTexto((x1 + x2) / 2, (y1 + y2) / 2, ponderacion, "rgb(245, 245, 220)");
        }
    }
    
    /**
     * Dibujar un lazo en el canvas
     * 
     * @param {number} x Posición x del centro vértice dueño del lazo
     * @param {number} y Posición y del centro vértice dueño del lazo
     * @param {number} ponderacion Ponderación del lazo
     */
     dibujarLazo(x, y, ponderacion) {
        this.canvas.dibujarCirculo(x - 30, y, 30);

        if (this.esPonderado) {
            this.canvas.dibujarTexto(x - 60, y, ponderacion, "rgb(245, 245, 220)");
        }
    }

    /**
     * Limpiar todas las vistas en el canvas y vaciar el arreglo de vistas de vértices
     */
    limpiarGrafo() {
        this.canvas.limpiar();
        this.vistasVertices = null;
    }

    /**
     * Obtener los vértices que no se han eliminado del grafo
     * 
     * @returns {Array} Todos los vértices del grafo
     */
    getVertices() {
        let result = [];

        for (let i = 0; i < this.vertices.length; i++) {
            let v = this.vertices[i]; //Obtener el vértice

            if (v != null) { //Si el vértice no ha sido eliminado
                result.push(v); //Guardar el vértice
            }
        }

        return result;
    }

    /**
     * Obtener las aristas que no se han eliminado del grafo
     * 
     * @returns {Array} Todas las aristas del grafo
     */
    getAristas() {
        let result = [];

        for (let i = 0; i < this.aristas.length; i++) {
            let a = this.aristas[i]; //Obtener la arista

            if (a != null) { //Si la arista no ha sido eliminada
                result.push(a); //Guardar la arista
            }
        }

        return result;
    }

    /**
     * Obtener un vértice
     * 
     * @param {number | string} indice Indice o valor del vertice
     * @returns {Array} El vertice si se encuentra, null si no
     */
    getVertice(clave) {
        clave = (isNaN(parseInt(clave)) ? clave : parseInt(clave));

        switch (typeof (clave)) {
            case "number":
                if (this.vertices.length > clave) { //Si el indice está dentro de los límites
                    let v = this.vertices[clave]; //Obtener el vértice

                    if (v != null) { //Si el vértice no ha sido eliminado
                        return v; //Devolver el vértice
                    }
                }
                break;
            case "string":
                for (let i = 0; i < this.vertices.length; i++) { //Buscar el índice del vértice
                    let v = this.getVertice(i);

                    if (v != null && v.valor == clave) { //Si el vértice no ha sido eliminado y es el valor buscado
                        return v; //Devolver el vértice
                    }
                }
                break;
        }

        return null; //Si el índice no es válido o el vértice ya no existe
    }

    /**
     * Obtener una arista
     * 
     * @param {number} indice Indice de la arista
     * @returns {Array} La arista si se encuentra, null si no
     */
    getArista(indice) {
        if (this.aristas.length > indice) { //Si el indice está dentro de los límites
            let a = this.aristas[indice]; //Obtener la arista

            if (a != null) { //Si la arista no ha sido eliminada
                return a; //Devolver la arista
            }
        }

        return null; //Si el índice no es válido o la arista ya no existe
    }

}
