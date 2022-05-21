import { Button } from '@mui/material';
import { useState } from 'react';
import PassagersForm from '../components/passagersForm';
import ModalForm from '../components/modal';
import '../style/App.scss';

function Main() {
  const [modal, setModal] = useState(false)
  const [passagersCount, setPassagersCount] = useState(1)
  return (
    <div className='customContainer'>
      <h1 className='text-center my-4 text-xl'>Закажите билет</h1>
      <p>
        <span className='text-rose-600'>*</span> - Обязательные поля
      </p>
      {[...Array(passagersCount)].map((smth, i) => (
        <PassagersForm
          key={i}
          id={i}
          openModal={() => setModal(true)}
          passagersCount={passagersCount}
          removePassager={() => setPassagersCount(passagersCount - 1)}
        />
      ))}
      <div className='my-5'>
        <Button type="submit" onClick={() => setPassagersCount(passagersCount + 1)} variant="outlined">Добавить пассажира</Button>
      </div>
      {modal &&
        <ModalForm
          closeModal={() => setModal(!modal)}
          text="Данные отправлены"
        />}
    </div>
  )
}

export default Main;
