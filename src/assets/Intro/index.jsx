import './introStyle.scss'
import Video from '../../Video/introSteave.mp4'

function Intro() {
    return (
    <section className='intro'>

        <div >
            <video className='video' src={Video} autoPlay loop muted />
        </div>

        <div className='container'>

        </div>

    </section>
    )

}

export default Intro;