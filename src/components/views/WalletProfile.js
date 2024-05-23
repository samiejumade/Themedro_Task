import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { AiOutlineQrcode, AiTwotoneContainer, AiOutlineKey, AiOutlineUser } from 'react-icons/ai';
import WalletResetPasswordModal from "../component/WalletResetPasswordModal";
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Make sure axios is installed

function WalletProfile() {
  const [t, i18n] = useTranslation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [showModal, setShowModal] = useState(false);
  // const [ethPrice, setEthPrice] = useState(null);
  // const [bnbPrice, setBnbPrice] = useState(null);

  // useEffect(() => {
  //   async function fetchPrices() {
  //     const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin&vs_currencies=usd');
  //     setEthPrice(response.data.ethereum.usd);
  //     setBnbPrice(response.data.binancecoin.usd);
  //   }
  //   fetchPrices();
  // }, []);

  return (
    <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
      <Row>
        <Col span={20}>
          {t('Email Address')}
        </Col>
        <Col span={4} className="text-center text-overflow">
          {t('Edit Password')}
        </Col>
      </Row>

      <Row className="text-lg font-bold">
        <Col span={20}>
          {t(user.email)}
        </Col>
        <Col span={4} className="text-center">
          <a onClick={() => setShowModal(true)}><AiOutlineKey size={20} className="inline mr-2" /></a>
        </Col>
      </Row>

      <Row className="text-lg font-bold mt-4">
        <Col span={20}>
          ETH Price: {ethPrice}
        </Col>
        <Col span={20}>
          BNB Price: {bnbPrice}
        </Col>
      </Row>

      {
        showModal ?
          <WalletResetPasswordModal setModalShow={setShowModal} title="Reset Password" />
          : null
      }
    </Col>
  );
}

export default WalletProfile;




















// import { Row,Col } from 'antd';
// import {useState} from 'react';
// import {AiOutlineQrcode,AiTwotoneContainer,AiOutlineKey,AiOutlineUser} from 'react-icons/ai';
// import WalletResetPasswordModal from "../component/WalletResetPasswordModal";
// import { useTranslation } from 'react-i18next';
    
// function WalletProfile() {
//   const [t,i18n] = useTranslation();
//   const [use,setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
//   const [showModal,setShowModal] = useState(false);
//   return (
//     <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
//       <Row>
//         <Col span={20}>
//          {t('Email Address')} 
//         </Col>
//         <Col span={4} className="text-center text-overflow">
//           {t('Edit Password')}
//         </Col>
//       </Row>

//       <Row className="text-lg font-bold">
//         <Col span={20}>
//           {t(use.email)}
//         </Col>
//         <Col span={4} className="text-center">
//           <a onClick={()=>setShowModal(true)}><AiOutlineKey size={20} className="inline mr-2"/></a>
//         </Col>
//       </Row>


//       {
//         showModal?
//           <WalletResetPasswordModal  setModalShow={setShowModal} title="Reset Password"/>
//         : null
//       }
//     </Col>
//   );
// }

// export default WalletProfile;


