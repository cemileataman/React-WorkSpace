
import './App.css'

function App() {
  //jsx :{} süslü parantezler kullanılır.
    //javascript kodları yazıyoruz.
    let a =15;
    const firstName="Cemre";
    let vize1=60;
    let vize2=80;
    let sonuc =true;
    let names =
   ["Enes",
   "Ayşenur","Mehmet","Zeynep","Ahmet"]
  return (
//html kodları yazılır.
    <div>
      <p>a değişkenin değeri :{a}</p>
      <div>Müşterinin Adı :{firstName}</div>
      {/* <p>Ortalama: {(vize1+vize2)/2}</p>
      {/* {sonuc ?  <p>Ehliyeti alabilirsiniz</p>: */}
      {/* <p>Ehliyeti alamazsın</p>} */}
      {
        (vize1+vize2)/2 >= 50 ?
        <p>Dersten geçtin</p>
        :
        <p>dersten kaldın</p>
      } */
      {
        names.map((isim,index)=>(
          <div className=''
          style={{
            backgroundColor:'orange',
            border:'1px solid black',
          }} key={index}>{isim}</div>//style ilk parantezi maviler jsx ikinci parantezi ise css özelliklerini temsil ediyor.
        ))
      }
    </div>
  )
}

export default App
