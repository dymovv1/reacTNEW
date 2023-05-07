import './blogStyle.scss'
import PhotoSteave from '../../Images/steave_jobs.jpg'

function Blog() {
    return(
        <main className='main'>
            <div className='container'>
                <div className='blog-body'>
                    <div className='text'>
                        Steve Jobs is one of the most iconic and influential figures in the tech industry. He co-founded Apple Inc., one of the most successful companies in the world, and helped to develop a range of innovative products that have changed the way we live and work.

                        Born in San Francisco in 1955, Steve Jobs was adopted as a baby and grew up in California. He attended Reed College in Portland, Oregon but dropped out after just one semester. However, he continued to take classes and explore his interests in technology and design.

                        In the mid-1970s, Jobs teamed up with Steve Wozniak to develop and sell the Apple I, a personal computer that could be assembled by hand. The success of this product led to the founding of Apple Inc. in 1976, and the subsequent release of the Apple II, which became one of the most popular computers of the time.

                        Throughout the 1980s, Jobs played a key role in the development of several groundbreaking products, including the Macintosh computer and the iPod. However, he was also known for his difficult personality and his tendency to clash with colleagues and competitors.

                        In 1985, Jobs was fired from Apple Inc. and went on to found NeXT Computer, which developed high-end workstations for the business market. NeXT was eventually acquired by Apple in 1997, and Jobs returned to the company as CEO.

                        Over the next decade, Jobs led Apple through a period of unprecedented growth and success, introducing a range of innovative products such as the iPhone, iPad, and MacBook Air. He was known for his attention to detail and his focus on creating products that were both functional and beautiful.

                        Despite his success, Jobs faced several health issues in the latter years of his life. He was diagnosed with pancreatic cancer in 2003 and underwent a liver transplant in 2009. He eventually stepped down as CEO of Apple in August 2011, and passed away on October 5 of the same year.

                        Steve Jobs was a visionary and a pioneer in the tech industry. He was known for his passion for design and his commitment to creating products that could change the world. His legacy continues to inspire and influence the work of designers and technologists today.
                    </div>

                    <div>
                        <img src={PhotoSteave} alt="steave_jobs"/>
                    </div>

                </div>

            </div>

        </main>
    )

}

export default Blog;