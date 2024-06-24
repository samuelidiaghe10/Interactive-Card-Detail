import { SetStateAction } from "react"
import { useNavigate } from "react-router"

export const Form = ({handleSubmit, setName, name,
     nameError, num, setNum, numError, dateError,
     month, setMonth, year, setYear, cvc, setCvc, cvcError} : 

    {handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, nameError:string,
        name:string, setName:React.Dispatch<SetStateAction<string>>,
        num:string, setNum:React.Dispatch<SetStateAction<string>>,
        numError:string, dateError:string, month:string, setMonth:React.Dispatch<SetStateAction<string>>,setYear:React.Dispatch<SetStateAction<string>>,
        year:string, cvc:string, setCvc:React.Dispatch<SetStateAction<string>>, cvcError:string

    }) => {
        const handleNavigate = () => {
            if(name.trim().length !== 0  && num.length !== 0 && !isNaN(Number(num.replace(/\s/g, ''))) && month.length !== 0 && year.length !== 0 && cvc.length !== 0){
                navigate("/ThankYou")
                
              }

            else{
                navigate("/")
            }
        }

        const navigate = useNavigate()

  return (
    <form onSubmit={(e) => handleSubmit(e)}
    className="flex flex-col pb-10 lg:pb-0 lg:w-4/12 w-11/12 gap-6">
        <div className="flex flex-col items-start gap-2">
            <label className="font-semibold text-sm text-Very-dark-violet">
                CARDHOLDER NAME
            </label>

            <input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className=" w-full font-semibold border-2 py-2 ps-3 rounded-lg" 
            type="text" 
            placeholder="e.g Jane Appleseed" />

            <label className="text-Red text-sm font-medium" htmlFor="">{nameError}</label>
        </div>

        <div className="flex flex-col items-start gap-2">
            <label className="font-semibold text-sm text-Very-dark-violet">
                CARD NUMBER
            </label>

            <input maxLength={19}
            value={num.replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
            onChange={(e) => setNum(e.target.value)}
            className=" w-full border-2 font-semibold py-2 ps-3 rounded-lg" 
            type="text" 
            placeholder="e.g 1234 5678 9123 0000" />

            <label className="text-Red text-sm font-medium" htmlFor="">{numError}</label>
        </div>


        <div className="flex gap-5">
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm text-Very-dark-violet">
                    EXP. DATE(MM/YY)
                </label>

                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 items-start">
                        <input onChange={(e) => setMonth(e.target.value)}
                        value={month}
                        maxLength={2}
                        type="text" 
                        className="py-2 rounded-lg font-semibold ps-3 w-[5rem] border-2" placeholder="MM" />
                    </div>

                    <div className="flex flex-col gap-2 items-start">
                        <input onChange={(e) => setYear(e.target.value)}
                        value={year}
                        maxLength={2}
                        type="text" 
                        className="py-2 rounded-lg font-semibold ps-3 w-[5rem] border-2" placeholder="YY" />
                    </div>
                </div>

                <label className="text-Red text-sm font-medium" htmlFor="">
                    {dateError}
                </label>

            </div>

            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="" className="font-bold text-sm">
                    CVC
                </label>

                <input onChange={(e) => setCvc(e.target.value)}
                value={cvc}
                maxLength={3}
                type="text" 
                className="w-full font-medium ps-3 py-2 rounded-lg border-2" placeholder="e.g. 123" />

                <label className="text-Red text-sm font-medium" htmlFor="">
                    {cvcError}
                </label>
            </div>
        </div>

        <button type="submit" onClick={() => handleNavigate()}
        className=" border-2 bg-Very-dark-violet text-lg border-Very-dark-violet hover:bg-transparent hover:text-Very-dark-violet duration-300 text-white py-3 rounded-lg font-medium tracking-wide">
            Confirm
        </button>
    </form>
  )
}
