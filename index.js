let bill=document.querySelector('#billamount')
 let tipselect=document.querySelector('.select')
 let tipamount=document.querySelector('#tip')
 let total=document.querySelector('#total')
 let noofperson=document.querySelector('#noofpeople')

let value

let tippercent=0
function tip(val){
 tippercent=val
 tipamount.textContent=parseInt(value)*parseInt(tippercent)/100
 total.textContent=parseInt(tipamount.textContent)+parseInt(value)

}
bill.addEventListener("change",(event)=>{
     value=event.target.value
})
function reset(){
    total.textContent="$0.00"
    tipamount.textContent="$0.00"
}