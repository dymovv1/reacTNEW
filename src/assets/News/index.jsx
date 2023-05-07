import './newsStyle.scss'
import violet12 from '../../Images/violet12.jpg'
import m1 from '../../Images/m1.jpg'
import FaceTime from '../../Images/faceTime.jpg'
import internet5g from '../../Images/5g.jpg'


function News() {
    return (
        <section className='news'>
            <div className='container'>


                    <div>
                        <h1 className='news-title'>NEWS</h1>
                    </div>

                <div className='news-body'>



                    <div className='news-card'>
                        <div>
                            <img className='card-img' src={internet5g} alt="5g"/>
                        </div>

                        <p className='card-text'>
                            Apple оголосила про випуск нового iPad Pro з покращеною камерою, покращеним процесором та підтримкою 5G.
                        </p>

                    </div>

                    <div className='news-card'>
                        <div>
                            <img className='card-img' src={FaceTime} alt="facetime"/>
                        </div>

                        <p className='card-text'>
                            Відомо, що Apple планує випустити нову версію своєї операційної системи - iOS 15, яка міститиме багато нових функцій, таких як покращена функція FaceTime та нові інструменти для зберігання конфіденційної інформації користувача.
                        </p>
                    </div>

                    <div className='news-card'>
                        <div>
                            <img className='card-img' src={violet12} alt="iphone12"/>
                        </div>

                        <p className='card-text'>
                            Apple анонсувала випуск нових кольорів для своєї серії iPhone 12, включаючи фіолетовий колір, який буде доступний для iPhone 12 та iPhone 12 Mini.
                        </p>
                    </div>

                    <div className='news-card'>
                        <div>
                            <img className='card-img' src={m1} alt="m1"/>
                        </div>

                        <p className='card-text'>
                            Недавно Apple представила нову версію свого комп'ютера Mac - iMac з процесором M1, який пропонує швидкість та продуктивність, які раніше були неможливими на комп'ютерах Mac. Крім того, він має оновлений дизайн та доступний в кольорах.
                        </p>
                    </div>


                </div>


            </div>
        </section>
    )

}

export  default News;