import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import * as web3 from "@solana/web3.js"
import * as sdk from "@hxronetwork/parimutuelsdk"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  let data = "";

  const [walletKey, setWalletKey] = useState();
  const [netProfit, setNetProfit] = useState();
  const [vecLamports, setvecLamports] = useState([]);
  const [vecHoneypots, setvecHoneypots] = useState([]);
  const [pubkeyFilter, setPubkeyFilter] = useState("");

  const [paris, setParis] = useState(null);

  const getWalletKey = () => {
  
    setPubkeyFilter(walletKey);

     //obtener el valor del field

    //conectar con hxro 


    //obtener las apuestas


    //filtrar con el numero de wallet
    //mostrar el resultado


  }

  const filterByPubkey = () => {
    const filteredParis = paris.filter((pari) => pari.pubkey === pubkeyFilter);
    
    console.log(filteredParis);
  };

  const change = event => {
    setWalletKey(event.target.value)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const getParis = async () => {

      const config = sdk.DEV_CONFIG;
      const rpc = web3.clusterApiUrl("devnet");
      const connection = new web3.Connection(rpc, "confirmed");

      console.log("Conectando con la red", config, rpc, connection);

      const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection);

      console.log("ParimutuelWeb3", parimutuelWeb3);

      const market = sdk.MarketPairEnum.BTCUSD;
      console.log("Criptomoneda: ", market);

      const markets = sdk.getMarketPubkeys(config, market);
      console.log("Intervalos de tiempo", markets);

      const parimutuels = await parimutuelWeb3.getParimutuels(markets, 5);

      let netProfit = 0;
      let vecHoneypots = [];
      let vecLamports = [];

      for (let i = 0; i < parimutuels.length; i++) {
        vecLamports.push((parimutuels[i].account.lamports) / 1_000_000);
        vecHoneypots.push(parimutuels[i].info.parimutuel.honeypot);
        netProfit = netProfit + vecLamports[i]
        // console.log("Pubkey:", i, parimutuels[i].pubkey.toBase58())
      }

      setNetProfit(netProfit)
      setvecLamports(vecLamports)
      setvecHoneypots(vecHoneypots)

      setParis(parimutuels);
    };

    getParis();

  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-stone-900 ${inter.className}`}
    >
      <div className="navbar bg-neutral-800 ">
        <div className="flex-1">
          <Image
              src="/Sakura_f.png"
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
            <li><button onClick={refreshPage}>Log-out</button></li>
            <li><a className="link link-hover" href='https://dev.parimutuel.hxro.network'>Hxro.com</a></li>
          </ul>
        </details>
        </div>
      </div>

      <div className='bg-cover bg-bottom' style={{backgroundImage: "url(https://pixy.org/download/4752790/)", width:'100%', justifyContent: "center" }}>
        <div className='py-20 object-center' style={{marginLeft: "32vw"}}>
          <input type = "text"
            placeholder = "Your Wallet Here"
            className = "input input-bordered w-96 bg-neutral-800"
            onChange = {change}
            value = {walletKey}
          />
          <button className="btn m-2 btn-active btn-ghost text-red-200"
            style = { { backgroundColor: "#262626" } }
            onClick = {filterByPubkey}>Get Started</button>
        </div>
      </div>

      <div className="flex flex-col pb-5" style={{width: "30vw"}}> 
          <div>
            <h1 className='text-red-200 text-lg pb-1 pt-10 p-3'>Recent Gambles</h1>
          </div>

          <div className="grid h-50 card bg-neutral-800 rounded-box place-items-center shadow-inner">
            <div className="overflow-x-auto box-content" style={{width: "29vw"}}>
              <table className="table ">
                {/* head */}
                <thead className='text-red-200'>
                  <tr>
                    <th></th>
                    <th>Amount</th>
                    <th>Bet</th>
                  </tr>
                </thead>
                <tbody className='text-neutral-600'>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                  <td> {vecLamports[0] } </td>
                  <td> { vecHoneypots[0] } </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td> { vecLamports[1] } </td>
                    <td> { vecHoneypots[1] } </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td> { vecLamports[2] } </td>
                    <td> { vecHoneypots[2] } </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td> { vecLamports[3] } </td>
                    <td> { vecHoneypots[3] } </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th>5</th>
                    <td> { vecLamports[4] } </td>
                    <td> { vecHoneypots[4] } </td>
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
          
            <div className="stats bg-neutral-800" style={{width: "85%"}}> 
              <div className="stat">
                  <div className="stat-title">Profit</div>
                <div className="stat-value text-red-200">$ { netProfit }</div>
                  <div className="stat-desc">Net Gain</div>
                </div>
                
                <div className="stat place-items-center ">
                  <div className="stat-title">Win Rate</div>
                  <div className="stat-value text-red-200">--%</div>
                  <div className="stat-desc">Last five</div>
                </div>
              </div>
            </div>
          </div>
      </div>    
    
    </main>
  )
}
