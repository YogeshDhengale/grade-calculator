//const english=document.getElementById('english')
//const maths=document.getElementById('Maths')
//const Physics=document.getElementById('Physics')
//const Chemistry=document.getElementById('Chemistry')
//const Computer=document.getElementById('Computer')

const submit = document.getElementById("sbmit")
//console.log(english, maths, Physics, Chemistry, Computer)

submit.addEventListener('click', () => {
    //let eng=english.value 
    const english = document.getElementById('english').value
    const maths = document.getElementById('Maths').value
    const Physics = document.getElementById('Physics').value
    const Chemistry = document.getElementById('Chemistry').value
    const Computer = document.getElementById('Computer').value

    if (english > 100 || maths > 100 || Physics > 100 || Chemistry > 100 || Computer > 100) {
        alert('Please enter value under 100')
    }

    if (english < 0 || maths < 0 || Physics < 0 || Chemistry < 0 || Computer < 0) {
        alert('Please enter value under 0-100')
    }

    totalMarks=parseInt(english)+parseInt(maths)+parseInt(Physics)+parseInt(Chemistry)+parseInt(Computer)
    const total=document.getElementById('total')
    total.innerText=`Total Marks: ${totalMarks}`

    avrage=totalMarks/500*100
    const avrageMarks=document.getElementById('avrage')
    avrageMarks.innerText=`Your avrage marks ${avrage}`


    const grade=document.getElementById('grade')

    if(avrage > 90){
        grade.innerText=`You got A grade`
    }
    else if(avrage > 80){
        grade.innerText=`You got B grade`
    }
    else if(avrage > 70){
        grade.innerText=`You got C grade`
    }
    else if(avrage > 60){
        grade.innerText=`You got D grade`
    }else{
        grade.innerText=`You got F grade`
    }

})