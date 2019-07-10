// CREATE-A-QUIZ

//Event listener
document.getElementById('button').addEventListener('click', Processing);

function Processing () {
    //input 
        let Q1 = document.getElementById('inputQ1').value;
        let Q2 = document.getElementById('inputQ2').value;
        let Q3 = document.getElementById('inputQ3').value;
        let Q4 = document.getElementById('inputQ4').value;
        x = 0

        Q1= Q1.toLowerCase().trim();
        Q2= Q2.toLowerCase().trim();
        Q3= Q3.toLowerCase().trim();
        Q4= Q4.toLowerCase().trim();


    //Q1 awnser
     if (Q1== 'canada') {
            document.getElementById('inputQ1').style.backgroundColor= 'green'
            document.getElementById('CA1').innerHTML= 'Good Job!'
        } else {
            document.getElementById('inputQ1').style.backgroundColor= 'red'
            document.getElementById('CA1').innerHTML= 'The correct Answer is Canada' 
            document.getElementById('CA1').style.color= 'red'
            x = x + 1 
        }

    //Q2 awnser
    if (Q2== 'cardinal') {
        document.getElementById('inputQ2').style.backgroundColor= 'green'
        document.getElementById('CA2').innerHTML= 'Perfect Awnser!' 
    } else {
        document.getElementById('inputQ2').style.backgroundColor= 'red'
        document.getElementById('CA2').innerHTML= 'The correct answer is Cardinal'
        document.getElementById('CA2').style.color= 'red' 
        x = x + 1 
    }

    //Q3 awnser
    if (Q3== 'master shifu') {
        document.getElementById('inputQ3').style.backgroundColor= 'green'
        document.getElementById('CA3').innerHTML= 'Perfect!'
    } else {
        document.getElementById('inputQ3').style.backgroundColor= 'red'
        document.getElementById('CA3').innerHTML= 'The correct answer is Master shifu!' 
        document.getElementById('CA3').style.color= 'red'
        x = x + 1 
    }
    //Q4 awnser
    if (Q4== '1966') {
        document.getElementById('inputQ4').style.backgroundColor= 'green'
        document.getElementById('CA4').innerHTML= 'Amazing!' 
    } else {
        document.getElementById('inputQ4').style.backgroundColor= 'red'
        document.getElementById('CA4').innerHTML= 'The correct answer is 1966' 
        document.getElementById('CA4').style.color= 'red'
        x = x + 1 
    }

    //Result total
    let totalScore= (4-x)
    document.getElementById('score').innerHTML= totalScore

    let totalPercent= Math.round((totalScore/4)*100)
    document.getElementById('percent').innerHTML= totalPercent

    if  (totalScore == 4) {
        document.getElementById('scoreComment').innerHTML= "Amazing score! You are so smart!"
     } else if (totalScore == 3) {
        document.getElementById('scoreComment').innerHTML= "Almost there! Try again for a higher score!"
     } else {
        document.getElementById('scoreComment').innerHTML= "Oh no! Try again for a higher score!"
     }

}


