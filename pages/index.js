import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputValue, setInputValue] = useState();
 
  const handleChange = () => {
    const inputValue = "null";
    setInputValue(inputValue);
    console.log(inputValue);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-stone-900 ${inter.className}`}
    >
      <div className="navbar bg-neutral-800 ">
        <div className="flex-1">
          <Image
              src="/sakura.png"
              alt="Sakura"
              width={25}
              height={25}
              priority
          />
          <p className='font-semibold p-2 text-2xl text-red-200'>SAKURA</p>
        </div>

        <div className="flex-none">
        <details className="dropdown dropdown-end mb-1">
          <summary className="m-1 btn bg-stone-900">ඞ</summary>
          <ul className="p-2 shadow menu dropdown-content bg-neutral-800 rounded-md w-52">
            <li><a>Log-out</a></li>
            <li><a>Help</a></li>
          </ul>
        </details>
        </div>
      </div>

      <div className='bg-cover bg-bottom' style={{backgroundImage: "url(https://pixy.org/download/4752790/)", width:'100%', justifyContent: "center" }}>
        <div className='py-20 object-center' style={{marginLeft: "32vw"}}>
            <input type="text" placeholder="Your Wallet Here" className="input input-bordered w-96 bg-neutral-800"/>
            <button className="btn m-2 btn-active btn-ghost text-red-200" style={{backgroundColor: "#262626"}} 
            onClick={()=>{
              handleChange();
            }}
            >Get Started</button>
        </div>
      </div>

      <div className="flex flex-col py-5" style={{width: "30vw"}}> 
          <div>
            <h1 className='text-red-200 text-lg pb-1 p-3'>Recent Gambles</h1>
          </div>

          <div className="grid h-50 card bg-neutral-800 rounded-box place-items-center shadow-inner">
            <div className="overflow-x-auto box-content" style={{width: "29vw"}}>
              <table className="table ">
                {/* head */}
                <thead className='text-red-200'>
                  <tr>
                    <th></th>
                    <th>Bet</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody className='text-neutral-600'>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>

      <div className='place-content-center'>
        <div className='divider py-5' style={{width: "40vw"}}></div>
      </div>

      <div className="flex flex-col pb-5">
        <div>
          <h1 className='text-red-200 text-lg pb-1 p-3'>Net Profit</h1>
        </div>

        <div>
          <div className="grid card bg-neutral-800 rounded-box place-items-center" style={{width: "30vw"}}>
          
            <div className="stats shadow bg-neutral-800" style={{width: "85%"}}> 
              <div className="stat">
                  <div className="stat-title">Profit</div>
                  <div className="stat-value text-red-200">$--</div>
                  <div className="stat-desc">Net Gain</div>
                </div>
                
                <div className="stat place-items-center ">
                  <div className="stat-title">Win Rate</div>
                  <div className="stat-value text-red-200">--%</div>
                  <div className="stat-desc">↗︎ -- (-%)</div>
                </div>
              </div>
            </div>
          </div>
      </div>    
    
    </main>
  )
}
