import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import ListAdapter from '../components/wrappers/ListAdapter';
import DetailsHeader from '../components/details/DetailsHeader';
import Posts from '../components/wall/Posts';

class WrappersTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Wall Testing</h1>
                </header>
                <section>
                    <ListAdapter data = {mockData} listItemView={Posts} verticalSplit />
                </section>
            </div >
        );
    }
}

const mockData = [
    { src:"https://media.licdn.com/dms/image/C4D03AQGz63bPFy5l-w/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=0RgWm8lZuzeRttl15g3jUoVAis_R3J6DHGg61LGJ2P8", header: "Rana Saeed", subHeader:"Software Engineer", postContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie vel diam et molestie. Maecenas quis erat lacinia, dapibus augue nec, semper orci. Aliquam consequat, nulla in dictum ornare, massa tellus posuere dolor, vitae cursus sem turpis nec ex. Nunc at auctor turpis. Vivamus luctus elit sed nunc euismod sagittis.", rounded:true, type:"wall", id:"1" },
    { src:"https://media.licdn.com/dms/image/C5603AQGbxA19222deA/profile-displayphoto-shrink_200_200/0?e=1528318800&v=beta&t=uIgX7Jpix_QzKaOFqNnJ4_upVJIH87mrVzGmfLtgEZA", header: "Mahmoud Yassin", subHeader:"Software Engineer", postContent:"Donec et dui et nisl laoreet interdum. Vivamus aliquam est vel arcu laoreet luctus. Nulla tristique eros vitae arcu tempus, ac gravida est tempor. Ut egestas, quam eu rutrum euismod, quam enim suscipit nisl, ut ornare augue dolor sed ipsum. Praesent a vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", rounded:true, type:"wall", id:"2" },
    { src:"https://media.licdn.com/dms/image/C5103AQHS2Iuh1fjLUg/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=aIQQL7ebG78TazxKmGNWcgIA5uAUUsVYTwEVo33L6zM", header: "Hisham Zahran", subHeader:"Software Engineer", postContent:"Nullam a suscipit mauris, eget ultricies dui. In pretium rutrum nibh posuere ornare. Quisque vulputate hendrerit urna, in posuere dui suscipit vel. Vivamus in massa quis justo pretium iaculis. Quisque ut pharetra nunc. Donec aliquet dolor dui, a blandit purus auctor id. Suspendisse potenti. Aliquam ex elit, interdum at orci ac, tristique aliquet ante. Sed imperdiet justo eu tempor pharetra.", rounded:true, type:"wall", id:"2" },
    { src:"https://media.licdn.com/dms/image/C5603AQFICcTq_2n1ng/profile-displayphoto-shrink_800_800/0?e=1528318800&v=beta&t=NOzomRL6liP1kKyikNpEE1x-xAz3hBjqJD2jRj1GoJE", header: "Nada Ahmed", subHeader:"Software Engineer", postContent: "Donec nec consectetur dui, non tincidunt orci. Fusce in convallis nulla. Nam imperdiet diam vel nulla maximus, ut facilisis sapien ornare. Maecenas imperdiet vehicula massa ut viverra. Vivamus sollicitudin placerat tempus. Pellentesque diam nunc, imperdiet et justo vel, sollicitudin malesuada magna. Aliquam justo ligula, accumsan sed feugiat ut, imperdiet eget magna. Fusce suscipit mauris et mauris molestie pharetra sed vitae nunc. Donec lobortis lacinia pellentesque.", rounded:true, type:"wall", id:"2" },
]

const mockData2 = [
    { children: 'Post 1' },
    { children: 'Post 2' },
    { children: 'Post 3' },
    { children: 'Post 4' },
]

const styles = {
    base: {
        background: colors.whiteGray,
        padding: '10px',
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '10px',
        textAlign: 'center'
    }
}

WrappersTest = Radium(WrappersTest);
export default WrappersTest;
