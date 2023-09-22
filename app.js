/* let incomeID = document.getElementById('incomeID');
const incomeValueString = incomeID.value;
const incomeValue = parseFloat(incomeValueString); */


function getCalculatorValue(id){
            const inputValue = document.getElementById(id);
            const inputValueString = inputValue.value;
            const inputValueNumber = parseFloat(inputValueString);

            return inputValueNumber;
          
}

function calculatorExpensesAndIncome(){
            const incomeID = getCalculatorValue('incomeID');
            const food = getCalculatorValue('food');
            const rent = getCalculatorValue('rent');
            const cloth = getCalculatorValue('cloth');

            /*  =================total expenses addision amount========================= */

            const totalAddisionValue = food + rent + cloth ;
           const totalExpenses = document.getElementById('totalExpenses');
           totalExpenses.innerText = totalAddisionValue;

          /* ========total expenses income to mainase Amount============== */

           const TotalRemainingBalance = incomeID - totalAddisionValue;
           const Balance= document.getElementById('remainingBalance');
           Balance.innerText = TotalRemainingBalance;
             
           return TotalRemainingBalance ;
}
calculatorExpensesAndIncome()


function saveMoneyAmount(){
            const saveMoney = getCalculatorValue('saveMoney');
            const totalPreviewsAmount = calculatorExpensesAndIncome();
            const PercentaceMoney = (totalPreviewsAmount * saveMoney)/100;
          
            const savingAmount = document.getElementById('savingAmount');
            savingAmount.innerText = PercentaceMoney.toFixed(2);
          
            const remainingSubtractionBalance = totalPreviewsAmount - PercentaceMoney ;
            
            const lastremainging = document.getElementById('remainingSubtraction');
            lastremainging.innerText = remainingSubtractionBalance.toFixed(2);
            

}
        