import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader 
            type="TailSpin" 
            color="#000" 
            height={180} 
            width={250} 
            timeout={2050}
            />
        </div>
    );
}
export default LoaderComp