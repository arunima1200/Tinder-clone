import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import db from '../firebase'

const TinderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    .swipe{
        position: absolute;
    }
`

const Card = styled.div`
    position: relative;
    background-color: white;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    box-shadow: 0px 18px 53px 0px rgb(0, 0, 0, 0.3);
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    h3{
        position: absolute;
        bottom: 0;
        margin: 10px;
        color: white;
    }
`

const TinderCards = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        db.collection('people').onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data() 
        )))
    }, [])
    const swiped = (direction) => {
        console.log('You swiped: ' + direction);
    }

    const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

  return (
    <TinderContainer>
        {people.map(person => (
            <TinderCard 
            className='swipe' 
            key={person.name} 
            preventSwipe={['up', 'down']} 
            onSwipe={dir => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <Card style={{backgroundImage: `url(${person.url})`}}>
                    <h3>{person.name}</h3>
                </Card>
            </TinderCard>
        ))}
    </TinderContainer>
  )
}

export default TinderCards