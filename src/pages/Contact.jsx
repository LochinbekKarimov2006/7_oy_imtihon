import React, { useContext, useState } from 'react';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/Fire';
import { Malumodlar } from '../context/GlobalContext';

function Contact() {
    const { data6, setData6 } = useContext(Malumodlar);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithEmail = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Kirish muvaffaqiyatli');
        } catch (error) {
            
            console.error('Kirishda xatolik:', error.message);
        }
    };

    const signInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setData6(user); // Foydalanuvchi ma'lumotlarini context ga qo'shish
        } catch (error) {
            console.error('Google orqali ro\'yxatdan o\'tishda xatolik:', error.message);
        }
    };

    return (
        <div className='bg-base-100 opacity-70'>
            <div className=' max-w-[1280px] mx-auto py-[10%] '>
                <div className='mx-auto my-auto div-0 px-8 flex justify-between'>
                    <div className='div-1'>
                        <h1 className='text-[32px] max-w-[250px] font-[700]'>Sign In to Recharge Direct</h1>
                        <p className='text-[14px] max-w-[150px] font-[600] mt-10'>Agar sizda hisob bo'lmasa, ro'yxatdan o'ting!</p>
                    </div>
                    <div className='div-2'>
                        <img className='max-w-[400px]' src={img1} alt="" />
                    </div>
                    <form className='div-4' onSubmit={signInWithEmail}>
                        <div className='max-w-[400px]'>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                className='w-full bg-[#e6e8e8] text-[#838383] h-[50px] pl-5 rounded-[10px]' 
                                type="email" 
                                placeholder='Enter Email' 
                            />
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                className='w-full mt-5 bg-[#e6e8e8] text-[#727272] h-[50px] pl-5 rounded-[10px]' 
                                type="password" 
                                placeholder='⁕⁕⁕⁕⁕⁕⁕⁕' 
                            />
                            <p className='text-[12px] mt-4 mb-10 w-full text-end font-[500] text-[#00000073]'>Parolni tiklash?</p>
                            <button type='submit' className='w-full bg-[#6345fd] h-[50px] rounded-[10px] text-[#fff] text-[20px] font-[600]'>Kirish</button>
                            <div className='border-b-[1px] flex justify-center mt-5 mb-10'>
                                <p className='text-center mb-[-12px] w-[150px] bg-white font-[600]'>Yoki davom eting</p>
                            </div>
                            <div className='flex justify-between mt-10'>
                                <button 
                                    onClick={signInWithGoogle} 
                                    className='w-[117px] h-[60px] border-[1px] bg-[#0000] flex justify-center items-center rounded-[15px] hover:bg-white hover:drop-shadow-lg hover:border-[0]'
                                >
                                    <img src={img2} alt="" />
                                </button>
                                <button 
                                    className='w-[117px] h-[60px] border-[1px] bg-[#0000] flex justify-center items-center rounded-[15px] hover:bg-white hover:drop-shadow-lg hover:border-[0]'
                                >
                                    <img src={img3} alt="" />
                                </button>
                                <button 
                                    className='w-[117px] h-[60px] border-[1px] bg-[#0000] flex justify-center items-center rounded-[15px] hover:bg-white hover:drop-shadow-lg hover:border-[0]'
                                >
                                    <img src={img4} alt="" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>           
            </div>
        </div>
    );
}

export default Contact;
