// import React, { useState, useEffect } from 'react';
// import style from './SignIn.module.scss';
// import exit from '../../assets/exit.svg';
// import close from '../../assets/close.svg';

// function SignIn() {
//     const [isCodeRequested, setIsCodeRequested] = useState(false);
//     const [isFormVisible, setIsFormVisible] = useState(true);
//     const [timer, setTimer] = useState(240); // 4:00 minutes in seconds

//     useEffect(() => {
//         let interval;
//         if (isCodeRequested && timer > 0) {
//             interval = setInterval(() => {
//                 setTimer((prevTimer) => prevTimer - 1);
//             }, 1000);
//         }
//         return () => clearInterval(interval);
//     }, [isCodeRequested, timer]);

//     const handleGetCode = (event) => {
//         event.preventDefault();
//         setIsCodeRequested(true);
//         setTimer(240); // Reset timer to 4:00 minutes
//     };

//     const handleResendCode = () => {
//         setTimer(240); // Reset timer to 4:00 minutes
//     };

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;
//         return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//     };

//     const handleClose = () => {
//         setIsFormVisible(false);
//     };

//     const handleBack = () => {
//         setIsCodeRequested(false);
//     };
//     return (
//         isFormVisible && (
//             <div className={style.back}>
//                 {!isCodeRequested ? (
//                     <form className={style.signIn} onSubmit={handleGetCode}>
//                         <h1>Вход</h1>
//                         <label>
//                             <span>Номер телефона</span>
//                             <input type="tel" placeholder='+7' />
//                         </label>
//                         <button className={style.signIn__btn} type='submit'>Получить код</button>
//                     </form>
//                 ) : (
//                     <form className={style.enterCode}>
//                         <img className={style.enterCode_close} src={close} alt="close" onClick={handleClose} />
//                         <div className={style.enterCode__exit} onClick={handleBack}>
//                             <img src={exit} alt="exit" />
//                             <span>Назад</span>
//                         </div>
//                         <h2>Введите код</h2>
//                         <label>
//                             <p>На ваш номер телефона выслан код подтверждения. <br /> Введите его в поле ниже для входа</p>
//                             <input type="text" placeholder='Введите код' />
//                         </label>
//                         <button className={style.enterCode__btn} type='submit'>Подтвердить</button>
//                         {timer > 0 ? (
//                             <p className={style.enterCode__text}>Отправить код повторно можно будет через {formatTime(timer)}</p>
//                         ) : (
//                             <button className={style.enterCode__btnCode} type="button" onClick={handleResendCode}>Отправить код повторно</button>
//                         )}
//                     </form>
//                 )}
//             </div>
//         )

//     );
// }

// export default SignIn;

import React, { useState, useEffect } from 'react';
import style from './SignIn.module.scss';
import exit from '../../assets/exit.svg';
import close from '../../assets/close.svg';
import DataCollection from '../../pages/dataCollection/DataCollection';


function SignIn() {
    const [isCodeRequested, setIsCodeRequested] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [timer, setTimer] = useState(240); // 4:00 minutes in seconds
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [codeError, setCodeError] = useState('');
    const [isDataCollectionVisible, setIsDataCollectionVisible] = useState(false);


    useEffect(() => {
        let interval;
        if (isCodeRequested && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isCodeRequested, timer]);

    const handleGetCode = (event) => {
        event.preventDefault();
        if (validatePhoneNumber(phoneNumber)) {
            setIsCodeRequested(true);
            setTimer(240); // Reset timer to 4:00 minutes
            setPhoneError('');
        } else {
            setPhoneError('Введите правильный номер телефона');
        }
    };

    const handleResendCode = () => {
        setTimer(240); // Reset timer to 4:00 minutes
    };

    const handleClose = () => {
        setIsFormVisible(false);
    };

    const handleBack = () => {
        setIsCodeRequested(false);
    };

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\+7\d{10}$/;
        return phoneRegex.test(number);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleVerificationCodeChange = (event) => {
        setVerificationCode(event.target.value);
    };

    const handleVerifyCode = (event) => {
        event.preventDefault();
        if (verificationCode.length === 6) {
            console.log(`Verification code: ${verificationCode}`);
            setCodeError('');
            setIsFormVisible(false); // Close the form
            setIsDataCollectionVisible(true); // Show data collection form
        } else {
            setCodeError('Введите правильный код подтверждения');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            {isFormVisible && (
            <div className={style.back}>
                {!isCodeRequested ? (
                    <form className={style.signIn} onSubmit={handleGetCode}>
                        <h1>Вход</h1>
                        <label>
                            <span>Номер телефона</span>
                            <input type="tel" placeholder='+7' value={phoneNumber} onChange={handlePhoneNumberChange} />
                        </label>
                        {phoneError && <p className={style.error}>{phoneError}</p>}
                        <button className={style.signIn__btn} type='submit'>Получить код</button>
                    </form>
                ) : (
                    <form className={style.enterCode} onSubmit={handleVerifyCode}>
                        <img className={style.enterCode_close} src={close} alt="close" onClick={handleClose} />
                        <div className={style.enterCode__exit} onClick={handleBack}>
                            <img src={exit} alt="exit" />
                            <span>Назад</span>
                        </div>
                        <h2>Введите код</h2>
                        <label>
                            <p>На ваш номер телефона выслан код подтверждения. <br /> Введите его в поле ниже для входа</p>
                            <input type="text" placeholder='Введите код' value={verificationCode} onChange={handleVerificationCodeChange} />
                        </label>
                        {codeError && <p className={style.error}>{codeError}</p>}
                        <button className={style.enterCode__btn} type='submit'>Подтвердить</button>
                        {timer > 0 ? (
                            <p className={style.enterCode__text}>Отправить код повторно можно будет через {formatTime(timer)}</p>
                        ) : (
                            <button className={style.enterCode__btnCode} type="button" onClick={handleResendCode}>Отправить код повторно</button>
                        )}
                    </form>
                )}
            </div>
            )}
            {isDataCollectionVisible && <DataCollection />}

        </div>

    );
}

export default SignIn;
