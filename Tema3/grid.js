
const calculator = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "/"],
    ["0", "C", "=", "*"],
];
let operator;
let currentNumber = '';
let prevNumber = '';
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
  
    toggleCellState(cell) {
        const action = cell.textContent;
        console.log(action);
        const isNumber = !isNaN(parseFloat(action));
        if (isNumber) {
          this.addNumber(action);
        } else {
          switch (action) {
            case "C":
              this.reset();
              break;
            case "+":
            case "-":
            case "*":
            case "/":
              this.addOperator(action);
              break;
            case "=":
                this.calculate();
                break;
          }
        }
        this.updateCalcDisplay();
      }
      addNumber(number) {
        currentNumber += number.toString();
      }
      calculate(){
          let result = 0;
            const {prev, current} = this.getFloat();
            console.log(prev, current);
          switch(operator){
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
          }
          currentNumber = result;
          prevNumber = '';
          operator = undefined;
      }
      getFloat() {
        return {
            prev: parseFloat(prevNumber),
            current: parseFloat(currentNumber),
          };
        }
      addOperator(op) {
          if(currentNumber !== ''){
              if(prevNumber !== ''){
                this.calculate();
              }
            prevNumber = currentNumber;
            currentNumber = ' ';
          }

        operator = op;
      }
    
      updateCalcDisplay() {
        const display = document.getElementById("display");
        let {prev, current} = this.getFloat();
        if(isNaN(prev)){
            prev = '';
        }
        if(isNaN(current)){
            current = '';
        }
        if(current === '' && prev ===''){
            display.innerText = 0;
            return;
        }
        display.innerText = `${prev} ${operator || ""} ${current}`;
      }
    
      reset() {
        prevNumber = "";
        currentNumber = "";
        operator = undefined;
      }
    addCellsToRow(row, calculatorRow){
        for(let j=0; j<this.nbOfCells; j++){
            const cell = document.createElement('div');
            cell.classList.add(this.cellClass);
            cell.textContent = calculatorRow[j];
            cell.setAttribute('data-action', calculatorRow[j]);
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