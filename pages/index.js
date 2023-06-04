import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 bg-stone-900 ${inter.className}`}
    >
      <div className="navbar bg-neutral-800 rounded-box">
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
          <ul className="p-2 shadow menu dropdown-content bg-neutral-800 rounded-box w-52">
            <li><a>Login-out</a></li>
            <li><a>Help</a></li>
          </ul>
        </details>
        </div>
      </div>

      <div className='pt-20'>
          <input type="text" placeholder="Your Wallet Here" className="input input-bordered w-96 bg-neutral-800"/>
          <button className="btn m-2 btn-active btn-ghost text-red-200" style={{backgroundColor: "#262626"}}>Get Started</button>
      </div>

      <div className="flex flex-col">
        <div className="divider w-full py-10 w-80"></div> 
          <div>
            <h1 className='text-red-200 text-lg pb-1 p-3'>Recent Gambles</h1>
          </div>

          <div className="grid h-50 card bg-neutral-800 rounded-box place-items-center shadow-inner">
            <div className="overflow-x-auto box-content">
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

      <div>
        <div className="flex flex-col w-full">
          <div className="divider py-10"></div> 
          <div className="grid h-20 card bg-neutral-800 rounded-box place-items-center w-80">content</div>
        </div>
      </div>
    
    </main>
  )
}
