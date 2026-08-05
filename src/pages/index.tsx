import { Button } from '@/components/Button';
import HomeDetails from '@/components/HomeDetails';
import HomeFeed from '@/components/HomeFeed';
import LeftMenu from '@/components/LeftMenu';
import Navigation from '@/components/Navigation';
import RightMenu from '@/components/RightMenu';

const App = () => {
    return (
        <>
            <Navigation />
            {/* <Button
                kbd=""
                isGlitch={true}  // Mude de $isGlitch para isGlitch
            >
                Abrir
            </Button> */}

            <HomeDetails>
                <div className="content">
                    <LeftMenu />
                    <HomeFeed />
                    <RightMenu />
                </div>
            </HomeDetails>
        </>
    );
}

export default App;