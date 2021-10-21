import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommend from './Recommend';
import New from './New';
import Originals from './Originals';
import Trend from './Trend';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = []
    let newDisneys = []
    let originals = []
    let trend = []

    useEffect(() => {
        db.collection('allMovies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type) {
                    case 'recommend' :
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                        break
                    case 'new' :
                        newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]  
                        break
                    case 'original' :
                        originals = [...originals, {id: doc.id, ...doc.data()}]   
                        break
                    case 'trending' :
                        trend = [...trend, {id: doc.id, ...doc.data()}] 
                        break
                }
            })
        dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trend,
        }))
    })
    }, [userName])

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommend />
            <New />
            <Originals />
            <Trend />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home