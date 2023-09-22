import style from './ModalExemplo.module.css'

export default function ModalExemplo(props) {
  if(props.open){
  return (
    <div className={style.container}>
        <h1>ModalExemplo</h1>
        <button className={style.botao} onClick={()=> props.setOpen(false)}>CLOSE</button>
    </div>
  )
  }
}
