import myLogo from '../logo.svg'

const Background = () => {
    return (
        <div id="main">
            <div>1</div>
            <div style={{ background: `url(/logo512.png) center / cover` }} >2</div>

            <div style={{ background: `url(${myLogo}) center / cover` }} >3</div>
        </div>
    );
}

export default Background;