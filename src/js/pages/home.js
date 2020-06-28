let templateCore = require("templates/catalog.pug");

const listData = {
    list:[
        {
          id: 1,
          img:'https://lh3.googleusercontent.com/zHIBDCM6sniXgcg8sPKj2Si4vW3bLNEw_v8xO1iweSlBNtCdPBD9xQlo6TKHhxyTlUpJHeleWGIlefTbdYEegWS-R109g5Hi4U7EaQrxu-hM76Blk8PmjmqOoV_b1K3Dx5-zjcJbxJ4H3rP07FXgm_0AOpCn4QcIFo-cJjSD-90jSklj8kfNuJQioTOjk5fQ85aiWt_-qGMH-TLSvpe8NzwxE7RT2_6BzYERxRCnAzRuS2BKbOIRTz2arFPvxywlmubhOBVaPDPid4hbqItLRWjgbFr2PYK_eOwsPI7iv4PflgMz57_I2cr2s-9UTLJNDBoz3QHls2uRhaAVF3qgOc8XbBkhSIVEmJ_MtvrmvcrO7kqsZFmrIO5TEKN4ork8g9YWLAJl0c79nFX-3RQROYYKly5ou661vdIx3jZqcgcbyoRbxd7GVX8UQkvxc1GW4Xs5KD4kDBsZmUybtp0U9g5m9rqLG1vYJBSYgqOl0fsP1HcRO2SeawMeTdRX3Qe4hq9Okq54aDIDmRkKwVJDpIcTUMU2Eekn5IvQtOylg01PfuSE2D1TdlTwoq15a0hRpNirfbkp0PMB-1PtmM0rkzyHKWbvpn_hs5Yeldt7PNeW920O9-6JE7h3xLp16TDpL0GGLu0sFIut4u_lM4W3WrQpR0ucPOGfwuMZGPUKCP7Mnxl9LP-PHQSZofTi7yL59F5zUjsTKRnzbptBYPvy4docj9-7-LrfTUelUKyaWTDylBo4BTVfuA=w718-h539-no?authuser=0',
          title: 'Ядро клетки',
        },
        {
          id: 2,
          img:'https://hsto.org/getpro/geektimes/post_images/672/881/5cd/6728815cd7397e71fec8dda79879e375.jpg',
          title: 'Вторая статья',
        },
        {
          id: 3,
          img:'https://panteric.ru/files/gallery/3626/big/qfbz5bqhuqq_1581614836.jpg',
          title: 'Ядро клетки',
        }
    ],
    loading:false
  };
function home() {
    document.querySelector("#root").innerHTML = templateCore(listData);
}
export default home;