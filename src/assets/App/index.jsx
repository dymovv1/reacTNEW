import Header from "../Header/index.jsx";
import Intro from "../Intro/index.jsx"
import Blog from "../Blog/index.jsx"
import News from "../News/index.jsx"
import Footer from "../Footer/index.jsx";

import '../Container/container.scss';
import '../General/generalSettings.scss'

function App () {
    return (
        <div>
            <Header/>
            <Intro />
            <Blog />
            <News />
            <Footer />
        </div>
    )
}

export default App;