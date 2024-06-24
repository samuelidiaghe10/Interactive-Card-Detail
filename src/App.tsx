import { FormEvent, useState } from "react"
import { Card } from "./interactive-card-details-form-main/components/Card"
import { Form } from "./interactive-card-details-form-main/components/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Thankyou } from "./interactive-card-details-form-main/components/Thankyou"


function App() {  
  // User Card Name
  const [cardName, setCardName] = useState('JANE APPLESEED')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  // User Card Number
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [num, setNum] = useState('')
  const [numError, setNumError] = useState('')

  // User Card Date
  const [dateError, setDateError] = useState('')

  // month
  const [cardMonth, setCardMonth] = useState('00')
  const [month, setMonth] = useState('')

  // year
  const [cardYear, setCardYear] = useState('00')
  const [year, setYear] = useState('')


  // User Card Cvc
  const [cardCvc, setCardCvc] = useState('000')
  const [cvc, setCvc] = useState('')
  const [cvcError, setCvcError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if(name.trim().length == 0 || isNaN(Number(num.replace(/\s/g, ''))) || num.length === 0 || month.length === 0 || year.length === 0 || cvc.length === 0){
      
      if(name.trim().length == 0) {
        setCardName('JANE APPLESEED')
        setNameError("Can't be blank")
        
      }else{
        setNameError('')
      }


      if( num.length < 19 || isNaN(Number(num.replace(/\s/g, '')))){
        setCardNumber('0000 0000 0000 0000')
        setNumError('Wrong Format')
      }else{
        setNumError('')
      }
      

      if(month.length === 0){
        setCardMonth('00')
        setDateError("Can't be blank")
      }else{
        setDateError('')
      }

      if(year.length === 0){
        setCardYear('00')
        setDateError("Can't be blank")
      }else{
        setDateError('')
      }

      if(cvc.length === 0){
        setCardCvc('000')
        setCvcError("Can't be blank")
      }else{
        setCvcError('')
      }

    }

    if(name.trim().length !== 0  && num.length !== 0 && !isNaN(Number(num.replace(/\s/g, ''))) && month.length !== 0 && year.length !== 0 && cvc.length !== 0){
      setCardName(name.toUpperCase())
      setNameError('')
      setName('')

      setCardNumber(num)
      setNumError("")
      setNum("")

      setCardMonth(month)
      setDateError("")
      setMonth("")

      setCardYear(year)
      setYear("")

      setCardCvc(cvc)
      setCvc("")
      setCvcError("")
    }

    
  }

  return (
    <div className=" flex lg:bg-contain bg-pattern2 md:py-20 py-10  lg:pt-0 lg:flex-row flex-col  lg:px-20 items-center  justify-between  h-72 md:h-96 bg-cover  lg:bg-pattern  gap-44 lg:gap-80  lg:min-h-screen bg-no-repeat">
       <Card cardName={cardName} 
      cardNumber={cardNumber} 
      cardMonth={cardMonth}
      cardYear={cardYear}
      cardCvc={cardCvc}/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Form handleSubmit={handleSubmit}
              name={name}  
              setName={setName}
              nameError={nameError}
              
              num={num}
              setNum={setNum}
              numError={numError}
              
              month={month}
              setMonth={setMonth}
              dateError={dateError}
              
              year={year}
              setYear={setYear}

              cvc={cvc}
              setCvc={setCvc}
              cvcError={cvcError}

               
              />}/>

          <Route path="ThankYou" element={<Thankyou/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App