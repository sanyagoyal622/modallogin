import React,{useState} from 'react';
import './modalform.css';
import Button from './Button';
import Modal from 'react-modal';
 const ModalForm = () =>
 {

     const [inputMail,setInputMail]=useState(null);
     const [inputName,setInputName]=useState(null);
     const [modalIsOpen,setModalIsOpen]=useState(false);
     let  [isButtonHidden,setIsButtonHidden]=useState('block');
    
     function handleSubmit(e) {
       e.preventDefault();
         console.log(inputMail);
         console.log(inputName);
         
        if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputMail))
        {
    
          setModalIsOpen(false);
         setIsButtonHidden('none');
          return true;
        }
        else{
         alert('Please enter a valid email address');
                 return false;
        }
          
    }
    return (
            <div >
              <Button isButtonHidden={isButtonHidden} openModalBox={setModalIsOpen}/>
               
                  <Modal isOpen={modalIsOpen}>
                
                    <form onSubmit={handleSubmit} className="modal-content">
                            <div className="container">
                                <label for="uname"><b>Username</b></label>
                                <input onChange={(e)=>setInputName(e.target.value)} type="text" placeholder="Enter Username" name="uname" id="input-name" required/>

                                <label for="email"><b>E mail</b></label>
                                <input onChange={(e)=>setInputMail(e.target.value)} type="email" placeholder="Enter email" name="email" id="input-mail" required/>
  
                            </div>

                            <div className="container footer-button">
                            <button type="button" onClick={()=>setModalIsOpen(false)}  className="cancelbtn">Cancel</button>
                                
                            <button type="submit">Login</button>
                            </div>
                    </form>         
              
                </Modal>
             </div>

    );
};
export default ModalForm;
