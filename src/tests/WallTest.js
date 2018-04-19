import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import Wall from '../components/wall/Wall'

class WallTest extends Component {

    render() {
        return (
            <div >
                <Wall data = {mockData}/>
            </div >
        );
    }
}

const mockData = {
    user: {
        header: 'Mahmoud Yassin',
        src:'https://media.licdn.com/dms/image/C5603AQGbxA19222deA/profile-displayphoto-shrink_200_200/0?e=1528318800&v=beta&t=uIgX7Jpix_QzKaOFqNnJ4_upVJIH87mrVzGmfLtgEZA',
        rounded: true,
        subHeader: 'Software Engineer at Dell',
        id: "5",
        type: 'wall'
    },
    posts: [{ src: "https://media.licdn.com/dms/image/C4D03AQGz63bPFy5l-w/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=0RgWm8lZuzeRttl15g3jUoVAis_R3J6DHGg61LGJ2P8", header: "Rana Saeed", subHeader: "Software Engineer at Facebook", postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie vel diam et molestie. Maecenas quis erat lacinia, dapibus augue nec, semper orci. Aliquam consequat, nulla in dictum ornare, massa tellus posuere dolor, vitae cursus sem turpis nec ex. Nunc at auctor turpis. Vivamus luctus elit sed nunc euismod sagittis.",
     rounded: true, type: "wall", id: "1",
    comments:[
        {src:'https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=0bn_BRiXH7xqcqw8c-YiHKhE8YEn-HavnZMArBAk0TQ', rounded:true, header:'Hisham Zahran', subHeader:'Frontend Developer at Robusta', commentContent:'2alo eh 3alena dola we 2alo eh', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4E03AQGzY4f3GrUDQw/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=HxglI2nTPTXjEQKAI_9TOiDo3gMYFNIba1W21SdkfDQ', rounded:true, header:'Ahmed Soliman', subHeader:'Junior Software Engineer at Deutsches Forschungszentrum ', commentContent:'mesh same3 7aga !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5103AQEEO38lNfsKPg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=qEzhgi6WxpwopePryuSgCoyF0qYVf2fOITTaLM9Lt_s', rounded:true, header:'Loay El Zobaidy', subHeader:'Inovation Engineer at Dell', commentContent: 'ba2olek eh, ana shelt enhrda 60000 kilo deadlift, 7waaaar', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5603AQFEBE0OjQyp9w/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=x2iVVnyzcTr5AzOG_XRvMOu_cPDpgg_8EN3vK-NxYjQ', rounded:true, header:'Ahmad Elsagheer', subHeader:'Algorithms Engineer at Swvl', commentContent:'2olt million mara, mab7bsh el 3\'aba2 !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4D03AQFDn3Jyqg1RAQ/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=r9TdbtxSKWl6pDRe-8t7cA00j-hrGoTP0c7_dExruSQ', rounded:true, header:'Slim Abdennadher', subHeader:'Vice President for Academic Affairs at The German University in Cairo', commentContent:'7abibi ! el wall beta3ak dah yeganen...', type:'wall'},
    ]
    },



    { src: "https://media.licdn.com/dms/image/C5603AQGbxA19222deA/profile-displayphoto-shrink_200_200/0?e=1528318800&v=beta&t=uIgX7Jpix_QzKaOFqNnJ4_upVJIH87mrVzGmfLtgEZA", header: "Mahmoud Yassin", subHeader: "Software Engineer", postContent: "Donec et dui et nisl laoreet interdum. Vivamus aliquam est vel arcu laoreet luctus. Nulla tristique eros vitae arcu tempus, ac gravida est tempor. Ut egestas, quam eu rutrum euismod, quam enim suscipit nisl, ut ornare augue dolor sed ipsum. Praesent a vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
     rounded: true, type: "wall", id: "2",
     comments:[
        {src:'https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=0bn_BRiXH7xqcqw8c-YiHKhE8YEn-HavnZMArBAk0TQ', rounded:true, header:'Hisham Zahran', subHeader:'Frontend Developer at Robusta', commentContent:'2alo eh 3alena dola we 2alo eh', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4E03AQGzY4f3GrUDQw/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=HxglI2nTPTXjEQKAI_9TOiDo3gMYFNIba1W21SdkfDQ', rounded:true, header:'Ahmed Soliman', subHeader:'Junior Software Engineer at Deutsches Forschungszentrum ', commentContent:'mesh same3 7aga !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5103AQEEO38lNfsKPg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=qEzhgi6WxpwopePryuSgCoyF0qYVf2fOITTaLM9Lt_s', rounded:true, header:'Loay El Zobaidy', subHeader:'Inovation Engineer at Dell', commentContent: 'ba2olek eh, ana shelt enhrda 60000 kilo deadlift, 7waaaar', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5603AQFEBE0OjQyp9w/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=x2iVVnyzcTr5AzOG_XRvMOu_cPDpgg_8EN3vK-NxYjQ', rounded:true, header:'Ahmad Elsagheer', subHeader:'Algorithms Engineer at Swvl', commentContent:'2olt million mara, mab7bsh el 3\'aba2 !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4D03AQFDn3Jyqg1RAQ/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=r9TdbtxSKWl6pDRe-8t7cA00j-hrGoTP0c7_dExruSQ', rounded:true, header:'Slim Abdennadher', subHeader:'Vice President for Academic Affairs at The German University in Cairo', commentContent:'7abibi ! el wall beta3ak dah yeganen...', type:'wall'},
    ] },
     



    { src: "https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=aIQQL7ebG78TazxKmGNWcgIA5uAUUsVYTwEVo33L6zM", header: "Hisham Zahran", subHeader: "Software Engineer", postContent: "Nullam a suscipit mauris, eget ultricies dui. In pretium rutrum nibh posuere ornare. Quisque vulputate hendrerit urna, in posuere dui suscipit vel. Vivamus in massa quis justo pretium iaculis. Quisque ut pharetra nunc. Donec aliquet dolor dui, a blandit purus auctor id. Suspendisse potenti. Aliquam ex elit, interdum at orci ac, tristique aliquet ante. Sed imperdiet justo eu tempor pharetra.",
     rounded: true, type: "wall", id: "3",
     comments:[
        {src:'https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=0bn_BRiXH7xqcqw8c-YiHKhE8YEn-HavnZMArBAk0TQ', rounded:true, header:'Hisham Zahran', subHeader:'Frontend Developer at Robusta', commentContent:'2alo eh 3alena dola we 2alo eh', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4E03AQGzY4f3GrUDQw/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=HxglI2nTPTXjEQKAI_9TOiDo3gMYFNIba1W21SdkfDQ', rounded:true, header:'Ahmed Soliman', subHeader:'Junior Software Engineer at Deutsches Forschungszentrum ', commentContent:'mesh same3 7aga !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5103AQEEO38lNfsKPg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=qEzhgi6WxpwopePryuSgCoyF0qYVf2fOITTaLM9Lt_s', rounded:true, header:'Loay El Zobaidy', subHeader:'Inovation Engineer at Dell', commentContent: 'ba2olek eh, ana shelt enhrda 60000 kilo deadlift, 7waaaar', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5603AQFEBE0OjQyp9w/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=x2iVVnyzcTr5AzOG_XRvMOu_cPDpgg_8EN3vK-NxYjQ', rounded:true, header:'Ahmad Elsagheer', subHeader:'Algorithms Engineer at Swvl', commentContent:'2olt million mara, mab7bsh el 3\'aba2 !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4D03AQFDn3Jyqg1RAQ/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=r9TdbtxSKWl6pDRe-8t7cA00j-hrGoTP0c7_dExruSQ', rounded:true, header:'Slim Abdennadher', subHeader:'Vice President for Academic Affairs at The German University in Cairo', commentContent:'7abibi ! el wall beta3ak dah yeganen...', type:'wall'},
    ] },


    { src: "https://media.licdn.com/dms/image/C5603AQFICcTq_2n1ng/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=NOzomRL6liP1kKyikNpEE1x-xAz3hBjqJD2jRj1GoJE", header: "Nada Ahmed", subHeader: "Software Engineer", postContent: "Donec nec consectetur dui, non tincidunt orci. Fusce in convallis nulla. Nam imperdiet diam vel nulla maximus, ut facilisis sapien ornare. Maecenas imperdiet vehicula massa ut viverra. Vivamus sollicitudin placerat tempus. Pellentesque diam nunc, imperdiet et justo vel, sollicitudin malesuada magna. Aliquam justo ligula, accumsan sed feugiat ut, imperdiet eget magna. Fusce suscipit mauris et mauris molestie pharetra sed vitae nunc. Donec lobortis lacinia pellentesque.",
     rounded: true, type: "wall", id: "4",
     comments:[
        {src:'https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=0bn_BRiXH7xqcqw8c-YiHKhE8YEn-HavnZMArBAk0TQ', rounded:true, header:'Hisham Zahran', subHeader:'Frontend Developer at Robusta', commentContent:'2alo eh 3alena dola we 2alo eh', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4E03AQGzY4f3GrUDQw/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=HxglI2nTPTXjEQKAI_9TOiDo3gMYFNIba1W21SdkfDQ', rounded:true, header:'Ahmed Soliman', subHeader:'Junior Software Engineer at Deutsches Forschungszentrum ', commentContent:'mesh same3 7aga !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5103AQEEO38lNfsKPg/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=qEzhgi6WxpwopePryuSgCoyF0qYVf2fOITTaLM9Lt_s', rounded:true, header:'Loay El Zobaidy', subHeader:'Inovation Engineer at Dell', commentContent: 'ba2olek eh, ana shelt enhrda 60000 kilo deadlift, 7waaaar', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C5603AQFEBE0OjQyp9w/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=x2iVVnyzcTr5AzOG_XRvMOu_cPDpgg_8EN3vK-NxYjQ', rounded:true, header:'Ahmad Elsagheer', subHeader:'Algorithms Engineer at Swvl', commentContent:'2olt million mara, mab7bsh el 3\'aba2 !', type:'wall'},
        {src:'https://media.licdn.com/dms/image/C4D03AQFDn3Jyqg1RAQ/profile-displayphoto-shrink_800_800/0?e=1528826400&v=beta&t=r9TdbtxSKWl6pDRe-8t7cA00j-hrGoTP0c7_dExruSQ', rounded:true, header:'Slim Abdennadher', subHeader:'Vice President for Academic Affairs at The German University in Cairo', commentContent:'7abibi ! el wall beta3ak dah yeganen...', type:'wall'},
    ] },
    ]
}

WallTest = Radium(WallTest);
export default WallTest;
