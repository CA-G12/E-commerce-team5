import { Triangle } from 'react-loader-spinner';
import './style.css';

function Index() {
  return (
    <div className="loading-container">
      <Triangle
        height={180}
        width={180}
        color="#09c"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible
      />
    </div>
  );
}

export default Index;
