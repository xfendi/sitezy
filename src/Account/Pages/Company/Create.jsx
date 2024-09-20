import React, { useState } from 'react'
import { UserAuth } from '../../../Context/AuthContext';
import { collection, addDoc  } from 'firebase/firestore';

import { db } from '../../../firebase';

import LogoPrimary from '../../../Assets/logo-primary.png';

import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const { user } = UserAuth();

  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await addDoc(collection(db, "companies"), {
        name: name,
        createdAt: new Date(),
        members: {
          [user.uid]: 'owner', // Użytkownik jest właścicielem nowej firmy
        }
      });
      navigate('/account/setup/finish');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  return (
    <section className="form__section">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="form__box" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="100" >
        
        <div className="form__top">
          <div className="form__logo"><img src={LogoPrimary} alt="sitezy" width="55px" /></div>
          <div className="form__top-title">Create Your Company</div>
          <div className="form__top-subtitle">Enter details to create your first company!</div>
        </div>

        <form onSubmit={ HandleSubmit } className="form">

        <div className="form__input-box">
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" placeholder="enter..." onChange={(e) => { setName(e.target.value) }} required />
        </div>

        {error && <div className="form__error">{error}</div>}
        <button type="submit" className="btn-dark">Create</button>
        
        <div className="form__footer">
          <div className="form__footer-text">
            Want to join existing company? <a href="/account/setup/company/join">Join</a>
          </div>
        </div>

      </form>

      </div>
    </section>
  )
}

export default Create