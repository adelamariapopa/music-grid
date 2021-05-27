const calculator = [
    ["1", "2", "3", " + "],
    ["4", "5", "6", " - "],
    ["7", "8", "9", " / "],
    ["0", "C", "=", " * "],
];
export class Grid {
    constructor(options) {
        this.rootId = options.rootId;
        this.nbOfRows = 4;
        this.nbOfCells = 4;
        this.rowClass = options.rowClass;
        this.cellClass = options.cellClass;
        this.gridContainer = document.getElementById(this.rootId);
        this.cells = [];
    }

    init(){
        this.draw();
    }

    draw(){
    for(let i = 0; i<this.nbOfRows; i++){
        const row = document.createElement('div');
        row.classList.add(this.rowClass);
        this.addCellsToRow(row, calculator[i]);
        this.gridContainer.append(row);
        }
        const playBtn = document.createElement('div');
    }

    toggleCellState(cell){
        const {action} =cell.dataset;
        console.log(action);
        // console.log(cell.textContent);
    }

    addCellsToRow(row, calculatorRow){
        for(let j=0; j<this.nbOfCells; j++){
            const cell = document.createElement('div');
            cell.classList.add(this.cellClass);
            cell.textContent = calculatorRow[j];
            cell.addEventListener('click', () => {
                this.toggleCellState(cell);
            });
            //cand mouse-ul este apasat(tras) incontinuu peste celule
            cell.addEventListener('mouseenter', () => {
                if(this.isMouseDown)  this.toggleCellState(cell);
            })
            this.cells.push(cell);
            row.append(cell);
            }
    }
}